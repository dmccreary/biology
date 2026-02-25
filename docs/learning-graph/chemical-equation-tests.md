# Chemical Equation Rendering Tests

This page verifies that MathJax and the `mhchem` package are rendering
correctly. Each equation is shown with its inline form and, where appropriate,
a display (block) form. All equations use `$...$` and `$$...$$` delimiters —
never backslash notation.

---

## 1. Photosynthesis (Overall)

The most fundamental equation in plant biology.

Inline: $\ce{6CO2 + 6H2O ->[\text{light}] C6H12O6 + 6O2}$

Block:

$$\ce{6CO2 + 6H2O ->[\text{light}][\text{chlorophyll}] C6H12O6 + 6O2}$$

---

## 2. Cellular Respiration (Overall)

The reverse of photosynthesis; releases stored chemical energy as ATP.

Inline: $\ce{C6H12O6 + 6O2 -> 6CO2 + 6H2O + \text{ATP}}$

Block:

$$\ce{C6H12O6 + 6O2 -> 6CO2 + 6H2O + \text{ATP (36-38 mol)}}$$

---

## 3. ATP Hydrolysis

The universal energy-releasing reaction that powers cellular work.

Inline: $\ce{ATP + H2O -> ADP + P_i + \text{energy}}$

Block:

$$\ce{ATP + H2O -> ADP + P_i}
\quad \Delta G = -30.5 \ \text{kJ/mol}$$

---

## 4. Water Autoionization and pH

The basis of acid-base chemistry and biological buffering.

Inline: $\ce{H2O <=> H+ + OH-}$

The ion product of water: $K_w = [\ce{H+}][\ce{OH-}] = 1 \times 10^{-14}$

Definition of pH:

$$\text{pH} = -\log[\ce{H+}]$$

---

## 5. Carbonic Acid Buffer System

Critical for maintaining blood pH and CO₂ transport.

$$\ce{CO2 + H2O <=> H2CO3 <=> H+ + HCO3-}$$

The Henderson-Hasselbalch equation for this buffer:

$$\text{pH} = \text{p}K_a + \log\frac{[\ce{HCO3-}]}{[\ce{H2CO3}]}$$

---

## 6. NAD⁺ / NADH Redox Half-Reaction

The central electron carrier in glycolysis and cellular respiration.

Reduction (gains electrons):

$$\ce{NAD+ + H+ + 2e- -> NADH}$$

Oxidation (loses electrons):

$$\ce{NADH -> NAD+ + H+ + 2e-}$$

---

## 7. Glycolysis Net Equation

The anaerobic first stage of cellular respiration.

$$\ce{C6H12O6 + 2NAD+ + 2ADP + 2P_i -> 2C3H4O3 + 2NADH + 2H+ + 2ATP + 2H2O}$$

Simplified: glucose yields 2 pyruvate, 2 NADH, and a net gain of 2 ATP.

---

## 8. Lactic Acid Fermentation

Regenerates NAD⁺ under anaerobic conditions in muscle cells.

$$\ce{C3H4O3 + NADH + H+ -> C3H6O3 + NAD+}$$

Or written with names: pyruvate + NADH $\ce{->}$ lactate + $\ce{NAD+}$

---

## 9. Nitrogen Fixation

Converts atmospheric nitrogen to ammonia; performed by nitrogen-fixing bacteria.

$$\ce{N2 + 8H+ + 8e- + 16ATP -> 2NH3 + H2 + 16ADP + 16P_i}$$

Simplified net:

$$\ce{N2 + 3H2 -> 2NH3}$$

---

## 10. Enzyme-Substrate Reaction (Michaelis-Menten)

The two-step model of enzyme catalysis with the Michaelis-Menten rate law.

$$\ce{E + S <=>[$k_1$][$k_{-1}$] ES ->[$k_2$] E + P}$$

Reaction rate:

$$v = \frac{V_{\max}[S]}{K_m + [S]}$$

Where $K_m = \dfrac{k_{-1} + k_2}{k_1}$ is the Michaelis constant.

---

## Rendering Checklist

If all equations above display correctly, the following are confirmed working:

- [ ] `\ce{}` chemical formula rendering (subscripts, superscripts)
- [ ] Forward arrows `->` in chemical equations
- [ ] Equilibrium arrows `<=>` in chemical equations
- [ ] Conditions above/below arrows `->[\text{light}]`
- [ ] Inline `$...$` math
- [ ] Block `$$...$$` math
- [ ] Greek letters: $\Delta G$, $\Delta H$, $\Delta S$
- [ ] Fractions: $\frac{V_{\max}[S]}{K_m + [S]}$
- [ ] Superscripts and subscripts in math mode: $K_m$, $k_{-1}$, $10^{-14}$
- [ ] Ion charges: $\ce{H+}$, $\ce{OH-}$, $\ce{HCO3-}$, $\ce{NAD+}$
