# Quiz: Population Ecology and Life History

Test your understanding of population growth models, limiting factors, survivorship curves, and life history strategies with these review questions.

---

#### 1. What is the carrying capacity (K) of an environment?

<div class="upper-alpha" markdown>
1. The initial population size before growth begins
2. The per capita growth rate of a population under ideal conditions
3. The maximum population size that the environment can sustain indefinitely given the available resources
4. The number of offspring produced per reproductive event
</div>

??? question "Show Answer"
    The correct answer is **C**. Carrying capacity ($K$) represents the population size a given environment can support indefinitely based on available resources such as food, water, space, and shelter. It is not fixed and can shift with changing environmental conditions. Options A, B, and D describe other population parameters — initial size, intrinsic growth rate, and fecundity — none of which define the resource-based ceiling that $K$ represents.

    **Concept Tested:** Carrying Capacity

---

#### 2. Why can exponential population growth not continue indefinitely in a real environment?

<div class="upper-alpha" markdown>
1. Because r_max always decreases to zero after several generations regardless of resources
2. Because exponential growth only occurs in laboratory settings and never in nature
3. Because population density has no effect on birth or death rates in any species
4. Because as resources such as food, water, and space become limiting, growth rate declines and the population approaches a carrying capacity, producing logistic rather than exponential growth
</div>

??? question "Show Answer"
    The correct answer is **D**. Exponential growth assumes unlimited resources, an assumption that no real environment satisfies indefinitely. As a population grows, finite resources become limiting, slowing growth and causing the population to approach its carrying capacity — the transition captured by the logistic growth model's $(K-N)/K$ term, which reduces the growth rate toward zero as $N$ approaches $K$.

    **Concept Tested:** Exponential and Logistic Population Growth

---

#### 3. Which pair of examples correctly illustrates a density-dependent limiting factor and a density-independent limiting factor, respectively?

<div class="upper-alpha" markdown>
1. Predation intensifying in crowded populations (density-dependent) and a wildfire destroying habitat regardless of population size (density-independent)
2. A hurricane destroying habitat (density-dependent) and food competition intensifying with crowding (density-independent)
3. Both drought and food competition are density-independent factors
4. Both predation and disease are density-independent factors
</div>

??? question "Show Answer"
    The correct answer is **A**. Density-dependent factors, such as predation, competition, and disease, have effects that intensify as population density increases, helping regulate populations around carrying capacity. Density-independent factors, such as wildfires, floods, and severe weather, affect a similar proportion of a population regardless of how crowded it is, and can cause dramatic population crashes without maintaining a stable equilibrium.

    **Concept Tested:** Density-Dependent Regulation and Density-Independent Factors

---

#### 4. A population of 800 fish has $r_{max} = 0.2$ per year and a carrying capacity of $K = 2000$. Using the logistic growth equation, what is the approximate population growth rate ($dN/dt$)?

<div class="upper-alpha" markdown>
1. 40 fish per year
2. 160 fish per year
3. 400 fish per year
4. 96 fish per year
</div>

??? question "Show Answer"
    The correct answer is **D**. Using the logistic growth equation, $dN/dt = r_{max} \times N \times (K-N)/K = 0.2 \times 800 \times (2000-800)/2000 = 0.2 \times 800 \times 0.6 = 96$ fish per year. This value is lower than the exponential rate ($r_{max} \times N = 160$) because the environmental resistance term $(K-N)/K = 0.6$ reduces growth as the population approaches carrying capacity.

    **Concept Tested:** Logistic Population Growth (Quantitative Application)

---

#### 5. In a mark-recapture study, 50 fish are captured, marked, and released. Later, 60 fish are recaptured, of which 15 are marked. Using the Lincoln-Petersen formula, what is the estimated total population size?

<div class="upper-alpha" markdown>
1. 75
2. 200
3. 125
4. 300
</div>

??? question "Show Answer"
    The correct answer is **B**. The Lincoln-Petersen formula estimates population size as $N \approx (n_1 \times n_2)/m_2$, where $n_1$ is the number marked initially, $n_2$ is the total recaptured, and $m_2$ is the number of marked individuals found in the recapture sample. Substituting the given values: $N \approx (50 \times 60)/15 = 3000/15 = 200$ fish.

    **Concept Tested:** Population Density (Mark-Recapture Estimation)

---

#### 6. A species of insect produces thousands of eggs per generation, provides no parental care, matures quickly, and has a short lifespan. Which life history strategy and survivorship curve type best describe this species?

<div class="upper-alpha" markdown>
1. K-selected strategy with a Type I survivorship curve
2. r-selected strategy with a Type I survivorship curve
3. r-selected strategy with a Type III survivorship curve
4. K-selected strategy with a Type III survivorship curve
</div>

??? question "Show Answer"
    The correct answer is **C**. Producing many offspring with little or no parental care, rapid maturity, and a short lifespan are all hallmarks of an r-selected life history strategy, which maximizes the intrinsic growth rate $r$. Because most offspring die young with only a small fraction surviving to adulthood, this pattern also matches a Type III survivorship curve, characterized by high early mortality — unlike Type I curves, which describe species with low early mortality and high parental investment.

    **Concept Tested:** r-Selection and K-Selection

---

#### 7. A biologist observes that as a deer population grows denser, the percentage of individuals dying from starvation and disease increases sharply, while a separate population at low density shows almost no starvation-related deaths. What does this pattern best demonstrate?

<div class="upper-alpha" markdown>
1. A density-dependent factor, because the proportion of individuals affected increases as population density increases
2. A density-independent factor, because mortality is unrelated to population size
3. Carrying capacity has no influence on this population's mortality rate
4. Exponential growth is occurring regardless of resource availability
</div>

??? question "Show Answer"
    The correct answer is **A**. Because the proportion of individuals dying from starvation and disease rises specifically as population density increases, this is a defining signature of a density-dependent limiting factor. Competition for limited food intensifies at high density, and pathogens spread more readily among crowded individuals, both of which help regulate the population as it approaches carrying capacity rather than affecting a fixed proportion regardless of density.

    **Concept Tested:** Density-Dependent Regulation

---

#### 8. Elephants (Type I survivorship) and oysters (Type III survivorship) both persist successfully despite vastly different reproductive strategies. What underlying trade-off explains why each strategy is evolutionarily stable in its respective ecological context?

<div class="upper-alpha" markdown>
1. Elephants produce large numbers of low-investment offspring, while oysters produce few high-investment offspring
2. Elephants invest heavily in few offspring with high survival probability, favored in stable, competitive environments, while oysters produce enormous numbers of low-investment offspring, favored where offspring mortality is high and unpredictable
3. Both species use identical reproductive strategies but differ only in lifespan
4. Survivorship curve type is unrelated to the number or size of offspring produced
</div>

??? question "Show Answer"
    The correct answer is **B**. Elephants exemplify a K-selected strategy — long lifespan, few offspring, and extensive parental care — well suited to stable, resource-competitive environments where investing heavily in fewer offspring maximizes their survival. Oysters exemplify an r-selected strategy, producing enormous numbers of low-investment offspring, an approach favored in unpredictable environments where most offspring will not survive regardless of parental effort, so sheer numbers compensate for high mortality.

    **Concept Tested:** Life History Strategies

---

#### 9. A newly disturbed habitat, such as a recently burned field, offers abundant open space but unpredictable, short-term conditions. Which life history strategy would population ecology theory predict to be favored there, and why?

<div class="upper-alpha" markdown>
1. K-selected strategy, because stable environments always favor extensive parental investment
2. Neither r- nor K-selected strategies would be favored in a disturbed habitat
3. r-selected strategy, because rapid reproduction and high offspring number allow a population to quickly exploit abundant, temporary resources before conditions change again
4. K-selected strategy, because large body size is always favored regardless of environmental stability
</div>

??? question "Show Answer"
    The correct answer is **C**. Disturbed, unpredictable environments with temporarily abundant resources favor r-selected species, which can rapidly colonize open space by producing large numbers of offspring quickly, capitalizing on the resource surplus before conditions change again or competition intensifies. K-selected strategies, which invest heavily in few offspring, are instead favored in stable environments where populations remain near carrying capacity and competition is the dominant selective pressure.

    **Concept Tested:** r-Selection and K-Selection (Environmental Prediction)

---

#### 10. A wildlife manager wants to predict how a population near its carrying capacity will respond over the next decade if ongoing habitat development is expected to gradually reduce carrying capacity by 50%. Which modeling approach would best capture the expected population dynamics?

<div class="upper-alpha" markdown>
1. Use the exponential growth equation exclusively, since carrying capacity does not affect exponential models
2. Assume the population will continue growing exponentially regardless of the reduced carrying capacity
3. Model the population using only density-independent factors, since habitat development is a human activity
4. Apply the logistic growth equation with a K value that decreases over time to reflect habitat loss, predicting that the population will decline as N exceeds the shrinking K, eventually stabilizing near the new, lower carrying capacity
</div>

??? question "Show Answer"
    The correct answer is **D**. Because the population is already near carrying capacity, the logistic growth model is the appropriate tool, and it must be adapted to reflect a $K$ that declines over time as habitat is lost. As $K$ shrinks below the current population size, $N$ will exceed $K$, driving the growth rate negative under the logistic equation and causing the population to decline until it stabilizes near the new, lower carrying capacity. The exponential model ignores resource limits entirely and would not capture this dynamic.

    **Concept Tested:** Logistic Population Growth (Modeling Environmental Change)

---
