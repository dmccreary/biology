---
title: Learning Graph for Biology
description: A directed learning graph for 380 concepts in a college placement Biology course including 780 learning dependency relationships.
image: learning-graph/learning-graph-preview.png
og:image: learning-graph/learning-graph-preview.png
---
# Learning Graph for Biology

[View the Learning Graph Fullscreen (recommended)](../sims/graph-viewer/main.html)
<iframe src="../sims/graph-viewer/main.html" width="100%" height="800px" scrolling="no"></iframe>

This section contains the learning graph for the college placement Biology intelligent textbook. A learning graph is
a graph of concepts used in this textbook. Each concept is represented by a
node in a network graph. Concepts are connected by directed edges that indicate
what concepts each node depends on before that concept is understood by the student.

A learning graph is the foundational data structure for intelligent textbooks that can recommend learning paths.
A learning graph is like a roadmap of concepts to help students arrive at their learning goals.

At the left of the learning graph are prerequisite or foundational concepts. They
have no outbound edges. They only have inbound edges for other concepts that depend on
understanding these foundational prerequisite concepts. At the far right
we have the most advanced concepts in the course. To master these concepts you
must understand all the concepts that they point to.

This college placement Biology learning graph contains **375 concepts** organized across 12 thematic categories, spanning from the chemistry of life through ecology. The graph has **764 dependency edges** and a maximum learning path depth of **25 steps**.

## Course Description

We use the [Course Description](../course-description.md) as
the source document for the concepts that are included in this course.
The course description uses the 2001 Bloom taxonomy to order learning objectives.

## List of Concepts

We use generative AI to convert the course description into a [Concept List](./concept-list.md).
Each concept is in the form of a short Title Case label with most labels under 32 characters long.
This college placement Biology course has 375 concepts spanning 8 curriculum units and 12 taxonomy categories.

## Concept Dependency List

We next use generative AI to create a Directed Acyclic Graph (DAG). DAGs do not have cycles where
concepts depend on themselves. We provide the DAG in two formats. One is a [CSV file](learning-graph.csv) and the other
format is a [JSON file](learning-graph.json) that uses the vis-network JavaScript library format. The vis-network format uses `nodes`, `edges` and `metadata`
elements with edges containing `from` and `to` properties. This makes it easy for you to view and edit the learning
graph using an editor built with the vis-network tools.

## Foundational Concepts

The following 6 concepts are the entry points into the college placement Biology learning graph — they have no prerequisites within the course:

- **Scientific Method** — the foundation of all empirical biological inquiry
- **Atomic Structure** — the chemical basis of all matter
- **Cell Theory** — the organizing principle of cellular biology
- **Thermodynamics** — the physical laws governing energy in biological systems
- **History of Evolutionary Thought** — the conceptual history leading to modern evolutionary biology
- **Ecology Overview** — the broad framing of organisms in their environments

## Analysis and Documentation

### Course Description Quality Assessment

This report rates the overall quality of the course description for the purpose of generating a learning graph.

- Course description fields and content depth analysis
- Validates course description has sufficient depth for generating 375 concepts
- Compares course description against similar courses
- Identifies content gaps and strengths
- Quality score: **98/100**

[View the Course Description Quality Assessment](course-description-assessment.md)

### Learning Graph Quality Validation

This report gives you an overall assessment of the quality of the learning graph.
It uses graph algorithms to look for specific quality patterns in the graph.

- Graph structure validation — all concepts are connected
- DAG validation (0 cycles detected)
- 6 foundational concepts: entry points into the graph
- Indegree distribution analysis
- Longest dependency chain: 25 steps
- Connectivity: all 375 nodes in a single connected component

[View the Learning Graph Quality Validation](quality-metrics.md)

### Concept Taxonomy

In order to see patterns in the learning graph, it is useful to assign colors
to each concept based on the concept type. We use generative AI to
create 12 categories for our concepts and then place each concept
into a single primary classifier.

- 12 taxonomy categories covering all college placement Biology units
- Category organization — foundational elements first, advanced ecology and conservation last
- No category exceeds 15% of total concepts
- Clear 3-6 letter abbreviations for use in CSV file

[View the Concept Taxonomy](concept-taxonomy.md)

### Taxonomy Distribution

This report shows how many concepts fit into each category of the taxonomy.
Our goal is a somewhat balanced taxonomy where each category holds an
equal number of concepts. No category should contain over 30% of concepts.

[View the Taxonomy Distribution Report](./taxonomy-distribution.md)
