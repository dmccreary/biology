# Quiz: Mutations, Gene Regulation, and Biotechnology

Test your understanding of mutations, prokaryotic and eukaryotic gene regulation, and the biotechnology toolkit with these review questions.

---

#### 1. Which of the following best describes a frameshift mutation?

<div class="upper-alpha" markdown>
1. A change in a single nucleotide that alters one codon without changing the reading frame
2. An insertion or deletion of nucleotides not in a multiple of three, shifting the reading frame of all downstream codons
3. A change in a codon that creates a premature stop codon while preserving the reading frame
4. A change in a codon that substitutes one amino acid for a chemically similar one
</div>

??? question "Show Answer"
    The correct answer is **B**. Because codons are read as non-overlapping triplets, inserting or deleting a number of bases that is not a multiple of three shifts the reading frame for every codon downstream of the mutation, altering the entire amino acid sequence from that point forward. Option A describes a point mutation, option C describes a nonsense mutation without frame disruption, and option D describes a missense mutation.

    **Concept Tested:** Frameshift Mutations

---

#### 2. Which statement correctly describes the regulatory logic of the lac operon when both glucose and lactose are present in the environment?

<div class="upper-alpha" markdown>
1. The operon is fully OFF because allolactose cannot bind the repressor while glucose is present
2. The operon is expressed at maximum levels because both an inducer and a repressor are present simultaneously
3. The operon is transcribed at low levels because although allolactose removes the repressor from the operator, low cAMP levels limit CAP-mediated activation of the promoter
4. The operon is permanently activated because glucose directly binds RNA polymerase at the promoter
</div>

??? question "Show Answer"
    The correct answer is **C**. Lactose still removes the repressor by binding it as allolactose, so the operator is unblocked. However, glucose presence keeps cyclic AMP levels low, so the CAP (catabolite activator protein) cannot effectively bind the promoter to boost transcription. This "glucose effect" ensures the cell preferentially metabolizes glucose, producing only low-level lac operon expression rather than none or maximal output.

    **Concept Tested:** Lac Operon

---

#### 3. Which comparison of DNA methylation and histone acetylation is accurate?

<div class="upper-alpha" markdown>
1. DNA methylation typically condenses chromatin and silences transcription, while histone acetylation loosens chromatin and activates transcription
2. DNA methylation loosens chromatin and activates transcription, while histone acetylation condenses chromatin and silences transcription
3. Both DNA methylation and histone acetylation condense chromatin and silence transcription
4. Both DNA methylation and histone acetylation loosen chromatin and activate transcription
</div>

??? question "Show Answer"
    The correct answer is **A**. DNA methylation adds methyl groups to cytosines, typically at CpG sites, which blocks transcription factor binding and recruits chromatin-condensing proteins, silencing gene expression. Histone acetylation neutralizes the positive charge on histone tails, loosening their grip on negatively charged DNA and producing open euchromatin that transcription machinery can access, thereby activating expression. These two epigenetic mechanisms have opposite effects on chromatin accessibility.

    **Concept Tested:** DNA Methylation and Histone Modification

---

#### 4. A single nucleotide substitution changes the sixth codon of the β-globin gene, causing glutamic acid to be replaced by valine and altering the protein's folding behavior. What type of mutation is this?

<div class="upper-alpha" markdown>
1. Silent mutation, because the reading frame is preserved
2. Nonsense mutation, because translation terminates prematurely
3. Frameshift mutation, because the amino acid sequence downstream is altered
4. Missense mutation, because a single codon change results in a different amino acid being incorporated into the protein
</div>

??? question "Show Answer"
    The correct answer is **D**. This is the classic sickle cell example: a single base substitution changes one codon so that it now specifies a different amino acid (valine instead of glutamic acid) rather than the same amino acid, a stop codon, or a shifted reading frame. Because valine is hydrophobic and glutamic acid is hydrophilic, this non-conservative missense substitution disrupts normal hemoglobin folding and causes red blood cells to sickle.

    **Concept Tested:** Missense Mutations

---

#### 5. A researcher begins a PCR reaction with a single copy of target DNA and runs 20 amplification cycles. Approximately how many copies of the target sequence are present at the end of the reaction?

<div class="upper-alpha" markdown>
1. About 20 copies
2. About 1,000,000 copies
3. About 1,000 copies
4. About 1,000,000,000 copies
</div>

??? question "Show Answer"
    The correct answer is **B**. PCR amplifies DNA exponentially, doubling the number of copies with each cycle, so after $n$ cycles the copy number is approximately $2^n$. After 20 cycles, $2^{20} \approx 1{,}048{,}576$, or roughly one million copies. Reaching a billion copies would require around 30 cycles, while 1,000 copies corresponds to about 10 cycles, illustrating how quickly PCR amplification accelerates.

    **Concept Tested:** PCR

---

#### 6. A CRISPR-Cas9 complex cuts a target gene, and the cell repairs the resulting double-strand break using non-homologous end joining (NHEJ) without a donor DNA template. What is the most likely outcome?

<div class="upper-alpha" markdown>
1. Small insertions or deletions disrupt the gene, typically producing a gene knockout
2. The gene is precisely repaired to its original sequence with no errors
3. A donor sequence is seamlessly incorporated, producing a designed edit
4. The double-strand break remains permanently unrepaired
</div>

??? question "Show Answer"
    The correct answer is **A**. NHEJ directly rejoins the cut DNA ends without using a template, and this process is error-prone, frequently introducing small insertions or deletions at the cut site. These indels often shift the reading frame or disrupt the gene's coding sequence, resulting in a functional knockout. Precise, template-guided edits require homology-directed repair (HDR) with a supplied donor DNA sequence instead.

    **Concept Tested:** CRISPR-Cas9

---

#### 7. Which statement best explains why eukaryotic gene regulation generally requires more layers of control than prokaryotic operon regulation?

<div class="upper-alpha" markdown>
1. Eukaryotic cells do not use repressor or activator proteins at all
2. Prokaryotic genes are regulated only at the translational level, while eukaryotic genes are regulated only transcriptionally
3. Eukaryotic DNA is packaged into chromatin and genes are typically regulated individually by combinations of transcription factors, enhancers, and epigenetic marks, whereas prokaryotic operons coordinately regulate clusters of functionally related genes under one shared promoter and operator
4. Prokaryotic cells regulate gene expression exclusively through microRNAs
</div>

??? question "Show Answer"
    The correct answer is **C**. Prokaryotic operons efficiently coordinate expression of functionally related genes as a single transcriptional unit controlled by one promoter and operator. Eukaryotic genes, in contrast, are individually packaged into chromatin and typically regulated by unique combinations of transcription factors, distant enhancers and silencers, and epigenetic marks such as DNA methylation and histone modification, giving eukaryotes far more precise and combinatorial control over each gene.

    **Concept Tested:** Gene Regulation (Eukaryotes vs. Prokaryotes)

---

#### 8. A single microRNA is experimentally shown to reduce the protein output of over 200 different genes in a cell line. What best explains this observation?

<div class="upper-alpha" markdown>
1. MicroRNAs directly delete the target genes from the genome
2. Each microRNA can only bind one specific mRNA, so this data must reflect an experimental artifact
3. MicroRNAs act only during DNA replication and cannot affect mature mRNA
4. A single microRNA can base-pair with complementary sequences in the 3' UTR of many different mRNAs, simultaneously repressing translation or promoting degradation of numerous distinct transcripts
</div>

??? question "Show Answer"
    The correct answer is **D**. A single miRNA recognizes short complementary sequences within the 3' untranslated region of target mRNAs, and because this sequence match does not require perfect complementarity across the entire transcript, one miRNA can bind and regulate hundreds of different mRNAs. This one-to-many relationship makes miRNAs powerful post-transcriptional regulators capable of broadly reshaping a cell's protein output from a single regulatory molecule.

    **Concept Tested:** MicroRNAs

---

#### 9. Which concern represents the strongest scientifically grounded objection to using CRISPR-Cas9 to edit human germline (egg, sperm, or embryo) cells, as opposed to somatic cells?

<div class="upper-alpha" markdown>
1. Germline editing is technically impossible with current Cas9 delivery methods
2. Germline edits, including any unintended off-target changes, are heritable and would be passed to all future generations, whereas somatic edits affect only the treated individual
3. Germline cells cannot be targeted by guide RNA because they lack DNA
4. Somatic cell editing poses greater long-term risk to a population's gene pool than germline editing
</div>

??? question "Show Answer"
    The correct answer is **B**. Somatic cell edits are confined to the treated individual and are not passed to offspring, limiting their long-term consequences. Germline edits, however, become part of the heritable genome, meaning any unintended off-target mutations introduced by Cas9 would be transmitted to all future generations descended from that individual, raising unresolved safety and ethical questions that somatic gene therapy does not carry.

    **Concept Tested:** Gene Therapy Concepts and CRISPR Ethics

---

#### 10. A biotechnology team wants to design a procedure to produce human insulin using bacteria. Which sequence of steps correctly assembles a working recombinant DNA protocol?

<div class="upper-alpha" markdown>
1. Sequence the bacterial genome, then inject human cells with Cas9 and guide RNA
2. Perform gel electrophoresis on the insulin gene alone, then inject the fragment directly into a human patient
3. Cut the human insulin gene and a plasmid vector with the same restriction enzyme, join them with DNA ligase, transform bacteria with the recombinant plasmid, then select transformed colonies using an antibiotic resistance marker
4. Use PCR alone to amplify the insulin gene and inject the resulting product directly into bacterial cells without a vector
</div>

??? question "Show Answer"
    The correct answer is **C**. A functioning recombinant DNA protocol requires cutting both the gene of interest and a plasmid vector with the same restriction enzyme so their sticky ends are compatible, sealing them with DNA ligase to form a recombinant plasmid, introducing that plasmid into bacteria through transformation, and then using an antibiotic resistance marker to select only the bacteria that successfully took up the plasmid. The other options skip essential vector or selection steps.

    **Concept Tested:** Recombinant DNA Technology

---
