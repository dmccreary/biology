document.addEventListener('DOMContentLoaded', () => {
    const controls = ['momType', 'momRh', 'dadType', 'dadRh'];
    controls.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', calculateBloodType);
    });
    calculateBloodType();
});

function calculateBloodType() {
    const mom = document.getElementById('momType').value;
    const momRh = document.getElementById('momRh').value;
    const dad = document.getElementById('dadType').value;
    const dadRh = document.getElementById('dadRh').value;
    const resultDiv = document.getElementById('result');
    const explanationDiv = document.getElementById('explanation');

    // Basic logic mapping based on inheritance
    let possibleTypes = new Set();
    
    // Simplified logic: A, B > O
    if (mom === 'O' && dad === 'O') possibleTypes.add('O');
    else if (mom === 'AB' || dad === 'AB') {
        if (mom === 'AB' && dad === 'AB') { possibleTypes.add('A'); possibleTypes.add('B'); possibleTypes.add('AB'); }
        else if (mom === 'AB' || dad === 'AB') {
            let other = (mom === 'AB') ? dad : mom;
            if (other === 'O') { possibleTypes.add('A'); possibleTypes.add('B'); }
            else { possibleTypes.add('A'); possibleTypes.add('B'); possibleTypes.add('AB'); }
        }
    } else {
        // A, B, O combinations
        if (mom === 'O' || dad === 'O') {
            let other = (mom === 'O') ? dad : mom;
            possibleTypes.add(other);
            possibleTypes.add('O');
        } else {
            // A or B combination
            if (mom === dad) { possibleTypes.add(mom); possibleTypes.add('O'); }
            else { possibleTypes.add('A'); possibleTypes.add('B'); possibleTypes.add('AB'); possibleTypes.add('O'); }
        }
    }

    const typeList = Array.from(possibleTypes).sort().join(', ');
    resultDiv.textContent = `Possible Child Blood Types (ABO): ${typeList}`;

    const rhNotes = buildRhExplanation(momRh, dadRh);
    explanationDiv.innerHTML = `
        <p>The ABO result above only reflects A, B, AB, or O phenotypes. Each parent also contributes an Rh allele: “+” is dominant and “–” is recessive.</p>
        <p><strong>Rh possibilities:</strong> ${rhNotes}</p>
        <p>Examples: if both parents are Rh–, all children must be Rh–. If at least one parent is Rh+, some or all children may be Rh+ depending on whether that parent carries a hidden recessive allele.</p>
    `;
}

function buildRhExplanation(momRh, dadRh) {
    if (momRh === '-' && dadRh === '-') {
        return 'Both parents are Rh–, so all children will be Rh–.';
    }
    if (momRh === '+' && dadRh === '+') {
        return 'Both parents are Rh+. Children are very likely Rh+, but Rh– is possible only if each parent carries a recessive allele.';
    }
    return 'One parent is Rh+ and the other Rh–. Children can be either Rh+ or Rh– depending on the Rh+ parent’s genotype.';
}
