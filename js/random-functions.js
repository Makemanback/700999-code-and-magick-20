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

  var getRandomArray = function (array) {
    return array.slice(Math.round(Math.random() * array.length));
  };

  window.randomFunctions = {
    getRandomArrayIndex: getRandomArrayIndex,
    getRandomColor: getRandomColor,
    getRandomBgColor: getRandomBgColor,
    getRandomArray: getRandomArray
  };
})();
