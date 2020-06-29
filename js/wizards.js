'use strict';

window.wizards = (function () {
  var wizards = [];
  var makeWizards = function () {
    for (var i = 0; i < window.constants.WIZARDS_QUANTITY; i++) {
      wizards.push({
        name: window.randomFunctions.getRandomArrayIndex(window.constants.WIZARD_NAMES) + ' ' + window.randomFunctions.getRandomArrayIndex(window.constants.WIZARD_SURNAMES),
        coatColor: window.randomFunctions.getRandomArrayIndex(window.constants.COAT_COLORS),
        eyesColor: window.randomFunctions.getRandomArrayIndex(window.constants.EYE_COLORS)
      });
    }
  };
  return {
    wizards: wizards,
    makeWizards: makeWizards
  };
})();
