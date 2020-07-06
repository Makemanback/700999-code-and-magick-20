'use strict';

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  // var URL = 'js/server.json';
  var StatusCode = {
    OK: 200,
    notSuppot: 501
  };
  var TIMEOUT_IN_MS = 10000;

  window.load = function (URL, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL);
    xhr.send();
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(window.dialog.renderWizard(wizards[i]));
    }
    window.htmlSelectors.similarListElement.appendChild(fragment);

    window.htmlSelectors.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var successMessage = function (message) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: green;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load('https://javascript.pages.academy/code-and-magick/data', successHandler, errorHandler);

  var closeDialog = function () {
    window.htmlSelectors.userDialog.classList.add('hidden');
  };

  var form = window.htmlSelectors.userDialog.querySelector('.setup-wizard-form');
  var submitHandler = function (evt) {
    window.save('https://javascript.pages.academy/code-and-magick', new FormData(form), closeDialog, errorHandler, successMessage);
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler);


  window.save = function (sendURL, data, onLoad, onError, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
        onSuccess('Данные отправлены успешно');
      } else if (xhr.status === StatusCode.notSuppot) {
        onError('Метод передачи данных не поддерживается');
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('POST', sendURL);
    xhr.send(data);
  };
})();
