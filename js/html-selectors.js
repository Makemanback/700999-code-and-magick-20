'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupForm = document.querySelector('.setup-wizard-form');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = setupForm.querySelector('.setup-user-name');
  var setupSubmit = setupForm.querySelector('.setup-submit');
  var setupWizardCoat = setupForm.querySelector('.wizard-coat');
  var setupWizardEyes = setupForm.querySelector('.wizard-eyes');
  var setupFireball = setupForm.querySelector('.setup-fireball-wrap');
  var dialogHandle = userDialog.querySelector('.upload');

  window.htmlSelectors = {
    userDialog: userDialog,
    setupForm: setupForm,
    setupOpen: setupOpen,
    setupClose: setupClose,
    setupUserName: setupUserName,
    setupSubmit: setupSubmit,
    setupWizardCoat: setupWizardCoat,
    setupWizardEyes: setupWizardEyes,
    setupFireball: setupFireball,
    dialogHandle: dialogHandle,
  };
})();
