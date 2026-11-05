// Step-by-step guides. Each section has a heading and blocks:
// { p: 'text' } for a paragraph, { list: [...] } for bullets, { steps: [...] } for numbered steps,
// { note: 'text' } for a highlighted tip.

export const GUIDES = {
  admissions: {
    title: 'How to apply',
    eyebrow: 'Admissions',
    intro:
      'Two roads lead into a French university: the Études en France platform and applying directly to the school. Knowing which one your programme uses saves months of confusion.',
    sections: [
      {
        heading: 'Road 1 — Études en France (EEF)',
        blocks: [
          { p: 'If you live in one of the countries covered by Campus France (Pakistan, India, Bangladesh and many more), most public university programmes are applied for through the Études en France platform. You create one account, upload your documents and choose programmes from the catalogue.' },
          { steps: [
            'Create your account on the Études en France platform for your country.',
            'Fill in your profile: education, test scores, CV and motivation letters.',
            'Choose your programmes (the number allowed is limited — choose carefully).',
            'Pay the Campus France procedure fee and submit.',
            'Attend the Campus France interview.',
            'Universities answer on the platform; accept one offer.',
            'Apply for the student visa using your EEF file.'
          ] },
          { note: 'Many students think the EEF catalogue is the full list of programmes. It is not. A lot of English-taught Master\'s programmes and almost all engineering and business schools recruit directly.' }
        ]
      },
      {
        heading: 'Road 2 — Apply directly to the school',
        blocks: [
          { p: 'Grandes écoles, engineering and business schools, Erasmus Mundus programmes and many English-taught Master\'s run their own online application. After admission you still go through Campus France, using the "already accepted" (pre-consular) route, before applying for the visa.' },
          { list: [
            'Find the programme page and its application portal.',
            'Check the deadline — the earliest round usually has the most scholarships.',
            'After the offer letter, complete the Campus France pre-consular procedure for your country.',
            'Then apply for the visa.'
          ] }
        ]
      },
      {
        heading: 'Documents you will almost always need',
        blocks: [
          { list: [
            'Passport valid for your whole study period',
            'Degree certificates and transcripts (with certified English or French translations if needed)',
            'Proof of English level (IELTS, TOEFL, Duolingo or a Medium of Instruction letter — each programme decides) or French level (DELF/TCF) for French-taught courses',
            'CV in Europass or a clean one-page format',
            'Motivation letter written for that specific programme',
            'Two recommendation letters (common for Master\'s and PhD)'
          ] }
        ]
      },
      {
        heading: 'Timeline that works',
        blocks: [
          { list: [
            'September–October: shortlist programmes and scholarships, prepare tests.',
            'November–January: apply (Eiffel nominations and many Erasmus Mundus deadlines fall here).',
            'February–April: interviews and results.',
            'May–July: Campus France procedure, visa, housing.',
            'September: arrive and start.'
          ] }
        ]
      }
    ],
    links: [
      { label: 'Campus France Pakistan', url: 'https://www.pakistan.campusfrance.org/' },
      { label: 'Taught-in-English programme catalogue (Campus France)', url: 'https://taughtie.campusfrance.org/' },
      { label: 'Campus France — official site', url: 'https://www.campusfrance.org/en' }
    ]
  },

  visa: {
    title: 'Student visa (VLS-TS)',
    eyebrow: 'Visa',
    intro:
      'Students staying longer than three months need a long-stay student visa called VLS-TS "étudiant". It works as your residence permit for the first year, once you validate it online after arrival.',
    sections: [
      {
        heading: 'Before you apply',
        blocks: [
          { list: [
            'An admission letter from a French institution',
            'Your completed Campus France procedure (EEF or pre-consular)',
            'Proof of funds — the French government asks for a minimum amount per month for the length of your stay (historically €615/month; check the current figure)',
            'Proof of accommodation for at least the first weeks',
            'Travel and health insurance for the period before you register with French social security'
          ] }
        ]
      },
      {
        heading: 'Applying',
        blocks: [
          { steps: [
            'Fill in the online application on the official France-Visas website.',
            'Book an appointment at the visa application centre named by the French Embassy in your country.',
            'Submit documents and biometrics, and pay the visa fee.',
            'Track your application and collect your passport.'
          ] }
        ]
      },
      {
        heading: 'After you arrive — validate your visa',
        blocks: [
          { p: 'Within three months of arrival you must validate your VLS-TS online on the ANEF website and pay the fee with an electronic tax stamp. Without validation you are not legally resident and cannot re-enter France after travelling.' },
          { note: 'France raised residence-permit fees in May 2026. Check the current validation fee on the official site before paying.' }
        ]
      },
      {
        heading: 'Working while studying',
        blocks: [
          { p: 'The student visa allows part-time work up to 964 hours per year (about 60% of full-time). Internships that are part of your programme don\'t count towards this limit.' }
        ]
      }
    ],
    links: [
      { label: 'France-Visas (official)', url: 'https://france-visas.gouv.fr/en/' },
      { label: 'ANEF — validate your VLS-TS', url: 'https://administration-etrangers-en-france.interieur.gouv.fr/' },
      { label: 'Campus France — student visa guide', url: 'https://www.campusfrance.org/en/student-visa-France' }
    ]
  },

  costs: {
    title: 'Costs & tuition',
    eyebrow: 'Money',
    intro:
      'France is still one of the cheaper places to study in Western Europe, but non-EU students pay higher fees at public universities, and waivers are now limited.',
    sections: [
      {
        heading: 'Tuition at public universities (non-EU)',
        blocks: [
          { list: [
            'Bachelor (Licence): about €2,900 per year',
            'Master: about €3,950 per year',
            'PhD: low national rate (a few hundred euros)'
          ] },
          { note: 'Universities can waive these higher fees for only a limited share of international students (30% in 2026/27, 25% in 2027/28, 20% after). Ask early. Fees may also rise — always check the university\'s page.' }
        ]
      },
      {
        heading: 'Other schools',
        blocks: [
          { p: 'Engineering schools set their own fees for non-EU students, often several thousand euros per year. Private business schools typically cost €10,000–€20,000 per year or more.' }
        ]
      },
      {
        heading: 'Living costs (rough monthly budget)',
        blocks: [
          { list: [
            'Rent: €250–€450 in a CROUS residence, €450–€900 privately outside Paris, more in Paris',
            'Food: €200–€300',
            'Transport: €25–€40 with a student pass',
            'Phone and internet: €10–€30',
            'Housing aid (CAF) can cover part of your rent once you are settled'
          ] }
        ]
      },
      {
        heading: 'One-time costs to plan for',
        blocks: [
          { list: [
            'Campus France procedure fee',
            'Visa fee and VLS-TS validation fee',
            'CVEC (student life contribution) — paid once a year before enrolment',
            'Housing deposit, usually one month of rent',
            'Flight and first-month expenses'
          ] }
        ]
      }
    ],
    links: [
      { label: 'Campus France — tuition fees', url: 'https://www.campusfrance.org/en/tuition-fees-France' },
      { label: 'CVEC payment', url: 'https://cvec.etudiant.gouv.fr/' }
    ]
  },

  housing: {
    title: 'Finding housing',
    eyebrow: 'Housing',
    intro:
      'Housing is the hardest part of arriving in France. Start as soon as you have your admission letter.',
    sections: [
      {
        heading: 'Where to look',
        blocks: [
          { list: [
            'CROUS student residences — the cheapest option. Apply through your university or the CROUS website.',
            'Your university\'s housing service — many reserve rooms for international students.',
            'Studapart and similar platforms that rent to students without a French guarantor.',
            'Private residences for students (Studéa, Nexity Studéa, Les Estudines and others).',
            'Shared flats (colocation) on La Carte des Colocs and Leboncoin — never pay before seeing a contract.'
          ] }
        ]
      },
      {
        heading: 'No French guarantor? Use Visale',
        blocks: [
          { p: 'Most landlords ask for a guarantor living in France. Visale is a free state guarantee for students aged 18–30. Apply online before signing your lease.' }
        ]
      },
      {
        heading: 'Prepare your rental file',
        blocks: [
          { p: 'Build a complete file on DossierFacile (the official government tool): passport, admission letter, proof of funds or scholarship, and Visale certificate.' }
        ]
      },
      {
        heading: 'Get housing aid (CAF)',
        blocks: [
          { p: 'Once you have a lease and a French bank account, apply for APL on the CAF website. It can cover a significant part of your rent each month.' },
          { note: 'Scam alert: never send money by Western Union or to someone who says they are "abroad" and will post the keys.' }
        ]
      }
    ],
    links: [
      { label: 'CROUS housing', url: 'https://trouverunlogement.lescrous.fr/' },
      { label: 'Visale (free guarantor)', url: 'https://www.visale.fr/' },
      { label: 'DossierFacile', url: 'https://www.dossierfacile.logement.gouv.fr/' },
      { label: 'CAF housing aid', url: 'https://www.caf.fr/' }
    ]
  },

  arrival: {
    title: 'Your first weeks in France',
    eyebrow: 'Arrival',
    intro:
      'A checklist for your first month. Do these in order and life becomes much easier.',
    sections: [
      {
        heading: 'Week 1',
        blocks: [
          { steps: [
            'Validate your VLS-TS visa online (ANEF).',
            'Get a French SIM card — cheap plans start around €10/month.',
            'Complete your university enrolment and get your student card.',
            'Pay the CVEC if you haven\'t already.'
          ] }
        ]
      },
      {
        heading: 'Weeks 2–4',
        blocks: [
          { steps: [
            'Open a bank account (online banks are fastest; traditional banks may ask for more documents).',
            'Register with French social security (Ameli) through the international students\' portal.',
            'Choose a doctor (médecin traitant) and consider a complementary health insurance (mutuelle).',
            'Apply for CAF housing aid.',
            'Get a student transport pass.'
          ] }
        ]
      },
      {
        heading: 'Settling in',
        blocks: [
          { list: [
            'Join the international student association at your university.',
            'Take free French classes if your university offers them — even A1–A2 makes daily life much easier.',
            'Join the SpotScholars WhatsApp community to meet students who arrived before you.'
          ] }
        ]
      }
    ],
    links: [
      { label: 'Ameli — social security for international students', url: 'https://etudiant-etranger.ameli.fr/' },
      { label: 'Welcome to France — official guide', url: 'https://www.campusfrance.org/en/arriving-in-France' }
    ]
  }
};
