---
title: The Cell Cycle, Mitosis, and Cancer
description: The regulated sequence of cell growth and division, the mechanics of mitosis, checkpoint controls via cyclins and CDKs, and how mutations in proto-oncogenes and tumor suppressor genes drive cancer.
generated_by: claude skill chapter-content-generator
date: 2026-02-26 19:27:38
version: 0.05
---

# The Cell Cycle, Mitosis, and Cancer

!!! mascot-welcome "Gregor Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Gregor welcomes you">
    Welcome, investigators! From a single fertilized egg, approximately 37 trillion cells arise through regulated cell division. That same division machinery, when its controls break down, drives cancer. In this chapter we trace the cell cycle from G1 through M phase, dissect the molecular checkpoints that keep division orderly, and discover how mutations convert normal regulatory genes into cancer-causing ones. Let's investigate!

Every cell alive today descended from a previous cell — and before dividing, each must copy its genome faithfully and distribute one complete copy to each daughter. The **cell cycle** is the orderly sequence of events that accomplishes this, coordinated by a network of regulatory proteins that ensure each step completes correctly before the next begins.

## The Cell Cycle: An Overview

The cell cycle is divided into two major stages:

- **Interphase** — the cell grows, carries out its normal functions, and prepares for division. Interphase occupies the majority (~90%) of the cell cycle and is further divided into G1, S, and G2 phases.
- **Mitotic (M) phase** — the cell actually divides, separating duplicated chromosomes into two daughter nuclei (mitosis) and splitting the cytoplasm (cytokinesis).

The cycle is not simply a timer — it is actively driven and monitored by molecular machinery that can pause, accelerate, or halt progression depending on conditions.

#### Diagram: The Stages of Mitosis Image

![The Stages of Mitosis](../../img/six-stages-of-mitosis.png)

We can summarize the stages with the following terms:

1. Prophase: prepare
2. Metaphase: meet
3. Anaphase: apart
4. Telophases: two

[NDSU YouTube Video Explaining the Phases of Cell Division](https://www.youtube.com/watch?v=C6hn3sA0ip0&t=3s)

#### Diagram: Cell Cycle Phases Explorer

<iframe src="../../sims/cell-cycle-phases/main.html" height="500" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/cell-cycle-phases/main.html)*

<details markdown="1">
<summary>Cell Cycle Phases Explorer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** cell-cycle-phases<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *identify* (Bloom's L1: Remember) each phase of the cell cycle and *describe* (Bloom's L2: Understand) the key events and approximate duration of each phase.

**Canvas:** 760 × 480 px, responsive.

**Layout:** Center: circular cell cycle "clock" diagram with arc segments proportional to phase duration. Outer ring: phase labels (G1, S, G2, M with sub-divisions). Right panel: phase detail card that updates on click.

**Phase arcs (approximate proportions for a 24-hour cell cycle):**
- G1: 42% of circle (~10 hr), color: light blue (#AED6F1)
- S: 38% of circle (~9 hr), color: gold (#F9E79F)
- G2: 17% of circle (~4 hr), color: light green (#A9DFBF)
- M (mitosis + cytokinesis): 4% of circle (~1 hr), color: salmon (#F5CBA7)

**Phase detail card (right):** Title, duration, key events as bullet list, key molecules involved.

**Checkpoints:** Three checkpoint markers shown as red octagon icons on the circle:
- G1/S checkpoint ("restriction point")
- G2/M checkpoint
- Spindle assembly checkpoint (within M)

**Interaction:**
- Click any phase arc to highlight it and update the detail card
- Hover over checkpoint icons to show checkpoint name and what is being monitored
- "Animate" button: rotating spotlight sweeps around the circle at realistic proportional speed, pausing at each checkpoint

**Responsive design:** Circle diameter and card width scale with container width.
</details>

| Phase | Location in cycle | Key events | Approx. duration (24-hr cycle) |
|---|---|---|---|
| G1 (Gap 1) | Interphase | Cell growth; protein synthesis; receives growth signals; restriction point | ~10 hours |
| S (Synthesis) | Interphase | DNA replication; histone synthesis; centrosome duplication | ~9 hours |
| G2 (Gap 2) | Interphase | Continued growth; mitosis preparation; G2/M checkpoint | ~4 hours |
| M (Mitotic) | Mitotic phase | Chromosome segregation (mitosis) + cytoplasm division (cytokinesis) | ~1 hour |

## Interphase: Growth and DNA Replication

### G1 Phase

**G1 phase** (Gap 1) is the first growth period. The cell increases in size, synthesizes proteins and organelles, and integrates external signals about whether conditions favor division. Growth factors from neighboring cells (many of which signal through RTKs — Chapter 9) bind surface receptors and activate transcription of genes needed for S-phase entry.

The **restriction point** (R point), located near the end of G1, is the key commitment decision in the mammalian cell cycle. Once a cell passes R, it is committed to completing the cycle regardless of external signals. Before R, withdrawal of growth factors causes the cell to exit the cycle into **G0** — a quiescent, non-dividing state. Most neurons and muscle cells permanently reside in G0.

### S Phase

**S phase** (Synthesis phase) is when DNA replication occurs. Each of the 46 chromosomes (in humans) is replicated using the mechanisms of Chapter 11 (semi-conservative replication, origin firing, leading/lagging strand synthesis). The result: each chromosome now consists of two **sister chromatids** joined at the **centromere**.

Centrosomes (the microtubule-organizing centers of animal cells) also duplicate during S phase, producing the two centrosomes that will form the poles of the mitotic spindle.

### G2 Phase

**G2 phase** (Gap 2) is a second growth period during which the cell continues to enlarge and synthesizes proteins specifically required for mitosis (e.g., tubulin for the spindle). The **G2/M checkpoint** verifies that DNA replication is complete and that no DNA damage is present before committing to mitosis.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Gregor is thinking">
    The checkpoint machinery you will study in this chapter is directly built on the signal transduction concepts from Chapter 9. Checkpoint kinases (ATM, ATR, Chk1, Chk2) form phosphorylation cascades; cyclin-CDK complexes function like constitutively active RTKs — they phosphorylate target proteins to drive cell cycle progression. And p53, the master tumor suppressor, is a transcription factor activated by DNA damage signals — exactly the kind of receptor-to-nucleus signaling pathway you already understand.

## Mitosis: Chromosome Segregation

Mitosis is the process by which a single nucleus divides into two genetically identical daughter nuclei. It is conventionally divided into four stages — **P**rophase, **M**etaphase, **A**naphase, and **T**elophase (PMAT) — followed by cytokinesis.

#### Diagram: Mitosis Stage Explorer

<iframe src="../../sims/mitosis-stage-explorer/main.html" height="540" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/mitosis-stage-explorer/main.html)*

<details markdown="1">
<summary>Mitosis Stage Explorer — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** mitosis-stage-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *identify* (Bloom's L1: Remember) each stage of mitosis by its chromosome appearance and *explain* (Bloom's L2: Understand) the key molecular events driving each stage.

**Canvas:** 760 × 520 px, responsive.

**Layout:** Top: stage selector tabs (Prophase | Metaphase | Anaphase | Telophase | Cytokinesis). Center: large cell diagram showing chromosomes, spindle, nuclear envelope for the selected stage. Bottom: key events bullet list.

**Stage diagrams:**
- **Prophase:** Chromatin condensing into visible chromosomes (X-shaped sister chromatids); spindle forming from two centrosomes; nuclear envelope beginning to break down; nucleolus disappearing
- **Metaphase:** Fully condensed chromosomes aligned at metaphase plate; kinetochore microtubules attached to sister chromatids; polar microtubules overlapping at center
- **Anaphase:** Sister chromatids pulled to opposite poles by shortening kinetochore microtubules; cell elongating (polar microtubule pushing); V-shaped chromosome arms trailing
- **Telophase:** Chromosomes at poles, decondensing; nuclear envelopes reforming; two distinct nuclei; cleavage furrow beginning
- **Cytokinesis:** Cleavage furrow pinching (animal cell) with actin-myosin contractile ring shown; completed division into two daughter cells shown as result

**Color coding:** Chromosomes in contrasting colors (blue/red for two homolog pairs); spindle fibers in green; nuclear envelope in dark gray; centrosomes in orange; metaphase plate as dashed magenta line.

**Interaction:**
- Click stage tabs or "Next Stage" button to advance
- Hover over any labeled structure for a tooltip
- Toggle "Show labels" / "Hide labels" to practice identification
- "Quiz mode": hide stage name and ask user to identify the stage from the diagram

**Responsive design:** Cell diagram scales with container width.
</details>

### Prophase

**Prophase** is the longest stage of mitosis. The loosely packed chromatin condenses into compact, visible chromosomes — each consisting of two identical **sister chromatids** joined along their length and held together by a protein complex called **cohesin**. The **nucleolus** disappears as ribosomal RNA genes are silenced. The **nuclear envelope** begins to break down.

In the cytoplasm, the two centrosomes (duplicated in S phase) migrate to opposite sides of the nucleus and begin polymerizing **spindle microtubules**. The entire structure — centrosomes, microtubules, and associated motor proteins — is called the **mitotic spindle**.

### Metaphase

During **metaphase**, the nuclear envelope has completely disassembled, and spindle microtubules attach to chromosomes at protein complexes called **kinetochores** — one per sister chromatid, assembled at the centromere region. Kinetochore microtubules exert opposing tension on sister chromatids, aligning all chromosomes at the **metaphase plate** — an imaginary plane equidistant between the two spindle poles.

This alignment is not merely geometric — it is required for the **spindle assembly checkpoint** to be satisfied. Every kinetochore must be properly attached to microtubules from opposite poles before anaphase is permitted to begin.

!!! mascot-warning "Common Mistake"
    Students frequently confuse **mitosis** and **meiosis**. Remember: mitosis produces **two genetically identical diploid (2n) daughter cells** and occurs in all somatic cells for growth and repair. Meiosis produces **four genetically unique haploid (n) cells** and occurs only in reproductive organs to make gametes. This chapter covers mitosis only; meiosis is in Chapter 11. On the AP exam, read the question carefully for which process is being described.

### Anaphase

**Anaphase** begins when the protease **separase** cleaves cohesin, releasing the connection between sister chromatids. Kinetochore microtubules shorten (tubulin depolymerizes from the kinetochore end), pulling the now-separated **chromatids** (each now called a chromosome) toward opposite poles. Simultaneously, **polar microtubules** — which overlap at the spindle midzone — are pushed apart by motor proteins, elongating the cell.

At the end of anaphase, two complete sets of chromosomes have been segregated: each pole contains one copy of every chromosome the parent cell possessed.

### Telophase and Cytokinesis

**Telophase** reverses most of prophase events. Nuclear envelopes reassemble around each chromosome set; chromosomes decondense; nucleoli reappear. The cell now contains two distinct, genetically identical nuclei — the mitotic division is complete.

**Cytokinesis** divides the cytoplasm. In animal cells, a **contractile ring** of actin filaments and myosin motors assembles beneath the plasma membrane at the cell's midpoint. The ring contracts, pinching the cell in two via a **cleavage furrow**. In plant cells, vesicles from the Golgi fuse at the cell's equator to form a **cell plate** that eventually becomes a new cell wall separating the daughter cells.

## Cell Cycle Checkpoints

The cell cycle is not simply a timer — progression through each phase is actively verified by **checkpoint mechanisms** that monitor specific conditions and halt the cycle if problems are detected.

Three major checkpoints:

- **G1/S checkpoint (restriction point):** Is the cell large enough? Are growth factor signals sufficient? Is DNA undamaged? If yes → CDK4/6–Cyclin D complex phosphorylates Rb (retinoblastoma protein), releasing the transcription factor E2F → S-phase genes activated.
- **G2/M checkpoint:** Has DNA replication completed accurately? Is DNA undamaged? If yes → CDK1–Cyclin B (MPF) complex activates → mitosis begins.
- **Spindle assembly checkpoint (SAC):** Are all kinetochores properly attached to spindle microtubules from opposite poles? Unattached kinetochores produce the **MCC (mitotic checkpoint complex)** that inhibits APC/C → anaphase blocked until all chromosomes are bioriented.

#### Diagram: Cell Cycle Checkpoint Control

<iframe src="../../sims/cell-cycle-checkpoints/main.html" height="520" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/cell-cycle-checkpoints/main.html)*

<details markdown="1">
<summary>Cell Cycle Checkpoint Control — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** cell-cycle-checkpoints<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *explain* (Bloom's L2: Understand) how cyclin-CDK complexes and checkpoint proteins regulate cell cycle progression, and *predict* (Bloom's L3: Apply) what happens when checkpoints fail.

**Canvas:** 760 × 500 px, responsive.

**Layout:** Left half: cyclin concentration graph over time (oscillating wave for Cyclin D, E, A, B overlaid). Right half: checkpoint decision flowchart at G1/S and G2/M with YES/NO branches.

**Cyclin concentration graph:**
- X-axis: cell cycle phase (G1, S, G2, M)
- Y-axis: relative protein level
- Four colored curves: Cyclin D (blue, peaks in G1), Cyclin E (green, peaks at G1/S boundary), Cyclin A (orange, peaks in S/G2), Cyclin B (red, peaks in M, drops sharply at anaphase)
- CDK activity shown as shaded region (mirrors cyclin levels)

**Checkpoint flowchart (G1/S example):**
- "Is cell large enough?" → Yes/No
- "Growth factors present?" → Yes/No
- "DNA undamaged?" → Yes/No
- All Yes → "CDK4/6–Cyclin D active → Rb phosphorylated → E2F released → S phase enters"
- Any No → "Cycle halted; repair or apoptosis"

**Toggle button:** Switch between G1/S checkpoint and G2/M checkpoint flowcharts.

**"Damage event" button:** Introduces a DNA damage signal; shows checkpoint kinases (ATM/ATR) activating p53 → p21 induced → CDK inhibited → cycle halted.

**Interaction:**
- Hover over any cyclin curve to see its name, partner CDK, and function
- Click checkpoint decision nodes to see explanatory tooltips
- "What if p53 is mutated?" button: bypasses damage arrest and shows cycle proceeding despite damage (cancer scenario)

**Responsive design:** Graph and flowchart scale proportionally with container width.
</details>

## Cyclins and CDKs: The Cell Cycle Engine

The molecular engine driving the cell cycle is a family of protein kinases called **CDKs (cyclin-dependent kinases)**. CDKs are constitutively expressed but are enzymatically inactive unless bound to a **cyclin** — a regulatory protein whose concentration rises and falls at specific cell cycle stages (hence the name).

Different cyclin–CDK complexes are active at different points:

- **Cyclin D – CDK4/6:** Active in G1; phosphorylates Rb → releases E2F → transcription of S-phase genes
- **Cyclin E – CDK2:** Active at G1/S boundary; promotes S-phase entry
- **Cyclin A – CDK2/CDK1:** Active in S and G2; promotes DNA replication and G2/M transition
- **Cyclin B – CDK1 (MPF, maturation-promoting factor):** Active in M phase; triggers chromosome condensation, nuclear envelope breakdown, spindle assembly; its destruction by the APC/C complex at anaphase triggers the M→G1 transition

Cyclin levels are regulated at the transcriptional level and by **ubiquitin-mediated proteasomal degradation** — cyclins are rapidly destroyed at defined points in the cycle. CDK inhibitors (CKIs) such as **p21** (induced by p53) and **p16** further fine-tune CDK activity.

## Proto-Oncogenes, Oncogenes, and Tumor Suppressor Genes

### Proto-Oncogenes and Oncogenes

**Proto-oncogenes** are normal cellular genes that promote cell growth and division. They encode growth factors, growth factor receptors (like RTKs), G proteins (like Ras), intracellular signaling kinases, and transcription factors (like Myc) — all components of the pathways that drive S-phase entry.

A **proto-oncogene becomes an oncogene** when a mutation causes the encoded protein to be constitutively active (always "on") or overexpressed — promoting continuous cell division regardless of external signals. Oncogene mutations are typically **gain-of-function** and behave as **dominant** alleles (one mutant copy is sufficient to drive abnormal growth).

Examples:
- **Ras oncogene:** Point mutation prevents GTP hydrolysis → Ras permanently active → continuous MAPK signaling → uncontrolled proliferation (found in ~30% of human cancers)
- **HER2 (ErbB2):** Overexpression of the RTK for EGF-related ligands → amplified growth signaling (found in ~20% of breast cancers; targeted by the drug Herceptin/trastuzumab)
- **Myc:** Transcription factor; overexpression or chromosomal translocation → constant expression of proliferative genes

!!! mascot-tip "Gregor's Tip"
    The AP exam tests the distinction between oncogenes and tumor suppressor genes with great regularity. A simple rule: oncogenes are like a stuck accelerator — one copy is enough to cause problems (**dominant**, gain-of-function). Tumor suppressor genes are like brakes — you need to lose **both** copies before the brakes fail (**recessive** at the cellular level, though the initial inherited mutation is dominant for cancer predisposition — this is the Knudson "two-hit hypothesis").

### Tumor Suppressor Genes

**Tumor suppressor genes** encode proteins that inhibit cell cycle progression, promote apoptosis, or repair DNA damage. Unlike oncogenes, tumor suppressors act as brakes on the cell cycle. Both copies of a tumor suppressor gene must typically be inactivated for their restraining effect to be lost — this is Knudson's **two-hit hypothesis**, originally described for retinoblastoma.

Key tumor suppressors:

- **Rb (Retinoblastoma protein):** Normally binds and inhibits E2F transcription factors, preventing S-phase entry. When phosphorylated by Cyclin D–CDK4/6, Rb releases E2F → cell proceeds to S phase. In retinoblastoma, both RB1 alleles are lost → E2F constitutively active → uncontrolled retinal cell proliferation.
- **p53 ("guardian of the genome"):** Transcription factor activated by DNA damage signals (via ATM/ATR kinases). p53 induces p21 (CDK inhibitor → cell cycle arrest) and pro-apoptotic genes (Bax, PUMA → apoptosis). Mutated in >50% of all human cancers; loss of p53 allows cells with DNA damage to continue dividing and accumulating further mutations.
- **BRCA1/BRCA2:** Participate in homologous recombination DNA repair. Germline mutations greatly increase lifetime risk of breast and ovarian cancer.
- **APC (adenomatous polyposis coli):** Regulates Wnt signaling; mutations initiate the majority of colorectal cancers.

## Cancer Biology

**Cancer** arises through the gradual accumulation of somatic mutations in proto-oncogenes and tumor suppressor genes over years to decades. No single mutation causes cancer; rather, multiple "hits" in different regulatory genes must accumulate in the same cell lineage — a process described by the **multi-step model of carcinogenesis** (Fearon and Vogelstein, colorectal cancer model).

Hallmarks of cancer (Hanahan and Weinberg) include:

- Self-sufficiency in growth signals (oncogene activation)
- Insensitivity to growth-inhibitory signals (tumor suppressor loss)
- Evasion of apoptosis (Bcl-2 overexpression, p53 loss)
- Limitless replicative potential (telomerase reactivation)
- Sustained angiogenesis (VEGF secretion)
- Tissue invasion and metastasis (loss of adhesion proteins)
- Reprogrammed energy metabolism (Warburg effect)
- Evasion of immune destruction

**Contact inhibition** is a normal property of healthy cells: when cells touch neighboring cells, surface-mediated signals inhibit further division, preventing overcrowding. Cancer cells lose contact inhibition — they continue to divide even when densely packed, piling up in culture and invading adjacent tissues in vivo. Loss of contact inhibition is partly a consequence of disrupted cell-cell adhesion (E-cadherin loss) and aberrant signaling through RTKs and Ras.

#### Diagram: Cancer Mutation Simulator

<iframe src="../../sims/cancer-mutation-simulator/main.html" height="500" width="100%" scrolling="no"></iframe>

*[View Fullscreen](../../sims/cancer-mutation-simulator/main.html)*

<details markdown="1">
<summary>Cancer Mutation Simulator — Specification</summary>
**Type:** MicroSim (p5.js)<br/>
**sim-id:** cancer-mutation-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students will be able to *analyze* (Bloom's L4: Analyze) how accumulating mutations in proto-oncogenes and tumor suppressor genes progressively disrupt normal cell cycle control, leading to cancer.

**Canvas:** 760 × 480 px, responsive.

**Layout:** Left panel: mutation checklist with 6 gene events (matching colorectal cancer progression). Center: cell behavior panel (cell image + growth graph). Right: information panel describing the selected mutation.

**Six mutation events (colorectal cancer model, in order):**
1. APC loss (tumor suppressor, first hit) — "Wnt signaling activated; early adenoma"
2. Ras activation (oncogene) — "Constitutive proliferation signals; growing adenoma"
3. SMAD4/DPC4 loss (tumor suppressor) — "TGF-β growth inhibition lost; intermediate adenoma"
4. p53 loss (tumor suppressor) — "DNA damage no longer triggers apoptosis; late adenoma"
5. Telomerase reactivation — "Replicative immortality; carcinoma in situ"
6. Metastasis gene changes — "Invasion and metastasis; malignant carcinoma"

**Cell behavior panel:** As each mutation is added:
- The cell image shows increasing disorganization (from normal orderly monolayer to piled-up irregular cells)
- A growth curve updates, showing increasingly rapid, contact-inhibition-independent growth
- Color shifts from healthy green to progressively more orange/red

**Mutation type badges:** Each mutation event labeled as "Oncogene (dominant)" or "Tumor Suppressor (recessive, 2 hits)" with appropriate icon.

**Interaction:**
- Click each mutation event in sequence to add it; earlier events must be added first
- "Reset" button returns to normal cell state
- Hover over any mutation to see which gene, protein affected, and associated human cancer type

**Responsive design:** All panels scale proportionally with container width.
</details>

!!! mascot-celebration "Excellent Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Gregor celebrates">
    From the restriction point in G1 to the caspase cascade in apoptosis, from cyclin oscillations to oncogene mutations — you now understand the molecular logic connecting normal cell division to cancer. This is some of the most medically important biology in the AP curriculum. Outstanding investigation, scientists!

## Summary

The cell cycle proceeds through four phases:

- **G1** — growth, growth factor sensing, restriction point (CDK4/6–Cyclin D → Rb phosphorylation)
- **S** — DNA replication, sister chromatid formation, centrosome duplication
- **G2** — continued growth, G2/M checkpoint (CDK1–Cyclin B/MPF)
- **M** — mitosis (PMAT: chromosome condensation → alignment → separation → nuclear reformation) + cytokinesis

Three checkpoints guard fidelity: G1/S (growth and damage), G2/M (replication complete, no damage), spindle assembly (all kinetochores bioriented).

**Proto-oncogenes** (Ras, HER2, Myc) promote division; gain-of-function mutations create dominant **oncogenes**. **Tumor suppressor genes** (Rb, p53, BRCA1, APC) restrain division; both copies must be lost (two-hit hypothesis). Cancer arises from multi-step accumulation of these mutations, with loss of contact inhibition as a defining cellular phenotype.

??? note "Self-Check: Test Your Understanding"

    **Question 1.** A cell in culture is treated with a drug that prevents tubulin polymerization. At what stage of mitosis would this cell arrest, and why?

    ??? success "Answer"
        The cell would arrest at **metaphase** due to activation of the spindle assembly checkpoint (SAC). Without tubulin polymerization, kinetochore microtubules cannot form; unattached kinetochores generate the mitotic checkpoint complex (MCC), which inhibits APC/C and prevents cohesin cleavage (separase activation). The cell cannot proceed to anaphase until all kinetochores are properly attached — which cannot happen without spindle microtubules.

    **Question 2.** A patient is found to have an inherited mutation inactivating one copy of the *RB1* gene. Why does retinoblastoma (retinal cancer) develop, when most cells in the body remain cancer-free?

    ??? success "Answer"
        The Knudson two-hit hypothesis explains this: inheriting one inactivated *RB1* allele means a cell only needs to lose the remaining normal allele ("second hit") to completely eliminate Rb function. In most tissues, this second somatic mutation occurs very rarely and causes no cancer. But rapidly dividing retinal progenitor cells in early childhood undergo many divisions, significantly increasing the probability that one cell will acquire the second hit. Once both *RB1* copies are lost in a retinal cell, E2F is constitutively active and the cell proliferates without restraint.

    **Question 3.** How do Cyclin B levels change during the G2-to-M transition and then from metaphase to anaphase? What drives these changes?

    ??? success "Answer"
        Cyclin B accumulates through G2, forming the CDK1–Cyclin B complex (MPF) that triggers mitosis. Cyclin B levels peak in metaphase. At the metaphase-to-anaphase transition, the APC/C (anaphase-promoting complex/cyclosome, activated when SAC is satisfied) ubiquitinates Cyclin B, targeting it for proteasomal degradation. The resulting loss of MPF activity allows the cell to exit mitosis (chromosomes decondense, nuclear envelopes reform, contractile ring forms for cytokinesis).

    **Question 4.** Is an oncogene mutation dominant or recessive at the cellular level, and why?

    ??? success "Answer"
        Oncogene mutations are **dominant** at the cellular level because they confer a gain-of-function: the mutant protein is constitutively active and drives proliferation even in the presence of one normal allele. The normal allele cannot override the constitutively active mutant. This contrasts with tumor suppressor gene mutations, which are recessive at the cellular level (both copies must be inactivated to eliminate the suppressor function).
