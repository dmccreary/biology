// MathJax configuration for AP Biology
// Enables standard math notation AND mhchem for chemical equations (\ce{})
//
// IMPORTANT — delimiter rules for markdown authors:
//   Inline math:   $...$          e.g.  $E = mc^2$
//   Block math:    $$...$$        e.g.  $$\Delta G = \Delta H - T\Delta S$$
//   Chemistry:     $\ce{...}$     e.g.  $\ce{6CO2 + 6H2O -> C6H12O6 + 6O2}$
//
// NEVER write \( \) or \[ \] in markdown — Python-Markdown may corrupt them
// before MathJax sees them. Always use $ and $$ in content files.
//
// The pymdownx.arithmatex extension (generic: true) converts $ -> \( \)
// and $$ -> \[ \] internally before handing off to MathJax, so the
// backslash delimiters below are what MathJax receives — not what you write.

window.MathJax = {
  loader: {
    load: ['[tex]/mhchem']
  },
  tex: {
    packages: {'[+]': ['mhchem']},
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']]
  }
};
