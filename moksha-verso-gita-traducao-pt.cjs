const translator = require("open-google-translator");

translator.supportedLanguages();

translator
  .TranslateLanguageData({
    listOfWordsToTranslate: ["Reference: BG 8.12","Text:  Samyamya, having controlled; sarva-dvarani, all the passages, the doors of perception; niruddhya, having confined; the manah, mind; hrdi, in the heart-not allowing it to spread out; and after that, with the help of the mind controlled therein, rising up through the nerve running upward from the heart, adhaya, having fixed; atmanah, his own; pranam, vital force; murdhni, in the lead; (and then) asthitah, continuing in; yogadharanam, the firmness in yoga-in order to make it steady.", "Translation: shankaracharya"
],

    fromLanguage: "en",
    toLanguage: "pt",
  })
  .then((data) => {
    console.log(data);
  });