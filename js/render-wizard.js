'use strict';

window.renderWizard = (function () {
  var renderWizard = function (wizard) {
    var wizardElement = window.dialog.similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

    return wizardElement;
  };

  var createWizards = function () {
    for (var j = 0; j < window.wizards.wizards.length; j++) {
      fragment.appendChild(window.renderWizard.renderWizard(window.wizards.wizards[j]));
    }
  };

  var fragment = document.createDocumentFragment();

  window.dialog.similarListElement.appendChild(fragment);
  return {
    renderWizard: renderWizard,
    createWizards: createWizards,
    fragment: fragment
  };
})();
