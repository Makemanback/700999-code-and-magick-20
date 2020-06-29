'use strict';

window.htmlSelectors = (function () {
  var setupForm = document.querySelector('.setup-wizard-form');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = setupForm.querySelector('.setup-user-name');
  var setupSubmit = setupForm.querySelector('.setup-submit');
  var setupWizardCoat = setupForm.querySelector('.wizard-coat');
  var setupWizardEyes = setupForm.querySelector('.wizard-eyes');
  var setupFireball = setupForm.querySelector('.setup-fireball-wrap');

  return {
    setupForm: setupForm,
    setupOpen: setupOpen,
    setupClose: setupClose,
    setupUserName: setupUserName,
    setupSubmit: setupSubmit,
    setupWizardCoat: setupWizardCoat,
    setupWizardEyes: setupWizardEyes,
    setupFireball: setupFireball
  };
})();
