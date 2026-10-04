import { WideHoly } from "wideholy";

const api = new WideHoly();

console.log('=== BUDDHIST VERSE ===');

const verse = await api.randomVerse("sutra");

console.log('Religion:', verse.religion);
console.log('Reference:', verse.reference);
console.log('Text:', verse.text);
console.log('Translation:', verse.translation || 'N/A');
console.log('Sanskrit:', verse.sanskrit || 'N/A');
