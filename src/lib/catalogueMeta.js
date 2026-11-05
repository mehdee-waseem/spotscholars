// Labels for the Campus France "Taught in English" catalogue (taughtie.campusfrance.org).
// Field ids in the data are stored divided by 10,000 (Campus France uses 10000, 20000, …).

export const FIELDS = {
  1: 'Agronomy & agri-food',
  2: 'Architecture & urban planning',
  3: 'Arts, culture, design & fashion',
  4: 'Biology',
  5: 'Chemistry',
  6: 'Communication & journalism',
  7: 'Law',
  8: 'Environment & ecology',
  9: 'Computer science',
  10: 'Literature & languages',
  11: 'Management, business & finance',
  12: 'Mathematics',
  13: 'Physical sciences',
  14: 'Health & medicine',
  15: 'Education',
  16: 'Engineering',
  17: 'Economics & politics',
  18: 'Humanities & social sciences',
  19: 'Sports',
  20: 'Tourism & hospitality',
  21: 'Transport & logistics',
  22: 'Earth & space sciences'
};

// Broad groups shown as tiles (same grouping as Campus France).
export const FIELD_GROUPS = [
  { id: 'business', label: 'Business & management', fields: [11, 21], emoji: '💼' },
  { id: 'social', label: 'Social sciences, politics & economics', fields: [17, 18], emoji: '🌍' },
  { id: 'law', label: 'Law', fields: [7], emoji: '⚖️' },
  { id: 'humanities', label: 'Humanities, languages & education', fields: [6, 10, 15, 19], emoji: '📚' },
  { id: 'arts', label: 'Arts, design, fashion & architecture', fields: [2, 3], emoji: '🎨' },
  { id: 'health', label: 'Health, biology & life sciences', fields: [4, 14], emoji: '🩺' },
  { id: 'science', label: 'Sciences, environment & maths', fields: [5, 8, 12, 13, 22], emoji: '🔬' },
  { id: 'engineering', label: 'Engineering & computer science', fields: [9, 16], emoji: '⚙️' },
  { id: 'agri', label: 'Agriculture & food', fields: [1], emoji: '🌾' },
  { id: 'tourism', label: 'Tourism, hospitality & culinary', fields: [20], emoji: '🍽️' }
];

export const LEVELS = {
  10: 'Licence L1',
  11: 'Licence L2',
  12: 'Bachelor (L3)',
  25: 'Master 1 / Bachelor',
  26: 'Master 2',
  21: 'Master of Science (MSc)',
  22: 'Specialised Master®',
  23: 'MBA',
  40: 'Short / professional course',
  41: 'Summer course'
};

export const LEVEL_GROUPS = [
  { id: 'bachelor', label: 'Bachelor', levels: [10, 11, 12] },
  { id: 'master', label: 'Master', levels: [25, 26] },
  { id: 'msc', label: 'MSc / Specialised Master / MBA', levels: [21, 22, 23] },
  { id: 'short', label: 'Short & summer courses', levels: [40, 41] }
];

export const REGIONS = {
  1: 'Grand Est',
  2: 'Nouvelle-Aquitaine',
  3: 'Auvergne-Rhône-Alpes',
  4: 'Bourgogne-Franche-Comté',
  5: 'Brittany',
  6: 'Centre-Val de Loire',
  7: 'Corsica',
  8: 'Île-de-France (Paris)',
  9: 'Occitanie',
  10: 'Hauts-de-France',
  11: 'Normandy',
  12: 'Pays de la Loire',
  13: 'Provence-Alpes-Côte d\'Azur',
  14: 'Overseas France'
};

export const campusFranceUrl = id => `https://taughtie.campusfrance.org/tiesearch/#/program/${id}`;
