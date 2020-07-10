'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 15;
  var BAR_WIDTH_TOTAL = 100;
  var BAR_GAP = 50;
  var BAR_MAX_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var TEXT_HEIGHT = 25;
  var BAR_HEIGHT_TOTAL = 240;
  var BLACK_COLOR = '#000';

  // рисуем облака
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  // рисуем текст победы
  var renderText = function (ctx) {

    var textOffsetX = CLOUD_X + FONT_GAP + GAP;
    var textOffsetY = CLOUD_Y + GAP + FONT_GAP;

    ctx.font = '16px PT Mono';
    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText('Ура вы победили!', textOffsetX, textOffsetY);
    ctx.fillText('Список результатов:', textOffsetX, textOffsetY + TEXT_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    renderText(ctx);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var barTotalPositionX = CLOUD_X + BAR_GAP + (BAR_WIDTH_TOTAL * i);
      var barTotalSizeY = BAR_MAX_HEIGHT * times[i] / maxTime;

      ctx.fillStyle = BLACK_COLOR;
      ctx.fillText(players[i], barTotalPositionX, CLOUD_HEIGHT - GAP);

      ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';

      ctx.fillRect(barTotalPositionX, BAR_HEIGHT_TOTAL, BAR_WIDTH, -barTotalSizeY);
      ctx.fillStyle = BLACK_COLOR;
      ctx.fillText(Math.floor(times[i]), barTotalPositionX, -barTotalSizeY + BAR_HEIGHT_TOTAL - GAP);
    }
  };
})();
