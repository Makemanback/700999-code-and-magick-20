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

// диалоговое окно
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// шаблон на странице
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content;

// случайное значение
var getRandomArrayIndex = function (array) {
  for (var i = 0; i < array.length; i++) {
    var randomValue = Math.floor(Math.random() * array.length);
  }
  return array[randomValue];
};

// случайное имя или фамилия
var getRandomWizardName = function (names) {
  return getRandomArrayIndex(names);
};

// случайный плащ
var getRandomWizardCoat = function (coats) {
  return getRandomArrayIndex(coats);
};

// случайный цвет глаз
var getRandomWizardEyes = function (eyes) {
  return getRandomArrayIndex(eyes);
};

// массив волшебников
var wizards = [
  {
    name: getRandomWizardName(WIZARD_NAMES) + ' ' + getRandomWizardName(WIZARD_SURNAMES),
    coatColor: getRandomWizardCoat(COAT_COLORS),
    eyesColor: getRandomWizardEyes(EYE_COLORS)
  },
  {
    name: getRandomWizardName(WIZARD_NAMES) + ' ' + getRandomWizardName(WIZARD_SURNAMES),
    coatColor: getRandomWizardCoat(COAT_COLORS),
    eyesColor: getRandomWizardEyes(EYE_COLORS)
  },
  {
    name: getRandomWizardName(WIZARD_NAMES) + ' ' + getRandomWizardName(WIZARD_SURNAMES),
    coatColor: getRandomWizardCoat(COAT_COLORS),
    eyesColor: getRandomWizardEyes(EYE_COLORS)
  },
  {
    name: getRandomWizardName(WIZARD_NAMES) + ' ' + getRandomWizardName(WIZARD_SURNAMES),
    coatColor: getRandomWizardCoat(COAT_COLORS),
    eyesColor: getRandomWizardEyes(EYE_COLORS)
  }
];

// функция создания волшебника
var createRandomWizard = function () {
  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    similarListElement.appendChild(wizardElement);
  }
};

createRandomWizard();
document.querySelector('.setup-similar').classList.remove('hidden');
