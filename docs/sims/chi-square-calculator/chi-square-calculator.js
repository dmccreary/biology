(function () {
    'use strict';

    // ── Ratio configurations ───────────────────────────────────────────────────
    // Each entry: category labels, ratio parts, default observed counts
    const RATIOS = {
        '3:1': {
            categories:  ['Dominant phenotype', 'Recessive phenotype'],
            parts:       [3, 1],
            defaults:    [290, 110]
        },
        '1:2:1': {
            categories:  ['Homozygous dominant (AA)', 'Heterozygous (Aa)', 'Homozygous recessive (aa)'],
            parts:       [1, 2, 1],
            defaults:    [93, 202, 105]
        },
        '9:3:3:1': {
            categories:  ['A_B_ (both dominant)', 'A_bb (A dominant only)', 'aaB_ (B dominant only)', 'aabb (both recessive)'],
            parts:       [9, 3, 3, 1],
            defaults:    [222, 78, 71, 29]
        }
    };

    // Critical values at p = 0.05 keyed by degrees of freedom
    const CRITICAL_VALUES = { 1: 3.84, 2: 5.99, 3: 7.82 };

    let currentRatio = '3:1';

    // ── Build the input table rows for a given ratio ───────────────────────────
    function buildInputRows(ratioKey) {
        const { categories, parts, defaults } = RATIOS[ratioKey];
        const partSum = parts.reduce((a, b) => a + b, 0);
        const tbody = document.getElementById('inputBody');
        tbody.innerHTML = '';

        categories.forEach((cat, i) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="text-align:left">${cat}</td>
                <td>
                  <input type="number" min="0" id="obs${i}"
                         value="${defaults[i]}"
                         aria-label="Observed count for ${cat}">
                </td>
                <td>${parts[i]}/${partSum}</td>
                <td id="exp${i}">—</td>`;
            tbody.appendChild(tr);
        });

        refreshExpected(ratioKey);
        document.getElementById('calcSection').style.display = 'none';
    }

    // ── Read the current observed counts from input fields ─────────────────────
    function getObserved(ratioKey) {
        const n = RATIOS[ratioKey].categories.length;
        return Array.from({ length: n }, (_, i) =>
            Math.max(0, parseInt(document.getElementById(`obs${i}`).value) || 0)
        );
    }

    // ── Recalculate and display expected counts live as user types ─────────────
    function refreshExpected(ratioKey) {
        const { parts } = RATIOS[ratioKey];
        const observed   = getObserved(ratioKey);
        const total      = observed.reduce((a, b) => a + b, 0);
        const partSum    = parts.reduce((a, b) => a + b, 0);
        const expected   = parts.map(p => (p / partSum) * total);

        parts.forEach((_, i) => {
            const el = document.getElementById(`exp${i}`);
            if (el) el.textContent = total > 0 ? expected[i].toFixed(2) : '—';
        });
        document.getElementById('totalObs').textContent = total > 0 ? total      : '—';
        document.getElementById('totalExp').textContent = total > 0 ? total.toFixed(2) : '—';
        return { observed, expected, total };
    }

    // ── Run the full chi-square calculation and display all result stages ───────
    function calculate() {
        const { parts, categories } = RATIOS[currentRatio];
        const { observed, expected, total } = refreshExpected(currentRatio);

        if (total === 0) { alert('Please enter at least one observed count.'); return; }

        const df = parts.length - 1;

        // Stage 3–4: populate the step-by-step calculation table
        const calcBody = document.getElementById('calcBody');
        calcBody.innerHTML = '';
        let chiSquare = 0;

        categories.forEach((cat, i) => {
            const O      = observed[i];
            const E      = expected[i];
            const diff   = O - E;
            const diffSq = diff * diff;
            const term   = E > 0 ? diffSq / E : 0;
            chiSquare   += term;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="text-align:left">${cat}</td>
                <td>${O}</td>
                <td>${E.toFixed(2)}</td>
                <td>${diff.toFixed(2)}</td>
                <td>${diffSq.toFixed(2)}</td>
                <td class="chi-col">${term.toFixed(4)}</td>`;
            calcBody.appendChild(tr);
        });

        document.getElementById('chiTotal').textContent = chiSquare.toFixed(4);

        // Stage 5a: critical value table — highlight the row for this test's df
        const critBody = document.getElementById('critBody');
        critBody.innerHTML = '';
        Object.entries(CRITICAL_VALUES).forEach(([d, cv]) => {
            const isActive = parseInt(d) === df;
            const tr = document.createElement('tr');
            if (isActive) tr.classList.add('crit-active');
            tr.innerHTML = `
                <td>${d}${isActive ? ' ← this test' : ''}</td>
                <td>${cv}</td>`;
            critBody.appendChild(tr);
        });

        // Stage 5b: comparison line and verdict
        const critVal = CRITICAL_VALUES[df];
        const reject  = chiSquare > critVal;

        document.getElementById('comparison').innerHTML =
            `Your χ² = <strong>${chiSquare.toFixed(4)}</strong>
             &nbsp;vs.&nbsp;
             critical value = <strong>${critVal}</strong> &nbsp;(df&nbsp;=&nbsp;${df})`;

        const verdictEl = document.getElementById('verdict');
        verdictEl.className = reject ? 'verdict-fail' : 'verdict-pass';
        verdictEl.textContent = reject
            ? '✗  Reject the null hypothesis — deviation is statistically significant (p < 0.05)'
            : '✓  Fail to reject the null hypothesis — deviation is within chance variation (p > 0.05)';

        // Build worked explanation text (shown when checkbox is checked)
        buildExplanation(currentRatio, observed, expected, chiSquare, df, critVal, reject);

        document.getElementById('calcSection').style.display = 'block';
    }

    // ── Compose the narrative worked explanation ───────────────────────────────
    function buildExplanation(ratioKey, observed, expected, chiSquare, df, critVal, reject) {
        const { categories } = RATIOS[ratioKey];
        const total  = observed.reduce((a, b) => a + b, 0);

        const obsStr = categories
            .map((c, i) => `${observed[i]} ${c.split(' ')[0].toLowerCase()}`)
            .join(', ');
        const expStr = categories
            .map((c, i) => `${expected[i].toFixed(0)} ${c.split(' ')[0].toLowerCase()}`)
            .join(', ');
        const conclusion = reject
            ? `Since ${chiSquare.toFixed(2)} &gt; ${critVal}, we <strong>reject the null hypothesis</strong>.
               The deviation from the expected ${ratioKey} ratio is larger than expected by chance alone (p &lt; 0.05).
               Something other than random sampling variation may be distorting the ratio.`
            : `Since ${chiSquare.toFixed(2)} &lt; ${critVal}, we <strong>fail to reject the null hypothesis</strong>.
               The deviation from the expected ${ratioKey} ratio is within the range of normal chance variation (p &gt; 0.05).
               The data are consistent with Mendelian inheritance.`;

        document.getElementById('explText').innerHTML = `
            <p>
              In this cross we observed <strong>${obsStr}</strong> out of
              <strong>${total}</strong> total offspring.
              Under the expected <strong>${ratioKey}</strong> ratio,
              we predicted <strong>${expStr}</strong>.
              Applying χ² = Σ(O − E)² / E across all
              ${categories.length} categories gives
              <strong>χ² = ${chiSquare.toFixed(4)}</strong>.
              With <strong>${df}&nbsp;degree${df > 1 ? 's' : ''} of freedom</strong>
              (${categories.length} categories − 1), the critical value at p = 0.05
              is <strong>${critVal}</strong>.
              ${conclusion}
            </p>`;
    }

    // ── Reset to defaults for the current ratio ────────────────────────────────
    function reset() {
        buildInputRows(currentRatio);
        document.getElementById('showExpl').checked = false;
        document.getElementById('explText').style.display = 'none';
    }

    // ── Event listeners ────────────────────────────────────────────────────────
    document.getElementById('ratioSelect').addEventListener('change', function () {
        currentRatio = this.value;
        buildInputRows(currentRatio);
    });

    // Refresh expected counts live as user edits observed values;
    // also hide the results section so stale χ² isn't shown.
    document.getElementById('inputBody').addEventListener('input', function () {
        refreshExpected(currentRatio);
        document.getElementById('calcSection').style.display = 'none';
    });

    document.getElementById('calcBtn').addEventListener('click', calculate);
    document.getElementById('resetBtn').addEventListener('click', reset);

    document.getElementById('showExpl').addEventListener('change', function () {
        document.getElementById('explText').style.display = this.checked ? 'block' : 'none';
    });

    // ── Initialise ─────────────────────────────────────────────────────────────
    buildInputRows(currentRatio);

}());
