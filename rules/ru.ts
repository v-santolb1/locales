export default function (choice, choicesLength, orgRule) {
  if (choice === 0 || choice === 1) {
    return choice;
  }

  if (choicesLength >= 3) {
    const teen = choice > 10 && choice < 20
    const endsWithOne = choice % 10 === 1
    if (!teen && endsWithOne) {
      return 1
    }
    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
      return 2
    }

    return choicesLength - 1;
  }
}

// https://kazupon.github.io/vue-i18n/guide/pluralization.html#custom-pluralization