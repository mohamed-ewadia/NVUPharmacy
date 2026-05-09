export interface QuestionImage {
  src: string;
  alt: string;
}

interface BaseQuestion {
  id: number;
  question: string;
  image?: QuestionImage;
  explanation?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type?: "mcq";
  options: string[];
  correctAnswer: number;
}

export interface OrderingQuestion extends BaseQuestion {
  type: "ordering";
  items: string[];
  correctOrder: string[];
}

export type Question = MultipleChoiceQuestion | OrderingQuestion;

export interface Level {
  id: number;
  name: string;
  questions: Question[];
}

export const LEVELS: Level[] = [
  {
    id: 1,
    name: "Level 1",
    questions: [
      {
        id: 1,
        question: "Ligand is a .................., ................... lone pair of electrons, ex ..........",
        options: [
          "Lewis base, donor, (N, O, S)",
          "Lewis base, accept, (N, O, S)",
          "Lewis acid, accept, (Ca²⁺, Mn²⁺, Pb²⁺)",
          "Lewis acid, donor, (Ca²⁺, Mn²⁺, Pb²⁺)"
        ],
        correctAnswer: 0,
        explanation: "Ligand is a Lewis base that donates lone pair of electrons. Common examples include atoms like N, O, and S."
      },
      {
        id: 2,
        question: "Metal is a .................., ................... lone pair of electrons, ex ..........",
        options: [
          "Lewis acid, donor, (N, O, S)",
          "Lewis acid, accept, (Ca²⁺, Mn²⁺, Pb²⁺)",
          "Lewis base, accept, (N, O, S)",
          "Lewis base, donor, (Ca²⁺, Mn²⁺, Pb²⁺)"
        ],
        correctAnswer: 1,
        explanation: "Metal is a Lewis acid that accepts lone pair of electrons. Common metal ions include Ca²⁺, Mn²⁺, and Pb²⁺."
      },
      {
        id: 3,
        question: "The ability of a central metal ion to form a complex increases when:",
        options: [
          "Acidity of metal ↓, Ionic size ↑, Ionic charge ↓",
          "Acidity of metal ↑, Ionic size ↓, Ionic charge ↑",
          "Acidity of metal ↓, Ionic size ↓, Ionic charge ↑",
          "Acidity of metal ↑, Ionic size ↑, Ionic charge ↓"
        ],
        correctAnswer: 1,
        explanation: "Complex formation ability increases when: Acidity of metal increases, Ionic size decreases, and Ionic charge increases."
      },
      {
        id: 4,
        question: "The ability of a ligand to form a complex increases when:",
        options: [
          "Basicity of ligand ↓, chelate effect ↓, size of ligand ↓, steric effect ↓",
          "Basicity of ligand ↑, chelate effect ↑, size of ligand ↑, steric effect ↓",
          "Basicity of ligand ↑, chelate effect ↑, size of ligand ↓, steric effect ↓",
          "Basicity of ligand ↓, chelate effect ↑, size of ligand ↑, steric effect ↓"
        ],
        correctAnswer: 1,
        explanation: "Ligand's ability to form complexes increases when: Basicity increases, chelate effect increases, size increases, and steric effect increases."
      },
      {
        id: 5,
        question: "Which compound has the strongest electron-donating power?",
        options: [
          "EBT (Eriochrome Black T)",
          "EDTA",
          "Both have equal donating power",
          "Neither acts as an electron donor"
        ],
        correctAnswer: 1,
        explanation: "EDTA has the strongest electron-donating power among common chelating agents."
      },
      {
        id: 6,
        question: "Why is EDTA used as a preservative?",
        options: [
          "It kills bacteria directly by destroying cell walls",
          "It acts as a chelating agent for metal ions, preventing spoilage caused by bacteria and fungi",
          "It increases the pH to inhibit microbial growth",
          "It acts as an oxidizing agent"
        ],
        correctAnswer: 1,
        explanation: "EDTA preserves by chelating metal ions, which prevents bacterial and fungal growth that depends on these metals."
      },
      {
        id: 7,
        question: "When dispensing an antibiotic like tetracycline, which instruction should you give to the patient?",
        options: [
          "Take with milk to reduce stomach upset",
          "Take doses on time, drink plenty of water, avoid dairy products",
          "Take only once a day regardless of dose",
          "Avoid water for 2 hours after taking"
        ],
        correctAnswer: 1,
        explanation: "Tetracycline should be taken on time with plenty of water, and dairy products should be avoided as they can chelate with the antibiotic."
      },
      {
        id: 8,
        question: "In complexometry, why is the disodium salt of EDTA used instead of the parent acid?",
        options: [
          "It is more stable as a chelating agent",
          "It is more soluble in water",
          "It is more selective for metal ions",
          "It acts as a buffer"
        ],
        correctAnswer: 1,
        explanation: "The disodium salt of EDTA is used because it is more soluble in water compared to the parent acid form."
      },
      {
        id: 9,
        question: "Which statement is correct about EDTA?",
        options: [
          "EDTA is a highly selective reagent for Ca²⁺ only",
          "EDTA is not a selective reagent",
          "EDTA reacts only with transition metals",
          "EDTA does not form stable complexes"
        ],
        correctAnswer: 1,
        explanation: "EDTA is not a selective reagent - it can form complexes with many different metal ions."
      },
      {
        id: 10,
        question: "Why is a buffer solution used in complexometric titration with EDTA?",
        options: [
          "To increase the temperature of the reaction",
          "To adjust the pH so that the indicator is sensitive only to the metal ion",
          "To speed up the titration process",
          "To precipitate the metal ion before titration"
        ],
        correctAnswer: 1,
        explanation: "Buffer solution adjusts and maintains pH to ensure the indicator is sensitive only to the metal ion being titrated."
      },
      {
        id: 11,
        question: "Which complex is more stable in EDTA titration?",
        options: [
          "Metal-indicator complex",
          "Metal-EDTA complex",
          "Indicator-EDTA complex",
          "Both are equally stable"
        ],
        correctAnswer: 1,
        explanation: "The Metal-EDTA complex is more stable than the metal-indicator complex, which allows the titration to work properly."
      }
    ]
  },
  {
    id: 2,
    name: "Level 2",
    questions: [
      {
        id: 1,
        question: "Which indicators are used to determine the concentration of Ca²⁺?",
        options: [
          "Phenolphthalein and methyl orange",
          "Murexide and Hydroxy Naphthol",
          "EBT and thymol blue",
          "Bromocresol green and starch"
        ],
        correctAnswer: 1,
        explanation: "Murexide and Hydroxy Naphthol are the appropriate indicators for Ca²⁺ determination."
      },
      {
        id: 2,
        question: "In alkalimetric titration of a metal solution, what must be done before titration?",
        options: [
          "The solution must be heated to boiling",
          "The solution must be accurately neutralized",
          "The solution must be filtered",
          "The solution must be diluted with alcohol"
        ],
        correctAnswer: 1,
        explanation: "Before alkalimetric titration, the metal solution must be accurately neutralized."
      },
      {
        id: 3,
        question: "What is the main role of a buffer in complexometric titration?",
        options: [
          "To increase the formation of metal-hydroxide complexes",
          "To consume released protons (H⁺) and keep pH constant",
          "To act as an indicator for the endpoint",
          "To oxidize the metal ion"
        ],
        correctAnswer: 1,
        explanation: "The buffer consumes released protons (H⁺) during the reaction and maintains a constant pH throughout the titration."
      },
      {
        id: 4,
        question: "A 4-year-old child presents with abdominal pain, constipation, and developmental delay. Blood lead level (Pb²⁺) is requested. The lab uses a complexometric method with EDTA at pH 5 (hexamine buffer). Which indicator is most suitable?",
        options: [
          "Eriochrome Black T",
          "Murexide",
          "Xylenol Orange",
          "Phenolphthalein"
        ],
        correctAnswer: 2,
        explanation: "Xylenol Orange is the most suitable indicator for lead (Pb²⁺) determination at pH 5 with hexamine buffer."
      },
      {
        id: 6,
        question: "Which of the following is the most appropriate reason for using a back-titration method for Al³⁺ determination?",
        options: [
          "Al³⁺ forms a colorless complex with EDTA",
          "Al³⁺ blocks the indicator and reacts slowly with EDTA",
          "Al³⁺ does not react with EDTA at all",
          "Al³⁺ precipitates at pH 10 as Al(OH)₃"
        ],
        correctAnswer: 1,
        explanation: "Back-titration is used for Al³⁺ because it blocks the indicator and reacts slowly with EDTA, making direct titration impractical."
      },
      {
        id: 7,
        question: "In the indirect determination of Ag⁺ using the tetracyanonickelate method, why is 8% NaOH (pH 12) not used?",
        options: [
          "Because Ag⁺ would precipitate as AgOH",
          "Because EDTA decomposes at pH 12",
          "Because Ni²⁺ would precipitate as Ni(OH)₂",
          "Because murexide indicator is not stable at pH 12"
        ],
        correctAnswer: 2,
        explanation: "pH 12 is not used because Ni²⁺ would precipitate as Ni(OH)₂, interfering with the determination."
      },
      {
        id: 8,
        question: "In a displacement titration, a metal sample (e.g., Hg²⁺) is reacted with standard Mg-EDTA complex. This method is suitable only if:",
        options: [
          "The metal-EDTA complex is less stable than Mg-EDTA",
          "The metal-EDTA complex is more stable than Mg-EDTA",
          "The metal forms a colored complex with EDTA",
          "The metal does not react with the indicator at any pH"
        ],
        correctAnswer: 1,
        explanation: "Displacement titration works only when the metal-EDTA complex is more stable than Mg-EDTA, allowing the displacement to occur."
      },
      {
        id: 9,
        question: "Which of the following correctly describes the ionization state and color of Eriochrome Black T (H₃In) at pH > 11?",
        options: [
          "H₂In⁻, Red",
          "HIn²⁻, Blue",
          "In³⁻, Orange",
          "H₄In⁻, Reddish violet"
        ],
        correctAnswer: 2,
        explanation: "At pH > 11, Eriochrome Black T exists as In³⁻ and shows an orange color."
      },
      {
        id: 10,
        question: "Cyanide ion (CN⁻) is used as a masking agent. Which set of ions forms very stable cyanide complexes and can thus be masked?",
        options: [
          "Ca²⁺, Mg²⁺, Pb²⁺",
          "Cd²⁺, Zn²⁺, Cu²⁺",
          "Mn²⁺, Pb²⁺, Mg²⁺",
          "Al³⁺, Fe³⁺, Ca²⁺"
        ],
        correctAnswer: 1,
        explanation: "Cd²⁺, Zn²⁺, and Cu²⁺ form very stable cyanide complexes, making them ideal candidates for masking."
      },
      {
        id: 11,
        question: "A patient's urine sample needs analysis for lead (Pb²⁺) exposure. The analyst decides to use direct titration with EDTA at pH = 5 adjusted by hexamine. Which indicator is most appropriate according to the lecture?",
        options: [
          "Eriochrome Black T",
          "Murexide",
          "Xylenol Orange",
          "Dithizone"
        ],
        correctAnswer: 2,
        explanation: "Xylenol Orange is the most appropriate indicator for lead analysis at pH 5 with hexamine buffer."
      }
    ]
  },
  {
    id: 3,
    name: "Level 3",
    questions: [
      {
        id: 1,
        question: "Oxidation is defined as:",
        options: [
          "Gain of electrons",
          "Loss of electrons",
          "Gain of hydrogen"
        ],
        correctAnswer: 1,
        explanation: "Oxidation is defined as the loss of electrons from a chemical species."
      },
      {
        id: 2,
        question: "Reduction is defined as the:",
        options: [
          "Increase in oxidation number",
          "Decrease in oxidation number",
          "Neutralization"
        ],
        correctAnswer: 1,
        explanation: "Reduction is defined as the decrease in oxidation number of a chemical species."
      },
      {
        id: 3,
        question: "An 'Oxidizing agent' is also known as an:",
        options: [
          "Reductant",
          "Oxidant",
          "Catalyst"
        ],
        correctAnswer: 1,
        explanation: "An oxidizing agent is also called an oxidant - it accepts electrons and causes oxidation in other species."
      },
      {
        id: 4,
        question: "Oxidation and reduction reactions occur:",
        options: [
          "Independently",
          "Simultaneously",
          "In different times"
        ],
        correctAnswer: 1,
        explanation: "Oxidation and reduction reactions always occur simultaneously - when one species is oxidized, another must be reduced."
      },
      {
        id: 5,
        question: "The oxidation number of a free element (like Zn or S) is:",
        options: [
          "+1",
          "-1",
          "Zero"
        ],
        correctAnswer: 2,
        explanation: "Free elements in their natural state always have an oxidation number of zero."
      },
      {
        id: 6,
        question: "The oxidation number of Oxygen is -1 in:",
        options: [
          "Water (H₂O)",
          "Peroxides (H₂O₂)",
          "Potassium Permanganate (KMnO₄)"
        ],
        correctAnswer: 1,
        explanation: "In peroxides like H₂O₂, oxygen has an oxidation number of -1 instead of the usual -2."
      },
      {
        id: 7,
        question: "Hydrogen usually has an oxidation number of +1, EXCEPT in:",
        options: [
          "Water (H₂O)",
          "Metal hydrides (NaH)",
          "Acids (HCl)"
        ],
        correctAnswer: 1,
        explanation: "In metal hydrides like NaH, hydrogen has an oxidation number of -1 instead of +1."
      },
      {
        id: 8,
        question: "Which element has an oxidation number of -1 in ALL of its compounds?",
        options: [
          "Oxygen",
          "Chlorine",
          "Fluorine"
        ],
        correctAnswer: 2,
        explanation: "Fluorine always has an oxidation number of -1 in all its compounds because it is the most electronegative element."
      },
      {
        id: 9,
        question: "What is the oxidation number of Sulfur (S) in the sulfate ion (SO₄²⁻)?",
        options: [
          "+4",
          "+6",
          "-2"
        ],
        correctAnswer: 1,
        explanation: "In the sulfate ion (SO₄²⁻), sulfur has an oxidation number of +6."
      },
      {
        id: 10,
        question: "In KMnO₄, the oxidation number of Manganese (Mn) is:",
        options: [
          "+2",
          "+4",
          "+7"
        ],
        correctAnswer: 2,
        explanation: "In potassium permanganate (KMnO₄), manganese has an oxidation number of +7."
      },
      {
        id: 11,
        question: "The oxidation number of Nitrogen (N) in the nitrate ion (NO₃⁻) is:",
        options: [
          "+5",
          "+3",
          "-3"
        ],
        correctAnswer: 0,
        explanation: "In the nitrate ion (NO₃⁻), nitrogen has an oxidation number of +5."
      },
      {
        id: 12,
        question: "Which of the following is an example of oxidation in daily life?",
        options: [
          "Darkening of sliced fruits",
          "Dissolving salt in water",
          "Freezing water"
        ],
        correctAnswer: 0,
        explanation: "Darkening of sliced fruits is caused by oxidation of phenolic compounds when exposed to air."
      },
      {
        id: 13,
        question: "Silver-plating is an example of which process?",
        options: [
          "Oxidation of silver",
          "Reduction of silver ions",
          "Neutralization"
        ],
        correctAnswer: 1,
        explanation: "Silver-plating involves the reduction of silver ions (Ag⁺) to metallic silver (Ag⁰)."
      },
      {
        id: 14,
        question: "What can be added to cut fruit to slow down its oxidation?",
        options: [
          "Boiling water",
          "Lemon juice",
          "Vinegar"
        ],
        correctAnswer: 1,
        explanation: "Lemon juice contains vitamin C (ascorbic acid), an antioxidant that slows down oxidation of cut fruits."
      },
      {
        id: 15,
        question: "A clinical pharmacist is asked why N-acetylcysteine (NAC) is given in paracetamol overdose?",
        options: [
          "NAC directly binds to acetaminophen in the blood",
          "NAC is a strong oxidizing agent that destroys the toxin",
          "NAC replenishes glutathione, which reduces the toxic metabolite NAPQI",
          "NAC increases urine flow to excrete the drug faster"
        ],
        correctAnswer: 2,
        explanation: "NAC replenishes glutathione stores, which is essential for reducing and neutralizing the toxic metabolite NAPQI formed from paracetamol."
      },
      {
        id: 16,
        question: "While preparing an IV infusion of ferrous sulfate (Fe²⁺), the solution turns yellow-brown after one hour. What is the correct chemical explanation?",
        options: [
          "Reduction of Fe³⁺ to Fe²⁺ by oxygen",
          "Oxidation of Fe²⁺ to Fe³⁺",
          "Formation of a colored complex with sodium chloride",
          "Thermal decomposition of the solution"
        ],
        correctAnswer: 1,
        explanation: "The yellow-brown color indicates oxidation of ferrous ions (Fe²⁺) to ferric ions (Fe³⁺), typically caused by exposure to oxygen."
      }
    ]
  },
  {
    id: 4,
    name: "Level 4",
    questions: [
      {
        id: 1,
        question: "In the reaction of Fe²⁺ with MnO₄⁻ in acidic medium, how many electrons does each Fe²⁺ ion lose?",
        options: [
          "1",
          "2",
          "3",
          "5"
        ],
        correctAnswer: 0,
        explanation: "Each Fe²⁺ ion is oxidized to Fe³⁺, so it loses one electron."
      },
      {
        id: 2,
        question: "In the same reaction, how many electrons does manganese gain when going from MnO₄⁻ to Mn²⁺?",
        options: [
          "2",
          "3",
          "5",
          "7"
        ],
        correctAnswer: 2,
        explanation: "Manganese is reduced from +7 in MnO₄⁻ to +2 in Mn²⁺, gaining five electrons."
      },
      {
        id: 3,
        question: "In the redox system (CO₂ / C₂O₄²⁻), which species acts as the reducing agent?",
        options: [
          "CO₂",
          "C₂O₄²⁻",
          "Both",
          "Neither"
        ],
        correctAnswer: 1,
        explanation: "C₂O₄²⁻ is oxidized to CO₂, so it donates electrons and acts as the reducing agent."
      },
      {
        id: 5,
        question: "In the system MnO₄⁻/Mn²⁺, the oxidized form is MnO₄⁻.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: 0,
        explanation: "MnO₄⁻ contains manganese in the +7 oxidation state, so it is the oxidized form."
      },
      {
        id: 6,
        question: "The oxidizing agent is the species that loses electrons.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: 1,
        explanation: "An oxidizing agent gains electrons; the species that loses electrons is the reducing agent."
      },
      {
        id: 7,
        question: "Oxidation of oxalate (C₂O₄²⁻) to CO₂ increases the oxidation state of carbon from +3 to +4.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: 0,
        explanation: "Carbon is +3 in C₂O₄²⁻ and becomes +4 in CO₂, so oxidation occurs."
      },
      {
        id: 8,
        question: "To balance the reaction of MnO₄⁻ with C₂O₄²⁻ in acidic medium, we need _____ H⁺ ions on the left side.",
        options: [
          "8",
          "16",
          "4",
          "2"
        ],
        correctAnswer: 1,
        explanation: "The balanced acidic reaction uses 16 H⁺ ions on the reactant side."
      },
      {
        id: 9,
        question: "In the balanced reaction: 6Fe²⁺ + Cr₂O₇²⁻ + 14H⁺ → 6Fe³⁺ + 2Cr³⁺ + _____ H₂O",
        options: [
          "5",
          "6",
          "7",
          "8"
        ],
        correctAnswer: 2,
        explanation: "Seven water molecules balance the oxygen and hydrogen atoms in this dichromate reaction."
      },
      {
        id: 10,
        question: "The oxidation state of carbon in C₂O₄²⁻ is _____.",
        options: [
          "+2",
          "+3",
          "+4",
          "-2"
        ],
        correctAnswer: 1,
        explanation: "In C₂O₄²⁻, the two carbons together total +6, so each carbon has an oxidation state of +3."
      },
      {
        id: 11,
        question: "The correct redox system notation for iron is _____.",
        options: [
          "Fe²⁺/Fe³⁺",
          "Fe³⁺/Fe²⁺",
          "Fe/Fe²⁺",
          "Fe³⁺/Fe"
        ],
        correctAnswer: 1,
        explanation: "Redox systems are written as oxidized form / reduced form, so iron is written Fe³⁺/Fe²⁺."
      },
      {
        id: 12,
        question: "In the reaction between oxalate and permanganate, each C₂O₄²⁻ loses _____ electrons.",
        options: [
          "1",
          "2",
          "5",
          "7"
        ],
        correctAnswer: 1,
        explanation: "Each oxalate ion loses two electrons as it is oxidized to carbon dioxide."
      },
      {
        id: 13,
        question: "In a quality control lab, dichromate is used to test the reducing capacity of a ferrous gluconate supplement. Which species acts as the oxidizing agent in the reaction between ferrous ions and dichromate in acidic medium?",
        options: [
          "Fe²⁺",
          "Fe³⁺",
          "Cr₂O₇²⁻",
          "Cr³⁺"
        ],
        correctAnswer: 2,
        explanation: "Cr₂O₇²⁻ accepts electrons from Fe²⁺ in acidic medium, so dichromate is the oxidizing agent."
      }
    ]
  },
  {
    id: 5,
    name: "Level 5",
    questions: [
      {
        id: 2,
        question: "Hydrogen peroxide (H₂O₂) is used to clean infected wounds. It acts as an oxidizing agent. If the wound environment is highly acidic (pH ≈ 3), how does this affect the oxidizing power of H₂O₂ based on its half-reaction?",
        options: [
          "Increases oxidizing power",
          "Decreases oxidizing power",
          "No effect",
          "It becomes a reducing agent"
        ],
        correctAnswer: 1,
        explanation: "Decreases oxidizing power because H₂O₂ reduction involves H⁺; lower [H⁺] (higher pH) lowers E."
      },
      {
        id: 3,
        question: "Dilute KMnO₄ solution is used as an antiseptic for skin infections. The redox system is MnO₄⁻/Mn²⁺ (E° = 1.51 V). If the formulation accidentally has a high concentration of Mn²⁺ (e.g., from previous batches), what happens to the antiseptic efficacy?",
        options: [
          "Increases efficacy",
          "Decreases efficacy",
          "No change",
          "It becomes toxic"
        ],
        correctAnswer: 1,
        explanation: "Decreases efficacy - common-ion effect increases [Mn²⁺], decreases E, and weakens the oxidizing agent."
      },
      {
        id: 4,
        question: "Vitamin C (ascorbic acid) is often used in pharmaceutical formulations to prevent oxidation of active ingredients. It acts as a reducing agent. Based on the electrochemical series, which of the following redox systems would vitamin C (E° ≈ 0.08 V for its oxidized form) be able to reduce?",
        options: [
          "Fe³⁺/Fe²⁺ (E° = 0.77 V)",
          "I₂/I⁻ (E° = 0.54 V)",
          "Both A and B",
          "Neither"
        ],
        correctAnswer: 2,
        explanation: "Both A and B - Vitamin C has lower E°, so it can reduce systems with higher E°."
      },
      {
        id: 5,
        question: "During a permanganate titration of oxalate in acidic medium, a student forgot to add H₂SO₄ (source of H⁺). What will happen to the reaction?",
        options: [
          "Faster reaction",
          "No reaction or incomplete reaction",
          "Higher endpoint",
          "Change of color to blue"
        ],
        correctAnswer: 1,
        explanation: "No reaction or incomplete reaction - H⁺ is required; without it, E decreases drastically."
      },
      {
        id: 6,
        question: "You are titrating Fe²⁺ with dichromate (Cr₂O₇²⁻). The E° for Fe³⁺/Fe²⁺ is 0.77 V and for dichromate is 1.33 V. What is the cell potential (E°cell)? Does the reaction proceed completely?",
        options: [
          "0.56 V, yes → complete",
          "0.56 V, no → not complete",
          "2.10 V, yes",
          "0.20 V, borderline"
        ],
        correctAnswer: 0,
        explanation: "0.56 V, yes - difference > 0.2 V means complete reaction."
      },
      {
        id: 7,
        question: "In a redox titration of Fe³⁺/Fe²⁺ system (E° = 0.77 V), you add fluoride ions (F⁻) which complex Fe³⁺ strongly. What happens to the measured potential?",
        options: [
          "Increases",
          "Decreases",
          "No change",
          "Doubles"
        ],
        correctAnswer: 1,
        explanation: "Decreases - [Fe³⁺] decreases, so E becomes lower."
      },
      {
        id: 8,
        type: "ordering",
        question: "Arrange the following redox systems in descending order of oxidizing strength (strongest to weakest):",
        items: [
          "Fe³⁺/Fe²⁺ (0.77 V)",
          "MnO₄⁻/Mn²⁺ (1.51 V)",
          "Cr₂O₇²⁻/Cr³⁺ (1.33 V)",
          "I₂/I⁻ (0.54 V)"
        ],
        correctOrder: [
          "MnO₄⁻/Mn²⁺ (1.51 V)",
          "Cr₂O₇²⁻/Cr³⁺ (1.33 V)",
          "Fe³⁺/Fe²⁺ (0.77 V)",
          "I₂/I⁻ (0.54 V)"
        ],
        explanation: "Higher E° means stronger oxidizing strength, so the systems are arranged from the highest potential to the lowest."
      },
      {
        id: 9,
        question: "\"A high E° value means the reduced form is a strong reducing agent.\"",
        options: [
          "True",
          "False"
        ],
        correctAnswer: 1,
        explanation: "False - high E° means the oxidized form is a strong oxidizing agent."
      },
      {
        id: 10,
        question: "For a redox reaction to proceed completely at 25°C, the difference in E° between the two systems must be ≥ ______ V.",
        options: [
          "0.1",
          "0.2",
          "0.5",
          "1.0"
        ],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "In a wound disinfectant, the concentration of H₂O₂ is 0.05 M at pH = 1. Calculate E for H₂O₂/H₂O system if E° = 1.78 V. (Use n = 2, assume [H₂O₂] = 0.05 M, [H⁺] = 0.1 M)",
        options: [
          "1.74 V",
          "1.78 V",
          "1.82 V",
          "1.50 V"
        ],
        correctAnswer: 0,
        explanation: "1.74 V, calculated from the Nernst equation."
      },
      {
        id: 12,
        question: "You need to oxidize Fe²⁺ to Fe³⁺ in a pharmaceutical solution without generating toxic byproducts. Which oxidizing agent is most suitable based on E° and safety?",
        options: [
          "KMnO₄ (E° = 1.51 V) - leaves Mn²⁺",
          "K₂Cr₂O₇ (E° = 1.33 V) - leaves Cr³⁺ (toxic)",
          "H₂O₂ (E° = 1.78 V) - leaves H₂O",
          "F₂ (E° = 2.87 V) - very toxic"
        ],
        correctAnswer: 2,
        explanation: "H₂O₂ is safest because it leaves water as the byproduct."
      },
      {
        id: 13,
        question: "Look at the diagram of the Daniell cell. One important component is missing. What is the missing component and its function?",
        image: {
          src: "/images/daniell-cell-missing-salt-bridge.svg",
          alt: "Daniell cell diagram missing the salt bridge"
        },
        options: [
          "Salt bridge - to generate electrons for the redox reaction",
          "Voltmeter - to measure the flow of ions",
          "Salt bridge - to maintain electrical contact between the two half-cells and preserve charge neutrality",
          "Wire - to allow ion movement between the two beakers"
        ],
        correctAnswer: 2
      },
      {
        id: 14,
        question: "Which of the following correctly identifies the anode and cathode?",
        image: {
          src: "/images/daniell-cell-complete.svg",
          alt: "Complete Daniell cell diagram showing zinc and copper half-cells"
        },
        options: [
          "Anode: Cu | Cathode: Zn",
          "Anode: Zn | Cathode: Cu",
          "Anode: ZnSO₄ | Cathode: CuSO₄",
          "Anode: Salt bridge | Cathode: Voltmeter"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 6,
    name: "Level 6",
    questions: [
      {
        id: 1,
        question: "Which of the following titrants can act as a self-indicator because its reduced form is colorless?",
        options: [
          "K₂Cr₂O₇",
          "I₂",
          "Ce⁴⁺",
          "Both B and C"
        ],
        correctAnswer: 3,
        explanation: "I₂ is brown and becomes colorless I⁻; Ce⁴⁺ is pale yellow and becomes colorless Ce³⁺. K₂Cr₂O₇ is not a self-indicator because Cr³⁺ is green."
      },
      {
        id: 2,
        question: "A patient's blood sample requires determination of ferrous (Fe²⁺) concentration using ceric sulfate. Which indicator is most suitable?",
        options: [
          "Starch",
          "Diphenylamine",
          "1,10-Phenanthroline",
          "Methyl orange"
        ],
        correctAnswer: 2,
        explanation: "1,10-Phenanthroline is used for Fe²⁺ versus Ce(SO₄)₂ titration."
      },
      {
        id: 3,
        question: "In redox titration, why is starch used as an indicator for iodine?",
        options: [
          "It forms a colorless complex with I⁻",
          "It turns blue with I₂ and colorless when I₂ is reduced to I⁻",
          "It changes color at a specific potential",
          "It is a self-indicator"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which of the following is a primary standard?",
        options: [
          "KMnO₄ solution",
          "Ce(SO₄)₂",
          "I₂ solution",
          "Both B and C"
        ],
        correctAnswer: 1,
        explanation: "Ce(SO₄)₂ and K₂Cr₂O₇ are primary standards; I₂ is not."
      },
      {
        id: 5,
        question: "In strong acidic medium, MnO₄⁻ is reduced to:",
        options: [
          "MnO₂",
          "MnO₄²⁻",
          "Mn²⁺",
          "Mn"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "What is the role of heating (60-80°C) in the titration of oxalic acid with KMnO₄?",
        options: [
          "To prevent side reactions",
          "To speed up the slow reaction and initiate self-catalysis by Mn²⁺",
          "To decompose the indicator",
          "To precipitate oxalic acid"
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "In the determination of Calcium Chloride (CaCl₂) using KMnO₄, calcium is first precipitated as:",
        options: [
          "Calcium sulfate",
          "Calcium oxalate",
          "Calcium carbonate",
          "Calcium hydroxide"
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "The USP and BP official method for determination of hydrogen peroxide solution uses:",
        options: [
          "Ce(SO₄)₂ titration",
          "K₂Cr₂O₇ titration",
          "Iodine titration",
          "KMnO₄ titration"
        ],
        correctAnswer: 3
      },
      {
        id: 9,
        question: "Zimmermann's reagent contains MnSO₄, H₂SO₄, and H₃PO₄. What is the role of H₃PO₄?",
        options: [
          "To increase pH",
          "To form a stable colorless complex with Fe³⁺",
          "To oxidize Fe²⁺ to Fe³⁺",
          "To precipitate MnO₂"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Which of the following is an advantage of Ce(SO₄)₂ over KMnO₄?",
        options: [
          "It is cheaper",
          "It can be used as a self-indicator",
          "It does not oxidize Cl⁻ to Cl₂",
          "It works only in alkaline medium"
        ],
        correctAnswer: 2
      },
      {
        id: 11,
        question: "The indicator used in ceric sulfate titrations for Fe²⁺ determination is:",
        options: [
          "Diphenylamine",
          "Starch",
          "1,10-phenanthroline",
          "Methyl orange"
        ],
        correctAnswer: 2
      },
      {
        id: 13,
        question: "Why is iodine (I₂) dissolved in KI solution?",
        options: [
          "To increase its oxidizing power",
          "To form triiodide (I₃⁻) which is more soluble and less volatile",
          "To make it a primary standard",
          "To change its color"
        ],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "Standardization of iodine solution is done against:",
        options: [
          "KMnO₄",
          "Oxalic acid",
          "Sodium thiosulfate (Na₂S₂O₃)",
          "Ce(SO₄)₂"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 7,
    name: "Level 7",
    questions: [
      {
        id: 1,
        question: "Which of the following is a direct iodimetric application mentioned in the notes?",
        options: [
          "Determination of water by Karl Fischer",
          "Determination of ascorbic acid (Vitamin C)",
          "Determination of ferrous iron",
          "Determination of calcium"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "In the determination of ascorbic acid with iodine, the endpoint change using starch is:",
        options: [
          "Colorless to blue",
          "Blue to colorless",
          "Red to cyan",
          "Violet to colorless"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "In the Karl Fischer reaction, iodine (I₂) oxidizes sulfur dioxide (SO₂) in the presence of:",
        options: [
          "Chloroform",
          "Water (from the sample)",
          "Diphenylamine",
          "Starch"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which of the following reducing agents is NOT easily oxidized by air?",
        options: [
          "FeSO₄ (neutral pH)",
          "Sodium thiosulfate (Na₂S₂O₃)",
          "Ascorbic acid",
          "SnCl₂"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "In the determination of a mixture of Fe²⁺ and Fe³⁺ using KMnO₄, total iron (Fe²⁺+Fe³⁺) is obtained after reducing Fe³⁺ with:",
        options: [
          "KMnO₄",
          "Ce(SO₄)₂",
          "Stannous chloride (SnCl₂)",
          "Iodine"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "Why is Zimmermann's reagent not needed when using Ce(SO₄)₂ instead of KMnO₄ for iron determination?",
        options: [
          "Ce(SO₄)₂ is less stable",
          "Ce(SO₄)₂ does not react with chloride",
          "Ce(SO₄)₂ is a self-indicator",
          "The reaction with Ce(SO₄)₂ requires higher temperature"
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "Which of the following is a disadvantage of K₂Cr₂O₇ compared to KMnO₄?",
        options: [
          "It is more expensive",
          "It is not a primary standard",
          "It is not a self-indicator and has slower reaction",
          "It cannot be used in acidic medium"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "A 10% povidone-iodine solution (Betadine) is applied to a patient's wound. Why is iodine complexed with povidone?",
        options: [
          "To increase its toxicity",
          "To make it more soluble, less volatile, and less toxic",
          "To change its color for better visualization",
          "To decrease its antiseptic activity"
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "A hospital lab is analyzing a mixture containing both ferrous (Fe²⁺) and ferric (Fe³⁺) ions from a patient's supplement. To determine total iron, they reduce Fe³⁺ to Fe²⁺ using SnCl₂. What is the purpose of adding HgCl₂ afterwards?",
        options: [
          "To oxidize Fe²⁺ back to Fe³⁺",
          "To remove excess SnCl₂ because it would react with the titrant",
          "To act as an indicator",
          "To increase the pH"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "A patient's multivitamin contains both ferrous iron and ascorbic acid. Why is ascorbic acid often included in iron supplements?",
        options: [
          "It oxidizes Fe²⁺ to Fe³⁺",
          "It acts as a reducing agent, preventing oxidation of Fe²⁺ to Fe³⁺",
          "It precipitates iron",
          "It changes the color of the tablet"
        ],
        correctAnswer: 1,
        explanation: "Ascorbic acid is an antioxidant/reducing agent that protects Fe²⁺ from air oxidation."
      },
      {
        id: 11,
        question: "A pharmacist notices that a KMnO₄ solution stored in a clear glass bottle near a window has developed a brown precipitate. What is the brown precipitate?",
        options: [
          "Mn²⁺",
          "MnO₂",
          "I₂",
          "Fe(OH)₃"
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "A clinical lab needs to determine the water content in an organic liquid pharmaceutical product. Which method is most suitable according to the lecture?",
        options: [
          "KMnO₄ titration",
          "Karl Fischer titration",
          "Direct iodine titration",
          "Ceric sulfate titration"
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "A quality control lab receives a batch of oxalic acid raw material. The analyst titrates it with KMnO₄ at 60-80°C. Why is this temperature necessary?",
        options: [
          "To prevent MnO₂ formation",
          "The reaction is slow at room temperature; heating speeds it up and Mn²⁺ autocatalyzes",
          "To evaporate water",
          "To decompose the indicator"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 8,
    name: "Level 8",
    questions: [
      {
        id: 1,
        question: "Electrochemical methods are instrumental techniques because:",
        options: [
          "They are always faster than other methods",
          "They use specific instruments to measure electrical quantities",
          "They don't require chemical reactions",
          "They only work for colored solutions"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "In both galvanic and electrolytic cells, the electrode where oxidation occurs is called the:",
        options: [
          "Cathode",
          "Anode",
          "Salt bridge",
          "Reference electrode"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which of the following is NOT a requirement for current to develop in an electrochemical cell?",
        options: [
          "External metal conductor connecting electrodes",
          "Contact between the two electrolyte solutions",
          "Use of a salt bridge only",
          "Redox reaction at each electrode"
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "In a galvanic cell, energy conversion is from:",
        options: [
          "Electrical → Chemical",
          "Chemical → Electrical",
          "Thermal → Electrical",
          "Mechanical → Chemical"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "The cell potential (EMF) is calculated as:",
        options: [
          "E(anode) - E(cathode)",
          "E(cathode) + E(anode)",
          "E(cathode) - E(anode)",
          "E(cathode) × E(anode)"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "The primary role of a salt bridge is to:",
        options: [
          "Provide electrons to the electrodes",
          "Prevent ion movement completely",
          "Maintain electrical contact while isolating reactants",
          "Increase the cell voltage"
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "In an electrolytic cell, the cathode is:",
        options: [
          "Positive and reduction occurs",
          "Negative and reduction occurs",
          "Positive and oxidation occurs",
          "Negative and oxidation occurs"
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "Which reference electrode is assigned a potential of 0.000 V?",
        options: [
          "Saturated Calomel Electrode",
          "Silver/Silver Chloride Electrode",
          "Standard Hydrogen Electrode",
          "Glass electrode"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "The Nernst equation for a metal-metal ion electrode (Zn²⁺/Zn) shows that potential is proportional to:",
        options: [
          "log[reduced form]",
          "log[oxidized form]",
          "1/log[Cl⁻]",
          "log(H₂)"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "Which electrode is used as an indicator electrode for H⁺ concentration?",
        options: [
          "Platinum electrode",
          "Saturated Calomel Electrode",
          "Glass electrode",
          "Silver electrode"
        ],
        correctAnswer: 2
      },
      {
        id: 11,
        question: "In conductometric titration of a strong acid (HCl) with a strong base (NaOH), the conductance reaches a minimum at the endpoint because:",
        options: [
          "H⁺ is replaced by Na⁺ (lower mobility)",
          "OH⁻ is consumed completely",
          "The solution becomes non-conducting",
          "Salt bridge stops working"
        ],
        correctAnswer: 0
      },
      {
        id: 12,
        question: "During conductometric titration of NaCl with AgNO₃, conductance remains nearly constant until the endpoint because:",
        options: [
          "NO₃⁻ and Cl⁻ have similar mobilities",
          "No ions are present",
          "AgCl is highly soluble",
          "The temperature is constant"
        ],
        correctAnswer: 0
      },
      {
        id: 13,
        question: "In potentiometry, the potential difference is measured:",
        options: [
          "Under applied current",
          "Without applying any current",
          "Only with DC current",
          "Only with AC current"
        ],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "Which of the following is NOT an advantage of electrochemical methods?",
        options: [
          "Suitable for colored solutions",
          "Low cost",
          "Requires large sample volume",
          "Short analysis time"
        ],
        correctAnswer: 2
      },
      {
        id: 15,
        question: "The second derivative curve in potentiometric titration is used when:",
        options: [
          "The end point is very sharp",
          "The end point cannot be obtained accurately by other methods",
          "The sample is turbid",
          "The indicator electrode is not sensitive"
        ],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "In conductometry, alternating current (AC) is used instead of direct current (DC) to:",
        options: [
          "Increase the temperature",
          "Prevent electrolysis and electrode polarization",
          "Decrease the cell constant",
          "Increase the redox reaction rate"
        ],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "The cell constant in conductometry is defined as:",
        options: [
          "Distance between electrodes × area",
          "L/A (distance/surface area)",
          "A/L (surface area/distance)",
          "Resistance × conductance"
        ],
        correctAnswer: 1
      },
      {
        id: 18,
        question: "Which factor does NOT affect conductance?",
        options: [
          "Size of ions",
          "Hydration of ions",
          "Color of the solution",
          "Temperature"
        ],
        correctAnswer: 2
      },
      {
        id: 19,
        question: "In potentiometry, the reference electrode must be:",
        options: [
          "Sensitive to the analyte",
          "Insensitive to the analyte solution composition",
          "Made of glass only",
          "Changed for every sample"
        ],
        correctAnswer: 1
      },
      {
        id: 20,
        question: "A major disadvantage of the Standard Hydrogen Electrode is:",
        options: [
          "It is too sensitive to H⁺",
          "It is difficult to keep H₂ gas at 1 atm",
          "It cannot be used with acids",
          "It has no salt bridge"
        ],
        correctAnswer: 1
      },
      {
        id: 21,
        question: "A patient's blood pH is being measured using a glass electrode. Which error might occur if the blood pH is above 12?",
        options: [
          "Acid error (reading higher than actual)",
          "Alkaline error (reading lower than actual)",
          "No error",
          "Sodium error only"
        ],
        correctAnswer: 1
      },
      {
        id: 22,
        question: "In clinical labs, the Silver/Silver Chloride electrode is preferred over Saturated Calomel Electrode because:",
        options: [
          "It is more toxic",
          "It is non-toxic and miniaturizable for biosensors",
          "It has higher potential",
          "It cannot be used with KCl"
        ],
        correctAnswer: 1
      },
      {
        id: 23,
        question: "Which electrode is commonly used inside a blood gas analyzer to measure pH?",
        options: [
          "Platinum electrode",
          "Glass pH electrode",
          "Copper electrode",
          "Calomel electrode alone"
        ],
        correctAnswer: 1
      },
      {
        id: 24,
        question: "A patient sample contains concentrated sulfuric acid. Why can't the glass pH electrode be used?",
        options: [
          "It will melt the glass",
          "Dehydrating agents damage the glass membrane",
          "It gives alkaline error",
          "It reacts with Ag/AgCl"
        ],
        correctAnswer: 1
      },
      {
        id: 25,
        question: "In a patient with metabolic alkalosis, the glass pH electrode will show:",
        options: [
          "High H⁺ activity",
          "Low H⁺ activity (high pH reading)",
          "No change",
          "Acid error"
        ],
        correctAnswer: 1
      },
      {
        id: 26,
        question: "Why is KCl preferred in salt bridges for clinical measurements?",
        options: [
          "It is toxic to bacteria",
          "K⁺ and Cl⁻ have equal mobility, reducing liquid junction potential",
          "It reacts with all ions",
          "It precipitates easily"
        ],
        correctAnswer: 1
      }
    ]
  }
];
