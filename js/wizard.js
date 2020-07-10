'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var FIREBALLS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizard = {
    onEyesChange: function (color) {
      color = getRandomElement(EYES_COLORS);
      wizardEyesElement.style.fill = color;
    },
    onCoatChange: function (color) {
      color = getRandomElement(COAT_COLORS);
      wizardCoatElement.style.fill = color;
    }
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var setupFireball = document.querySelector('.setup-fireball-wrap');
  setupFireball.addEventListener('click', function (evt) {
    evt.preventDefault();
    setupFireball.style.backgroundColor = getRandomElement(FIREBALLS);
  });

  var wizardCoatElement = document.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = document.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.renderedWizard = wizard;
})();
