'use strict';

window.popup = (function () {
  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && evt.target !== window.htmlSelectors.setupUserName) {
      evt.preventDefault();
      closePopup();
      // console.log(window.dialog.userDialog.style);

      window.dialog.userDialog.style.left = window.dialog.userDialogX + 'px';
      window.dialog.userDialog.style.top = window.dialog.userDialogY + 'px';
    }
  };

  var openPopup = function () {
    window.dialog.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.dialog.userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('click', onSubmitForm);
    // window.dialog.userDialog.style.top = startCoords.x;
    // window.dialog.userDialog.style.left = startCoords.y;
  };

  var onSubmitForm = function () {
    window.htmlSelectors.setupForm.submit();
  };

  return {
    onPopupEscPress: onPopupEscPress,
    openPopup: openPopup,
    closePopup: closePopup,
    onSubmitForm: onSubmitForm
  };
})();
