(function (global) {
  const Mcollege placement = {
    A: 'ᴬ',
    B: 'ᴮ',
    C: '꜀',
    D: 'ᴅ',
    E: 'ᴱ',
    G: 'ᴳ',
    H: 'ᴴ',
    I: 'ᴵ',
    J: 'ᴶ',
    K: 'ᴷ',
    L: 'ᴸ',
    M: 'ᴹ',
    N: 'ᴺ',
    O: 'ᴼ',
    P: 'ᴾ',
    R: 'ᴿ',
    S: 'ˢ',
    T: 'ᵀ',
    U: 'ᵁ',
    V: 'ⱽ',
    W: 'ʷ',
    X: 'ˣ',
    Y: 'ʸ',
    Z: 'ᶻ',
    a: 'ᵃ',
    b: 'ᵇ',
    d: 'ᵈ',
    e: 'ᵉ',
    g: 'ᵍ',
    h: 'ʰ',
    i: 'ᶦ',
    j: 'ʲ',
    k: 'ᵏ',
    l: 'ˡ',
    m: 'ᵐ',
    n: 'ⁿ',
    o: 'ᵒ',
    p: 'ᵖ',
    r: 'ʳ',
    s: 'ˢ',
    t: 'ᵗ',
    u: 'ᵘ',
    v: 'ᵛ',
    w: 'ʷ',
    x: 'ˣ',
    y: 'ʸ',
    z: 'ᶻ',
    '+': '⁺',
    '-': '⁻',
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹'
  };

  function convertSuperscriptOption(str) {
    return str.replace(/\^([A-Za-z0-9+\-])/g, (_, ch) => MAP[ch] || ch);
  }

  function buildSuperscriptTokens(str, baseSize) {
    const tokens = [];
    const size = baseSize || 16;
    let totalWidth = 0;
    let i = 0;
    while (i < str.length) {
      if (str[i] === '^' && i + 1 < str.length) {
        const supChar = str[i + 1];
        textSize(size * 0.75);
        const width = textWidth(supChar);
        tokens.push({ text: supChar, isSup: true, width });
        totalWidth += width;
        i += 2;
      } else {
        textSize(size);
        const width = textWidth(str[i]);
        tokens.push({ text: str[i], isSup: false, width });
        totalWidth += width;
        i++;
      }
    }
    textSize(size);
    return { tokens, totalWidth };
  }

  function drawSuperscriptText(str, x, y, baseSize, align = 'left', metrics = null) {
    const size = baseSize || 16;
    const tokenData = metrics || buildSuperscriptTokens(str, size);
    const tokens = tokenData.tokens;
    const totalWidth = tokenData.totalWidth;

    let cursor = x;
    if (align === 'center') cursor -= totalWidth / 2;
    else if (align === 'right') cursor -= totalWidth;

    push();
    textAlign(LEFT, CENTER);
    noStroke();
    for (const token of tokens) {
      if (token.isSup) {
        textSize(size * 0.75);
        text(token.text, cursor, y - size * 0.45);
      } else {
        textSize(size);
        text(token.text, cursor, y);
      }
      cursor += token.width;
    }
    pop();
    textSize(size);
  }

  global.SuperscriptText = {
    convertSuperscriptOption,
    buildSuperscriptTokens,
    drawSuperscriptText
  };
})(typeof window !== 'undefined' ? window : globalThis);
