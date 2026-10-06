
import { WideHoly } from "wideholy";
import translator from "open-google-translator";

const api = new WideHoly();
const verse = await api.randomVerse("gita");

console.log('=== GITA VERSE ===');
console.log('Religion:', verse.religion);
console.log('Reference:', verse.reference);
console.log('Text:', verse.text);
console.log('Sanskrit:', verse.sanskrit || 'N/A');
console.log('Translation:', verse.translation || 'N/A');

console.log('\n=== TRADUÇÃO (pt) ===');

const data = await translator.TranslateLanguageData({
  listOfWordsToTranslate: [
    `Reference: ${verse.reference}`,
    `Text: ${verse.text}`,
    `Translation: ${verse.translation || 'N/A'}`
  ],
  fromLanguage: "en",
  toLanguage: "pt",
});

console.log(data);