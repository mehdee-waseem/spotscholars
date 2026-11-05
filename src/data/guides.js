// Step-by-step guides. Each section has a heading and blocks:
// { p: 'text' }            paragraph
// { list: [...] }          bullets
// { steps: [...] }         numbered steps
// { note: 'text' }         highlighted tip
// { table: { head: [...], rows: [[...], ...] } }

export const GUIDES = {
  pakistan: {
    title: 'Applying from Pakistan',
    eyebrow: 'Campus France Pakistan',
    intro:
      'Everything Campus France Pakistan asks for, in one place: the two application routes, the 2026–27 dates, the PKR 30,000 fee, the interview and the visa at AEG Islamabad.',
    sections: [
      {
        heading: 'First, which route are you on?',
        blocks: [
          { list: [
            'Candidature (Études en France catalogue): you apply to programmes listed in the EEF catalogue, mostly public universities. Up to 7 Master\'s programmes or 3 Bachelor\'s programmes.',
            'Pre-Consular ("I am already accepted"): you were admitted directly by a school that is not in the EEF catalogue (most engineering and business schools, Erasmus Mundus, many English-taught Master\'s). You upload your final admission letter.',
            'Funded PhD or researcher with a doctoral contract: not EEF — you apply for the Talent Passport researcher visa instead.'
          ] },
          { note: 'Only Pakistani nationals and non-EU nationals living in Pakistan are processed by Campus France Pakistan. If you live in another country, apply through that country\'s Campus France.' }
        ]
      },
      {
        heading: 'Candidature dates for 2026–27 entry',
        blocks: [
          { table: {
            head: ['Step', 'Date'],
            rows: [
              ['Applications open', '1 October 2026'],
              ['Application deadline (programme cart locks)', '18 November 2026'],
              ['Fee payment deadline', '30 November 2026'],
              ['Campus France Pakistan review + interview', 'December 2026 – March 2027'],
              ['Universities review your file', 'March – April 2027'],
              ['University results on the platform', 'By 30 April 2027'],
              ['Confirm your final choice', 'End of May 2027'],
              ['Visa appointment at AEG', 'As soon as you have your EEF certificate']
            ]
          } },
          { note: 'After 18 November you cannot change your programme choices. Strict deadlines — late files are rejected.' }
        ]
      },
      {
        heading: 'Pre-Consular dates',
        blocks: [
          { table: {
            head: ['', 'Spring intake (Jan–Mar 2027)', 'Autumn intake (Sep–Nov 2027)'],
            rows: [
              ['Applications open', '60 days before intake', '60 days before intake'],
              ['Applications close', '30 December 2026', '30 August 2027'],
              ['Campus France review', 'Dec 2026 – Mar 2027', 'May – Sep 2027']
            ]
          } }
        ]
      },
      {
        heading: 'The fee — PKR 30,000',
        blocks: [
          { list: [
            'Paid to Alliance Française Karachi by bank transfer or deposit, within one week of receiving the payment request. Bank details are on the official Campus France Pakistan page.',
            'Never pay before you receive the payment request.',
            'Non-refundable. Applying later for a different programme through another route means a new fee.',
            'Free (or reimbursed) for French Government scholarship holders (Eiffel, Embassy Climate Change) and Erasmus Mundus scholars.'
          ] }
        ]
      },
      {
        heading: 'Documents to upload',
        blocks: [
          { list: [
            'Passport valid at least 18 months after your intake date',
            'Passport photo, white background',
            'SSC / O-Level documents (IBCC attestation preferred)',
            'HSSC / A-Level documents (IBCC attestation preferred)',
            'Bachelor\'s / Master\'s degree and transcripts (HEC attestation preferred)',
            'CV, plus experience letters for every job you list',
            'Gap explanation letter for any gap longer than 6 months',
            'IELTS or other English proof',
            'Pre-Consular only: your final letter of acceptance'
          ] },
          { note: 'Write your motivation in the platform\'s own field — don\'t upload a separate motivation letter. Everything you type must match your documents.' }
        ]
      },
      {
        heading: 'The academic interview',
        blocks: [
          { list: [
            'Invitation by email and under "My Appointments".',
            'In person at the Alliance Française nearest your address: Islamabad, Lahore or Karachi.',
            'Bring ALL original documents and your fee slip — originals are checked against your uploads.',
            'Missing the interview without a justification can get your file abandoned.'
          ] }
        ]
      },
      {
        heading: 'Recognition — check before you apply',
        blocks: [
          { list: [
            'Your target institution must be listed in WHED — HEC Pakistan only recognises degrees from institutions in that database.',
            'Your Pakistani degrees should be HEC-recognised (and school certificates IBCC-attested).',
            'After graduating in France, request HEC equivalence to have your French degree recognised in Pakistan.',
            'HSSC holders apply for Licence 1 (Bachelor year 1). Bachelor\'s holders apply for Master 1.'
          ] }
        ]
      },
      {
        heading: 'Contacts',
        blocks: [
          { list: [
            'General questions and office appointments (no walk-ins): info@campusfrancepakistan.org',
            'Questions about your EEF file: eef@campusfrancepakistan.org — subject must be [PK NUMBER – your issue] or it won\'t be answered.',
            'Or ask the official Campus France digital assistant (link below).'
          ] }
        ]
      }
    ],
    links: [
      { label: 'Études en France — Candidature campaign', url: 'https://www.pakistan.campusfrance.org/apply-to-french-higher-education-institutions-through-etudes-en-france-candidature-campaign' },
      { label: 'Pre-Consular application', url: 'https://www.pakistan.campusfrance.org/apply-directly-to-french-higher-education-institutions-pre-consular-application' },
      { label: 'EEF application rules', url: 'https://www.pakistan.campusfrance.org/eef-application-rules' },
      { label: 'Études en France platform login', url: 'https://etudesenfrance.diplomatie.gouv.fr/connexion' },
      { label: 'Campus France Pakistan FAQ', url: 'https://www.pakistan.campusfrance.org/frequently-asked-questions-students' },
      { label: 'Campus France digital assistant', url: 'https://campus-france-digital-assistant-dee17c.zapier.app' },
      { label: 'WHED database', url: 'https://whed.net/results_institutions.php' },
      { label: 'HEC — foreign degree recognition', url: 'https://www.hec.gov.pk/english/services/students/DES/Pages/Procedure/Foreign-HEIs.aspx' }
    ]
  },

  admissions: {
    title: 'How to apply',
    eyebrow: 'Admissions',
    intro:
      'Two roads lead into a French university: the Études en France platform and applying directly to the school. Knowing which one your programme uses saves months of confusion.',
    sections: [
      {
        heading: 'Road 1 — Études en France (EEF)',
        blocks: [
          { p: 'If you live in a country covered by Campus France (Pakistan, India, Bangladesh and many more), most public university programmes are applied for through the Études en France platform. One account, one file, several choices.' },
          { steps: [
            'Create your account on the Études en France platform for your country.',
            'Fill in your profile: education, test scores, CV.',
            'Add programmes to your cart — up to 7 Master\'s or 3 Bachelor\'s — and write a tailored motivation for each.',
            'Submit, then pay the Campus France fee when you receive the payment request.',
            'Attend the Campus France interview.',
            'Universities answer on the platform; confirm one offer.',
            'Apply for the student visa with your EEF certificate.'
          ] },
          { note: 'The EEF catalogue is NOT the full list of programmes. Many English-taught Master\'s and almost all engineering and business schools recruit directly — that\'s Road 2.' }
        ]
      },
      {
        heading: 'Road 2 — Apply directly to the school',
        blocks: [
          { p: 'Grandes écoles, engineering and business schools, Erasmus Mundus programmes and many English-taught Master\'s run their own online application. After admission you still go through Campus France using the Pre-Consular ("already accepted") route before the visa.' },
          { list: [
            'Find the programme page and its application portal (see our Programs page).',
            'Check the deadline — the earliest round usually has the most scholarships.',
            'After the offer letter, complete the Pre-Consular procedure for your country.',
            'Then apply for the visa.'
          ] }
        ]
      },
      {
        heading: 'Engineering shortcut: network n+i',
        blocks: [
          { p: 'Network n+i lets you apply once and be considered by 50+ engineering schools, with French learning built into the programme. A good option if you want an engineering degree but don\'t speak French yet.' }
        ]
      },
      {
        heading: 'Documents you will almost always need',
        blocks: [
          { list: [
            'Passport valid well beyond your study start (Campus France Pakistan asks for 18 months)',
            'Degree certificates and transcripts (attested)',
            'English proof — IELTS 6.0–6.5 is typical; some schools accept a Medium of Instruction letter from your university',
            'CV in a clean one-page format',
            'Motivation / statement of purpose written for each programme',
            'Two recommendation letters (common for Master\'s and PhD)'
          ] }
        ]
      },
      {
        heading: 'Timeline that works',
        blocks: [
          { list: [
            'September–October: shortlist programmes and scholarships, take IELTS.',
            'October–mid-November: Études en France applications (deadline 18 November for 2026–27 in Pakistan).',
            'November–January: direct applications, Eiffel nominations, Erasmus Mundus deadlines.',
            'February–April: interviews and results.',
            'May–July: confirm, Campus France procedure, visa, housing.',
            'September: arrive and start.'
          ] }
        ]
      }
    ],
    links: [
      { label: 'Campus France Pakistan', url: 'https://www.pakistan.campusfrance.org/' },
      { label: 'Programmes taught in English (Campus France)', url: 'https://taughtie.campusfrance.org/tiesearch/#/catalog' },
      { label: 'Mon Master', url: 'https://www.monmaster.gouv.fr/' },
      { label: 'Network n+i', url: 'https://www.nplusi.com/' }
    ]
  },

  costs: {
    title: 'Costs & tuition',
    eyebrow: 'Money',
    intro:
      'France is still one of the cheaper places to study in Western Europe, but non-EU students pay higher fees at public universities, and waivers are now limited.',
    sections: [
      {
        heading: 'Tuition 2026–27 (non-EU students)',
        blocks: [
          { table: {
            head: ['Where', 'Per year'],
            rows: [
              ['Public university — Bachelor (Licence)', '€2,902'],
              ['Public university — Master', '€3,950'],
              ['Public university — PhD', '€398'],
              ['Engineering schools', 'Set by each school — often several thousand euros'],
              ['Private and business schools', 'About €3,000–€10,000, top business schools €15,000+']
            ]
          } },
          { note: 'Universities can waive the higher fee for only a limited share of international students (30% in 2026/27, 25% in 2027/28, 20% after). Ask the international office as soon as you\'re admitted.' }
        ]
      },
      {
        heading: 'Monthly budget',
        blocks: [
          { table: {
            head: ['', 'Paris', 'Other cities (Lyon, Lille, Toulouse…)'],
            rows: [
              ['Typical student budget', '€1,100 – €1,400', '€650 – €850'],
              ['CROUS room', '€150 – €600', '€150 – €600'],
              ['Private studio', '€700 – €1,200', '€400 – €700'],
              ['Transport pass', 'About €400/year (Navigo Imagine R)', 'About €30/month'],
              ['CROUS canteen meal', '€1', '€1']
            ]
          } },
          { p: 'Moving outside Paris can cut your living costs nearly in half.' }
        ]
      },
      {
        heading: 'Proof of funds for the visa',
        blocks: [
          { p: 'The French Consulate in Pakistan asks for at least €877.50 per month for your stay — shown as your own bank statements (last 6 months), or a sponsor\'s affidavit with their statements and ID, or a scholarship letter.' }
        ]
      },
      {
        heading: 'One-time costs to plan for',
        blocks: [
          { list: [
            'Études en France / Campus France fee (PKR 30,000 in Pakistan)',
            'Visa fee (paid at the consulate) and VLS-TS validation fee after arrival',
            'CVEC student life contribution — around €100, paid once a year before enrolment',
            'Housing deposit, usually one month of rent',
            'Flight, plus about €1,000 cash for your first weeks',
            'Health insurance is free for students; a complementary mutuelle costs €5–50/month'
          ] }
        ]
      }
    ],
    links: [
      { label: 'Campus France Pakistan — prepare your budget', url: 'https://www.pakistan.campusfrance.org/prepare-your-budget' },
      { label: 'Ministry FAQ on tuition fees', url: 'https://www.enseignementsup-recherche.gouv.fr/fr/faq-droits-d-inscription-differencies-pour-les-etudiants-extra-communautaires-103043' },
      { label: 'CVEC payment', url: 'https://cvec.etudiant.gouv.fr/' }
    ]
  },

  visa: {
    title: 'Student visa (VLS-TS)',
    eyebrow: 'Visa',
    intro:
      'Students staying more than three months need a long-stay student visa, the VLS-TS "étudiant". It works as your residence permit for the first year once you validate it after arrival.',
    sections: [
      {
        heading: 'Before you apply',
        blocks: [
          { list: [
            'Your Études en France procedure must be complete (EEF certificate + Campus France receipt).',
            'Proof of funds: at least €877.50 per month (bank statements of the last 6 months, or sponsor affidavit + statements + ID, or scholarship letter).',
            'Passport valid for your whole stay (at least 15 months from programme start).'
          ] }
        ]
      },
      {
        heading: 'Applying from Pakistan',
        blocks: [
          { steps: [
            'Fill in the online form on France-Visas.',
            'Book an appointment with AEG for the French Consulate in Islamabad (Diplomatic Enclave). Slots are first-come, first-served — book early.',
            'Attend the consulate appointment with your documents; pay the consulate fee there.',
            'Wait for the decision — between 2 weeks and 2 months.',
            'Collect your passport from AEG.'
          ] }
        ]
      },
      {
        heading: 'Documents (check AEG for the current list)',
        blocks: [
          { list: [
            'Original passport + copies of all pages',
            '3 recent photos',
            'France-Visas application form (2 copies)',
            'Admission letter (direct admission)',
            'Proof of funds',
            'Accommodation certificate, if you have one',
            'CV with precise dates and a cover letter',
            'Original transcripts and degrees (SSC, HSSC, Bachelor\'s…) with copies',
            'NADRA Family Registration Certificate',
            'OFII form (top half filled in)'
          ] }
        ]
      },
      {
        heading: 'After you arrive — validate your visa',
        blocks: [
          { p: 'You have 3 months after arriving to validate your VLS-TS online on ANEF and pay the fee with an electronic tax stamp. Don\'t wait — without validation you are not legally resident, and after 3 months you can\'t travel outside France and come back.' },
          { note: 'France raised residence-permit fees in May 2026. Check the current validation fee on the ANEF website before paying.' }
        ]
      },
      {
        heading: 'Working while studying',
        blocks: [
          { p: 'You can work up to 964 hours a year (about 20 hours a week). Internships that are part of your programme don\'t count, and internships longer than two months must be paid. After graduating you can stay on to look for a job or start a business.' }
        ]
      },
      {
        heading: 'Refused?',
        blocks: [
          { p: 'You can apply again, but Campus France Pakistan will not accept a new application for the same programme in the same academic year.' }
        ]
      }
    ],
    links: [
      { label: 'Campus France Pakistan — long-stay student visa', url: 'https://www.pakistan.campusfrance.org/apply-to-long-stay-french-student-visa' },
      { label: 'AEG — book your visa appointment', url: 'https://frenchvisa.aeg.com.pk/' },
      { label: 'AEG — French visa documents', url: 'https://aeg.com.pk/french-visa/' },
      { label: 'France-Visas application', url: 'https://france-visas.gouv.fr/en/web/france-visas/demande-de-visa' },
      { label: 'ANEF — validate your VLS-TS', url: 'https://administration-etrangers-en-france.interieur.gouv.fr/' }
    ]
  },

  housing: {
    title: 'Finding housing',
    eyebrow: 'Housing',
    intro:
      'Housing is the hardest part of arriving in France. Start the day you get your admission letter.',
    sections: [
      {
        heading: 'Where to look',
        blocks: [
          { list: [
            'CROUS student residences — the cheapest option (€150–600/month). Apply on MesServices or through your university.',
            'Your university\'s housing service — many reserve rooms for international students.',
            'Studapart and similar platforms that rent to students without a French guarantor.',
            'Private student residences (Studéa, Les Estudines and others).',
            'Shared flats (colocation) on La Carte des Colocs and Leboncoin — never pay before seeing a contract.'
          ] }
        ]
      },
      {
        heading: 'No French guarantor? Use Visale',
        blocks: [
          { p: 'Most landlords ask for a guarantor living in France. Visale is a free state guarantee for students. Apply online before signing your lease.' }
        ]
      },
      {
        heading: 'Prepare your rental file',
        blocks: [
          { p: 'Build a complete file on DossierFacile (the official government tool): passport, admission letter, proof of funds or scholarship, Visale certificate.' }
        ]
      },
      {
        heading: 'Get housing aid (CAF)',
        blocks: [
          { p: 'Once you have a lease and a French bank account, apply for APL on the CAF website. It can cover a big part of your rent every month.' },
          { note: 'Scam alert: never send money by Western Union, or to someone who says they are "abroad" and will post you the keys.' }
        ]
      }
    ],
    links: [
      { label: 'CROUS housing', url: 'https://trouverunlogement.lescrous.fr/' },
      { label: 'MesServices.etudiant.gouv.fr', url: 'https://www.messervices.etudiant.gouv.fr/' },
      { label: 'Visale (free guarantor)', url: 'https://www.visale.fr/' },
      { label: 'DossierFacile', url: 'https://www.dossierfacile.logement.gouv.fr/' },
      { label: 'CAF housing aid', url: 'https://www.caf.fr/' },
      { label: 'CROUS Lille — international students', url: 'https://www.crous-lille.fr/etudes-internationales/se-loger-en-france/' }
    ]
  },

  arrival: {
    title: 'Your first weeks in France',
    eyebrow: 'Arrival',
    intro: 'A checklist for your first month. Do these in order and life becomes much easier.',
    sections: [
      {
        heading: 'Before you fly',
        blocks: [
          { list: [
            'Carry about €1,000 in cash for your first weeks.',
            'Tell your bank you\'ll use your card abroad so it doesn\'t get blocked.',
            'Keep printed copies of your admission letter, accommodation proof and EEF documents.'
          ] }
        ]
      },
      {
        heading: 'Week 1',
        blocks: [
          { steps: [
            'Validate your VLS-TS visa online (ANEF) — you have 3 months, but do it now.',
            'Get a French SIM card — cheap plans start around €10/month.',
            'Pay the CVEC, then complete your university enrolment and get your student card.'
          ] }
        ]
      },
      {
        heading: 'Weeks 2–4',
        blocks: [
          { steps: [
            'Open a bank account (passport, visa, proof of address). Get your RIB for rent and salary.',
            'Register for free health insurance on Ameli\'s international students\' portal.',
            'Choose a doctor and consider a mutuelle (complementary insurance).',
            'Apply for CAF housing aid.',
            'Get a student transport pass.'
          ] }
        ]
      },
      {
        heading: 'Settling in',
        blocks: [
          { list: [
            'Join your university\'s international student association.',
            'Take free French classes if your university offers them — even A1–A2 helps a lot.',
            'Looking for an internship? Try KaamDhoondo for European internships.',
            'Join the SpotScholars WhatsApp community to meet students who arrived before you.'
          ] }
        ]
      }
    ],
    links: [
      { label: 'Campus France Pakistan — arriving in France', url: 'https://www.pakistan.campusfrance.org/arriving-in-france' },
      { label: 'Welcome to France — official guide', url: 'https://www.etudiant.gouv.fr/en/welcome-france-2063' },
      { label: 'Ameli — health insurance for international students', url: 'https://etudiant-etranger.ameli.fr/' },
      { label: 'KaamDhoondo — European internships', url: 'https://kamdhondho.netlify.app/' }
    ]
  }
};
