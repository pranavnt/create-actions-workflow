export function isLang(lang) {
  return function (answers) {
    return answers[lang];
  };
}
