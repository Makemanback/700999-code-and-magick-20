'use strict';

window.eventLisneters = (function () {

  window.htmlSelectors.setupOpen.addEventListener('click', function () {
    window.popup.openPopup();
  });

  window.htmlSelectors.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      window.popup.openPopup();
    }
  });

  window.htmlSelectors.setupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.popup.closePopup();
  });

  window.htmlSelectors.setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      window.popup.closePopup();
    }
  });

  window.htmlSelectors.setupSubmit.addEventListener('click', window.popup.onSubmitForm);

  window.htmlSelectors.setupWizardCoat.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.randomFunctions.getRandomColor(window.htmlSelectors.setupWizardCoat, window.constants.WIZARD_COATS);
  });

  window.htmlSelectors.setupWizardEyes.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.randomFunctions.getRandomColor(window.htmlSelectors.setupWizardEyes, window.constants.WIZARD_EYES);
  });

  window.htmlSelectors.setupFireball.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.randomFunctions.getRandomBgColor(window.htmlSelectors.setupFireball, window.constants.FIREBALLS);
  });
})();
