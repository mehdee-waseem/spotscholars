// Every useful link, grouped. Shown on /resources.
// Extra links (from the SpotScholars bookmark collection) live in resources-extra.json
// and are merged in below: same `id` = appended to that group, new `id` = new group.
import EXTRA from './resources-extra.json';

const BASE_GROUPS = [
  {
    id: 'search',
    title: 'Find programmes — official search engines',
    intro: 'If a programme is listed here, it is accredited.',
    items: [
      { name: 'Campus France — programmes taught in English', text: 'About 1,600 programmes fully in English. Start here.', url: 'https://taughtie.campusfrance.org/tiesearch/#/catalog' },
      { name: 'Campus France — programmes taught in French', text: 'The general catalogue of French-taught programmes.', url: 'https://cataloguelm.campusfrance.org/' },
      { name: 'Mon Master', text: 'The national platform listing every public Master\'s degree (mostly French, some English).', url: 'https://www.monmaster.gouv.fr/' },
      { name: 'Parcoursup', text: 'Bachelor\'s (Licence) search engine used by French students — useful to see where courses are.', url: 'https://www.parcoursup.fr/' },
      { name: 'Campus Art catalogue', text: 'Art, design, architecture and music programmes.', url: 'https://www.pakistan.campusfrance.org/study-arts-campus-art-catalog' },
      { name: 'Summer schools & short French courses', text: 'Campus France catalogue of short programmes and language schools.', url: 'http://ecolesdete.campusfrance.org/#/main' },
      { name: 'Erasmus Mundus catalogue', text: 'Fully funded joint Master\'s across Europe — filter by France.', url: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en' }
    ]
  },
  {
    id: 'pakistan',
    title: 'Campus France Pakistan essentials',
    intro: 'Official pages for students applying from Pakistan.',
    items: [
      { name: 'Campus France Pakistan — home', text: 'News, events, procedures and contact.', url: 'https://www.pakistan.campusfrance.org/' },
      { name: 'Études en France platform (login)', text: 'Where you create your account and submit your file.', url: 'https://etudesenfrance.diplomatie.gouv.fr/connexion' },
      { name: 'Apply through Études en France (Candidature)', text: 'Steps, documents, fee and 2026–27 dates.', url: 'https://www.pakistan.campusfrance.org/apply-to-french-higher-education-institutions-through-etudes-en-france-candidature-campaign' },
      { name: 'Already admitted? Pre-Consular procedure', text: 'For admissions outside the EEF catalogue.', url: 'https://www.pakistan.campusfrance.org/apply-directly-to-french-higher-education-institutions-pre-consular-application' },
      { name: 'EEF application rules', text: 'Who must apply through EEF and who can\'t.', url: 'https://www.pakistan.campusfrance.org/eef-application-rules' },
      { name: 'Find your programme', text: 'Campus France Pakistan\'s guide to catalogues, rankings and labels.', url: 'https://www.pakistan.campusfrance.org/find-your-program' },
      { name: 'Understand the French higher education system', text: 'LMD, ECTS, degree types, intakes, recognition.', url: 'https://www.pakistan.campusfrance.org/understand-french-higher-education-system' },
      { name: 'Prepare your budget', text: 'Official fees and living costs for 2026–27.', url: 'https://www.pakistan.campusfrance.org/prepare-your-budget' },
      { name: 'Long-stay student visa', text: 'Visa steps, documents and proof of funds.', url: 'https://www.pakistan.campusfrance.org/apply-to-long-stay-french-student-visa' },
      { name: 'PhD / researcher visa', text: 'For funded PhDs and researchers (Talent Passport).', url: 'https://www.pakistan.campusfrance.org/apply-to-phd-research-visa' },
      { name: 'Short-stay student visa', text: 'For programmes under 3 months.', url: 'https://www.pakistan.campusfrance.org/apply-to-short-stay-french-student-visa' },
      { name: 'Arriving in France', text: 'Enrolment, visa validation, bank account.', url: 'https://www.pakistan.campusfrance.org/arriving-in-france' },
      { name: 'Frequently asked questions', text: 'Fees, refunds, choices, visa refusals.', url: 'https://www.pakistan.campusfrance.org/frequently-asked-questions-students' },
      { name: 'Campus France digital assistant', text: 'Ask the official chatbot your questions.', url: 'https://campus-france-digital-assistant-dee17c.zapier.app' },
      { name: 'Tips from scholarship holders', text: 'Stories from Pakistani scholarship winners.', url: 'https://www.pakistan.campusfrance.org/tips-advice-from-scholarship-holders' },
      { name: 'French university scholarships', text: 'Scholarships offered by individual universities.', url: 'https://www.pakistan.campusfrance.org/french-university-scholarships' },
      { name: 'Campus France Pakistan on Instagram', text: 'Announcements and reels.', url: 'https://instagram.com/campusfrancepakistan' },
      { name: 'Campus France Pakistan on Facebook', text: 'Events and webinars.', url: 'https://www.facebook.com/CampusFrancePakistan/' },
      { name: 'Pakistani Students in France (PSF) — Facebook group', text: 'Ask questions and meet students already in France.', url: 'https://www.facebook.com/groups/1608483306030594/' },
      { name: 'France Alumni Pakistan', text: 'Network of Pakistani graduates from France.', url: 'https://www.francealumni.fr/en/position/pakistan/' }
    ]
  },
  {
    id: 'visa',
    title: 'Visa & official procedures',
    items: [
      { name: 'AEG — French visa appointments (Islamabad)', text: 'Book your student visa appointment.', url: 'https://frenchvisa.aeg.com.pk/' },
      { name: 'AEG — French visa information', text: 'Current documents list.', url: 'https://aeg.com.pk/french-visa/' },
      { name: 'France-Visas', text: 'Official visa application form.', url: 'https://france-visas.gouv.fr/en/web/france-visas/demande-de-visa' },
      { name: 'French Embassy in Pakistan — visas', text: 'Visa information from the Embassy.', url: 'https://pk.ambafrance.org/Applying-for-a-French-visa-in-Pakistan' },
      { name: 'ANEF — validate your VLS-TS', text: 'Validate your visa online within 3 months of arrival.', url: 'https://administration-etrangers-en-france.interieur.gouv.fr/' }
    ]
  },
  {
    id: 'recognition',
    title: 'Recognition & quality checks',
    intro: 'Check these before you pay any fees.',
    items: [
      { name: 'WHED — World Higher Education Database', text: 'HEC Pakistan only recognises degrees from institutions listed here.', url: 'https://whed.net/results_institutions.php' },
      { name: 'HEC Pakistan — foreign degree recognition', text: 'Get your French degree recognised back home.', url: 'https://www.hec.gov.pk/english/services/students/DES/Pages/Procedure/Foreign-HEIs.aspx' },
      { name: 'ENIC-NARIC', text: 'Optional certificate comparing your degree with French levels.', url: 'https://www.enic-naric.net/' },
      { name: 'CTI', text: 'Commission that accredits engineering degrees.', url: 'https://www.cti-commission.fr/' },
      { name: 'CEFDG', text: 'Commission that accredits business school degrees.', url: 'https://www.cefdg.fr/' },
      { name: 'Conférence des Grandes Écoles (CGE)', text: 'Member schools and labelled MSc / Mastère Spécialisé degrees.', url: 'https://www.cge.asso.fr/membres/ecoles/' },
      { name: 'Campus France Forum members (PDF)', text: 'The ~370 institutions committed to welcoming international students.', url: 'https://ressources.campusfrance.org/agence_cf/forum/fr/forum_liste_fr.pdf' }
    ]
  },
  {
    id: 'rankings',
    title: 'Rankings & reviews',
    items: [
      { name: 'L\'Etudiant — engineering school ranking', text: 'The most-used French ranking.', url: 'https://www.letudiant.fr/classements/classement-des-ecoles-d-ingenieurs.html' },
      { name: 'L\'Etudiant — business school ranking', text: 'Grandes écoles de commerce.', url: 'https://www.letudiant.fr/classements/classement-des-grandes-ecoles-de-commerce.html' },
      { name: 'L\'Usine Nouvelle — engineering schools', text: 'Industry-focused ranking of engineering schools.', url: 'https://www.usinenouvelle.com/comparatif-des-ecoles-d-ingenieurs/' },
      { name: 'Studyrama', text: 'Student fairs and niche programmes.', url: 'https://www.studyrama.com/' },
      { name: 'Diplomeo', text: 'Compare schools and read student reviews.', url: 'https://diplomeo.com/' },
      { name: 'Thotis Media', text: 'Guidance on Bachelor\'s and selective universities.', url: 'https://thotismedia.com/' }
    ]
  },
  {
    id: 'networks',
    title: 'School networks — apply once, reach many',
    items: [
      { name: 'Network n+i', text: 'One application to 50+ engineering schools, with French learning built in.', url: 'https://www.nplusi.com/' },
      { name: 'INSA Group', text: 'Applied-science engineering schools (Lyon, Toulouse, Rennes, Rouen, Strasbourg…).', url: 'https://www.groupe-insa.fr/en/education/courses-taught-english' },
      { name: 'IMT Atlantique MSc programmes', text: 'Institut Mines-Télécom — digital, energy, industry.', url: 'https://www.imt-atlantique.fr/en/study/msc' },
      { name: 'FNEGE', text: 'Management and business education in France.', url: 'https://www.fnege.org/' },
      { name: 'FSMP — map of maths Master\'s in Paris', text: 'Paris Graduate School of Mathematical Sciences.', url: 'https://applications.sciencesmaths-paris.fr/fr/carte-des-masters-1035.htm' }
    ]
  },
  {
    id: 'research',
    title: 'PhD & research',
    items: [
      { name: 'Campus France — doctoral schools', text: 'Directory of French doctoral schools and PhD offers.', url: 'https://doctorat.campusfrance.org/en' },
      { name: 'ABG (Association Bernard Gregory)', text: 'Jobs and PhD offers in research.', url: 'https://www.abg.asso.fr/en/' },
      { name: 'EURAXESS France', text: 'Funded research positions in France.', url: 'https://www.euraxess.fr/' },
      { name: 'Research in France: an overview', text: 'From Campus France Pakistan.', url: 'https://www.pakistan.campusfrance.org/research-in-france-an-overview' }
    ]
  },
  {
    id: 'life',
    title: 'Student life, housing & money',
    items: [
      { name: 'etudiant.gouv.fr', text: 'Official student life portal (CROUS, CVEC, aid).', url: 'https://www.etudiant.gouv.fr/en' },
      { name: 'Welcome to France guide', text: 'Official guide for new international students.', url: 'https://www.etudiant.gouv.fr/en/welcome-france-2063' },
      { name: 'MesServices.etudiant.gouv.fr', text: 'Apply for CROUS housing and student services.', url: 'https://www.messervices.etudiant.gouv.fr/' },
      { name: 'CROUS housing', text: 'Search and book student residences.', url: 'https://trouverunlogement.lescrous.fr/' },
      { name: 'CROUS Lille — housing for international students', text: 'A good example of what your local CROUS offers.', url: 'https://www.crous-lille.fr/etudes-internationales/se-loger-en-france/' },
      { name: 'Visale', text: 'Free state guarantor accepted by landlords.', url: 'https://www.visale.fr/' },
      { name: 'Campus France — student housing', text: 'Housing options and tips.', url: 'https://www.campusfrance.org/en/student-housing-france' },
      { name: 'Ameli — health insurance for international students', text: 'Register for free French health insurance.', url: 'https://etudiant-etranger.ameli.fr/' },
      { name: 'CVEC', text: 'Pay the yearly student life contribution.', url: 'https://cvec.etudiant.gouv.fr/' },
      { name: 'Tuition fees FAQ (Ministry)', text: 'Official rules on fees for non-EU students.', url: 'https://www.enseignementsup-recherche.gouv.fr/fr/faq-droits-d-inscription-differencies-pour-les-etudiants-extra-communautaires-103043' }
    ]
  },
  {
    id: 'french',
    title: 'Learn French',
    items: [
      { name: 'Alliance Française Islamabad', text: 'French classes and DELF/TCF exams.', url: 'https://afislamabad.org/' },
      { name: 'Alliance Française Lahore', text: 'French classes and exams.', url: 'https://aflahore.org/' },
      { name: 'Alliance Française Karachi', text: 'French classes and exams.', url: 'https://www.afkarachi.com/' },
      { name: 'TV5 Monde — Apprendre', text: 'Free interactive French lessons.', url: 'http://apprendre.tv5monde.com/' },
      { name: 'RFI Savoirs', text: 'Learn French with radio and news.', url: 'https://savoirs.rfi.fr/fr/apprendre-enseigner' }
    ]
  },
  {
    id: 'careers',
    title: 'Internships & careers',
    items: [
      { name: 'KaamDhoondo — European internships', text: 'Find internships in Europe matching your skills (software, IoT security, smart mobility). Built by SpotScholars.', url: 'https://kamdhondho.netlify.app/', highlight: true },
      { name: 'ABG — research careers', text: 'Industry and academic research jobs for Master\'s and PhD graduates.', url: 'https://www.abg.asso.fr/en/' }
    ]
  },
  {
    id: 'europe',
    title: 'Beyond France',
    intro: 'Not in France, but worth knowing — SpotScholars will cover more of Europe soon.',
    items: [
      { name: 'EUMaster4HPC', text: 'European joint Master\'s in High Performance Computing.', url: 'https://eumaster4hpc.eu/application/' },
      { name: 'Vrije Universiteit Brussel (Belgium)', text: 'International admissions.', url: 'https://www.vub.be/en/studying-vub/everyone-is-welcome-vub/international-collaboration' },
      { name: 'UAS Technikum Wien (Austria)', text: 'Applications portal.', url: 'https://cis.technikum-wien.at/addons/bewerbung/cis/registration.php?method=registration#label_zgv-nation' },
      { name: 'Chernivtsi National University (Ukraine)', text: 'Master\'s admissions.', url: 'https://www.chnu.edu.ua/abituriientu/vstup-do-mahistratury/podannia-zaiavy/' },
      { name: 'Scholars4Dev — France scholarships', text: 'Scholarship listings for students from developing countries.', url: 'https://www.scholars4dev.com/category/country/europe-scholarships/france-scholarships/' }
    ]
  }
];

const ORDER = ['search', 'pakistan', 'portals', 'visa', 'recognition', 'rankings', 'networks', 'research', 'labs', 'life', 'french', 'careers', 'skills', 'europe'];

function mergeGroups(base, extra) {
  const out = base.map(g => ({ ...g, items: [...g.items] }));
  for (const e of extra) {
    const target = out.find(g => g.id === e.id);
    if (target) {
      const seen = new Set(target.items.map(i => i.url));
      target.items.push(...e.items.filter(i => !seen.has(i.url)));
    } else {
      out.push({ id: e.id, title: e.title, intro: e.intro, items: e.items });
    }
  }
  return out.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
}

export const RESOURCE_GROUPS = mergeGroups(BASE_GROUPS, EXTRA);

// Video guides. `id` is the YouTube video id.
export const FEATURED_VIDEO = {
  id: 'H41F_2iFMO8',
  title: 'Complete Guide to Study in France 2026: Scholarships, Visa & Universities',
  text: 'The full 1.5-hour SpotScholars session: public universities and fees, English-taught programmes, Ampère, Eiffel and SMARTS-UP scholarships, Études en France, applying to many universities at once, housing and student life.'
};

export const VIDEOS = [
  { id: 'IQGReJvrXqg', title: 'Applying through Études en France — walkthrough', topic: 'Études en France' },
  { id: 'itpgyhGG65o', title: 'Step-by-step Campus France application guide (BSc, MSc)', topic: 'Études en France' },
  { id: 'Spp3Z_6qvh0', title: 'Campus France 2025/26: how to register and apply', topic: 'Études en France' },
  { id: '-cABqJKEVAI', title: 'Études en France explained', topic: 'Études en France' },
  { id: '0vFlImD427o', title: 'Campus France interview preparation', topic: 'Interview' },
  { id: 'zoI_vNCc3k4', title: 'Campus France interview — questions & tips', topic: 'Interview' },
  { id: '-jZDSuHS7Fg', title: 'How to find & apply to the best public universities (Mon Master)', topic: 'Universities' },
  { id: 'aB109Sll600', title: 'Target public universities guide', topic: 'Universities' },
  { id: 'cujC-rzcyFo', title: 'Public universities in France — guide', topic: 'Universities' },
  { id: 'PN8oeyHW_u4', title: 'Choosing public universities', topic: 'Universities' },
  { id: 'NavQKz5nTw8', title: 'Public university applications', topic: 'Universities' },
  { id: 'aG5itY_fIks', title: 'Eiffel Excellence Scholarship guide', topic: 'Scholarships' },
  { id: 'mmcFxT8kgY4', title: 'Émile Boutmy Scholarship (Sciences Po) guide', topic: 'Scholarships' },
  { id: 'Ges3AEipaXY', title: 'How to apply for the SMARTS-UP scholarship', topic: 'Scholarships' },
  { id: 'UvsgRfmQbyg', title: 'Complete guide to studying in France — GB United session 4', topic: 'Full sessions' },
  { id: '64cE-gQ_qMQ', title: 'Network n+i explained (engineering schools)', topic: 'Universities' },
  { id: 'CuJO6trXbMM', title: 'Campus France application process — step by step (Desi in France)', topic: 'Études en France' },
  { id: 'eY-Q1ya4iPs', title: 'How to book accommodation through CROUS — step by step', topic: 'Housing' },
  { id: 'PMZaLUDwy5A', title: 'How to find accommodation in France', topic: 'Housing' },
  { id: 'vKkFRafqdAI', title: 'French apartment hunting — booking hacks for students', topic: 'Housing' },
  { id: '3gzOTJ-CtXM', title: 'Find affordable student accommodation in France', topic: 'Housing' }
];

// YouTube channels that walk through applications and scholarships worldwide.
export const VIDEO_CHANNELS = [
  { name: 'Baltee Waseem (SpotScholars)', handle: '@balteeWaseem', text: 'Our own sessions on studying in France: admissions, scholarships, visa.', url: 'https://www.youtube.com/@balteeWaseem', ours: true },
  { name: 'Desi in France', handle: '@desiinfrancevlogs', text: 'Life in France and the Campus France process from a South Asian student.', url: 'https://www.youtube.com/@desiinfrancevlogs' },
  { name: 'Educational Hub', handle: '@Educationalhub1045', text: 'Screen-recorded scholarship applications (Ampère, SMARTS-UP and more).', url: 'https://www.youtube.com/@Educationalhub1045' },
  { name: 'Mein Muhammad Perwaiz', handle: '@meinmuhammadperwaiz', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@meinmuhammadperwaiz/videos' },
  { name: 'Clever Consultant', handle: '@CleverConsultant', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@CleverConsultant/videos' },
  { name: 'Study Abroad', handle: '@study__abroad', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@study__abroad' },
  { name: 'Study Opportunities', handle: '@StudyOpportunities', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@StudyOpportunities/videos' },
  { name: 'Mr.T Scholarships Channel', handle: '@Mr.TScholarshipsChannel', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@Mr.TScholarshipsChannel/videos' },
  { name: 'Universities Page Visa Consultant', handle: '@universitiespagevisaconsultant', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@universitiespagevisaconsultant' },
  { name: 'Scholarships Root', handle: '@scholarships_root', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@scholarships_root/videos' },
  { name: 'Naeem Iqbal', handle: '@NaeemIqbal', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@NaeemIqbal/videos' },
  { name: 'TEN Universities & Scholarships', handle: '@tenunischo', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@tenunischo/videos' },
  { name: 'Scholarships Arena', handle: '@ScholarshipsArena-pk', text: 'University applications and scholarships around the world.', url: 'https://www.youtube.com/@ScholarshipsArena-pk/videos' }
];
