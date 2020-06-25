'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['Да Марья', 'Вирон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;
var FIREBALLS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var WIZARD_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var WIZARD_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

// диалоговое окно
var userDialog = document.querySelector('.setup');

// шаблон на странице
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// случайное значение
var getRandomArrayIndex = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

// массив волшебников
var wizards = [];
for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  wizards.push({
    name: getRandomArrayIndex(WIZARD_NAMES) + ' ' + getRandomArrayIndex(WIZARD_SURNAMES),
    coatColor: getRandomArrayIndex(COAT_COLORS),
    eyesColor: getRandomArrayIndex(EYE_COLORS)
  });
}

// создание шаблона волшебника
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

// шаблон
var fragment = document.createDocumentFragment();

// записываем всех волшебников в цикл
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);

// обработка событий

var setupForm = document.querySelector('.setup-wizard-form');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = setupForm.querySelector('.setup-user-name');
var setupSubmit = setupForm.querySelector('.setup-submit');
// детали волшебника
var setupWizardCoat = setupForm.querySelector('.wizard-coat');
var setupWizardEyes = setupForm.querySelector('.wizard-eyes');
var setupFireball = setupForm.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && evt.target !== setupUserName) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.removeEventListener('click', onSubmitForm);
};

var onSubmitForm = function () {
  setupForm.submit();
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

setupSubmit.addEventListener('click', onSubmitForm);

// случайный цвет заливки
var getRandomColor = function (elem, arr) {
  elem.style.fill = getRandomArrayIndex(arr);
};

// случайный цвет фаербола
var getRandomBgColor = function (elem, arr) {
  elem.style.backgroundColor = getRandomArrayIndex(arr);
};

// обработчики на клик
setupWizardCoat.addEventListener('click', function (evt) {
  evt.preventDefault();
  getRandomColor(setupWizardCoat, WIZARD_COATS);
});

setupWizardEyes.addEventListener('click', function (evt) {
  evt.preventDefault();
  getRandomColor(setupWizardEyes, WIZARD_EYES);
});

setupFireball.addEventListener('click', function (evt) {
  evt.preventDefault();
  getRandomBgColor(setupFireball, FIREBALLS);
});
