import { WideHoly } from "wideholy";

const api = new WideHoly();

// Random verse from the Bhagavad Gita
const verse = await api.randomVerse("gita");

console.log('=== GITA VERSE ===');
console.log('Religion:', verse.religion);
console.log('Reference:', verse.reference);
console.log('Text:', verse.text);
console.log('Sanskrit:', verse.sanskrit || 'N/A');
console.log('Translation:', verse.translation || 'N/A');
