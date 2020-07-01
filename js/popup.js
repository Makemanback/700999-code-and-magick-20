'use strict';

(function () {
  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && evt.target !== window.htmlSelectors.setupUserName) {
      evt.preventDefault();
      closePopup();

      window.htmlSelectors.userDialog.style.left = window.constants.USER_DIALOG_X + 'px';
      window.htmlSelectors.userDialog.style.top = window.constants.USER_DIALOG_Y + 'px';
    }
  };

  var openPopup = function () {
    window.htmlSelectors.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.htmlSelectors.userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('click', onSubmitForm);
  };

  var onSubmitForm = function () {
    window.htmlSelectors.setupForm.submit();
  };

  window.popup = {
    onPopupEscPress: onPopupEscPress,
    openPopup: openPopup,
    closePopup: closePopup,
    onSubmitForm: onSubmitForm
  };
})();
