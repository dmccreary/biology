const categoryColors = {
    'Pre-Darwin':       '#7f8c8d',
    'Darwin Era':       '#27ae60',
    'Modern Synthesis': '#2980b9',
    'Molecular Era':    '#8e44ad'
};

let timeline, timelineData, allItems, allEventsRaw;

fetch('timeline.json')
    .then(r => r.json())
    .then(data => {
        allEventsRaw = data.events;
        allItems = data.events.map((evt, i) => {
            const year = parseInt(evt.start_date.year);
            const month = evt.start_date.month ? parseInt(evt.start_date.month) - 1 : 0;
            const day = evt.start_date.day ? parseInt(evt.start_date.day) : 1;
            const item = {
                id: i,
                content: evt.text.headline,
                start: new Date(year, month, day),
                title: evt.notes || '',
                category: evt.group || 'Default',
                style: 'background-color:' + (categoryColors[evt.group] || '#555') +
                       '; color: white; border-color:' + (categoryColors[evt.group] || '#555') +
                       '; border-radius: 6px; padding: 4px 8px; font-size: 0.82em;'
            };
            if (evt.end_date) {
                const ey = parseInt(evt.end_date.year);
                const em = evt.end_date.month ? parseInt(evt.end_date.month) - 1 : 11;
                const ed = evt.end_date.day ? parseInt(evt.end_date.day) : 28;
                item.end = new Date(ey, em, ed);
                item.type = 'range';
            }
            return item;
        });

        timelineData = new vis.DataSet(allItems);

        const container = document.getElementById('timeline');
        const options = {
            width: '100%',
            height: '350px',
            margin: {
                item: { horizontal: 50, vertical: 10 },
                axis: 40
            },
            orientation: 'top',
            zoomMin: 1000 * 60 * 60 * 24 * 365 * 5,
            zoomMax: 1000 * 60 * 60 * 24 * 365 * 400,
            min: new Date(1700, 0, 1),
            max: new Date(2030, 0, 1),
            tooltip: { followMouse: true },
            stack: true,
            selectable: true,
            showCurrentTime: false,
            moveable: true,
            zoomable: false,
            align: 'center'
        };

        timeline = new vis.Timeline(container, timelineData, options);

        setWindowPadded(allItems);

        timeline.on('select', function(props) {
            if (props.items.length > 0) {
                showEventDetails(props.items[0]);
            }
        });
    });

function setWindowPadded(items) {
    const dates = items.map(item => item.start.getTime());
    if (items.some(i => i.end)) {
        items.forEach(i => { if (i.end) dates.push(i.end.getTime()); });
    }
    const minDate = Math.min(...dates);
    const maxDate = Math.max(...dates);
    const twoYears = 2 * 365 * 24 * 60 * 60 * 1000;
    timeline.setWindow(
        new Date(minDate - twoYears),
        new Date(maxDate + twoYears),
        { animation: false }
    );
}

function filterCategory(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (category === 'all') {
        timelineData.clear();
        timelineData.add(allItems);
        setWindowPadded(allItems);
    } else {
        const filtered = allItems.filter(item => item.category === category);
        timelineData.clear();
        timelineData.add(filtered);
        if (filtered.length > 0) setWindowPadded(filtered);
    }
}

function showEventDetails(itemId) {
    const evt = allEventsRaw[itemId];
    if (!evt) return;

    const detail = document.getElementById('event-detail');
    const placeholder = document.querySelector('.event-placeholder');
    const badge = document.getElementById('detail-badge');
    const title = document.getElementById('detail-title');
    const desc = document.getElementById('detail-description');
    const ctx = document.getElementById('detail-context');

    const color = categoryColors[evt.group] || '#555';
    badge.style.backgroundColor = color;
    badge.textContent = evt.group + ' \u2022 ' + evt.start_date.year + (evt.end_date ? '\u2013' + evt.end_date.year : '');
    title.innerHTML = evt.text.headline;
    desc.innerHTML = evt.text.text;

    if (evt.notes) {
        ctx.innerHTML = '<strong>college placement Biology Context:</strong> ' + evt.notes;
        ctx.style.display = 'block';
    } else {
        ctx.style.display = 'none';
    }

    placeholder.style.display = 'none';
    detail.classList.add('visible');
}

function panLeft() {
    const range = timeline.getWindow();
    const span = range.end - range.start;
    timeline.setWindow(range.start - span * 0.3, range.end - span * 0.3, { animation: true });
}
function panRight() {
    const range = timeline.getWindow();
    const span = range.end - range.start;
    timeline.setWindow(range.start.getTime() + span * 0.3, range.end.getTime() + span * 0.3, { animation: true });
}
function zoomIn() {
    const range = timeline.getWindow();
    const center = (range.start.getTime() + range.end.getTime()) / 2;
    const span = range.end - range.start;
    timeline.setWindow(center - span * 0.25, center + span * 0.25, { animation: true });
}
function zoomOut() {
    const range = timeline.getWindow();
    const center = (range.start.getTime() + range.end.getTime()) / 2;
    const span = range.end - range.start;
    timeline.setWindow(center - span, center + span, { animation: true });
}
function fitAll() {
    setWindowPadded(allItems);
}

// Show return link only when not in iframe
if (window.self === window.top) {
    document.getElementById('return-link').style.display = 'block';
}
