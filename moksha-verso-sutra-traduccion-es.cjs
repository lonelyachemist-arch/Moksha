const translator = require("open-google-translator");

translator.supportedLanguages();

translator
  .TranslateLanguageData({
    listOfWordsToTranslate: ["Reference: Digha Nikaya 1:975","Text: Yes, respectable sir.", "Translation: sujato"
],

    fromLanguage: "en",
    toLanguage: "es",
  })
  .then((data) => {
    console.log(data);
  });