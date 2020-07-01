'use strict';

(function () {
  var getRandomArrayIndex = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomColor = function (elem, arr) {
    elem.style.fill = window.randomFunctions.getRandomArrayIndex(arr);
  };


  var getRandomBgColor = function (elem, arr) {
    elem.style.backgroundColor = window.randomFunctions.getRandomArrayIndex(arr);
  };

  window.randomFunctions = {
    getRandomArrayIndex: getRandomArrayIndex,
    getRandomColor: getRandomColor,
    getRandomBgColor: getRandomBgColor
  };
})();
