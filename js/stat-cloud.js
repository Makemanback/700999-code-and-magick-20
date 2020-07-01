'use strict';

(function () {
  // рисуем облака
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.statConstants.CLOUD_WIDTH, window.statConstants.CLOUD_HEIGHT);
  };

  // рисуем текст победы
  var renderText = function (ctx) {

    var textOffsetX = window.statConstants.CLOUD_X + window.statConstants.FONT_GAP + window.statConstants.GAP;
    var textOffsetY = window.statConstants.CLOUD_Y + window.statConstants.GAP + window.statConstants.FONT_GAP;

    ctx.font = '16px PT Mono';
    ctx.fillStyle = window.statConstants.BLACK_COLOR;
    ctx.fillText('Ура вы победили!', textOffsetX, textOffsetY);
    ctx.fillText('Список результатов:', textOffsetX, textOffsetY + window.statConstants.TEXT_HEIGHT);
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
    renderCloud(ctx, window.statConstants.CLOUD_X + window.statConstants.GAP, window.statConstants.CLOUD_Y + window.statConstants.GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, window.statConstants.CLOUD_X, window.statConstants.CLOUD_Y, '#fff');

    renderText(ctx);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var barTotalPositionX = window.statConstants.CLOUD_X + window.statConstants.BAR_GAP + (window.statConstants.BAR_WIDTH_TOTAL * i);
      var barTotalSizeY = window.statConstants.BAR_MAX_HEIGHT * times[i] / maxTime;

      ctx.fillStyle = window.statConstants.BLACK_COLOR;
      ctx.fillText(players[i], barTotalPositionX, window.statConstants.CLOUD_HEIGHT - window.statConstants.GAP);

      ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';

      ctx.fillRect(barTotalPositionX, window.statConstants.BAR_HEIGHT_TOTAL, window.statConstants.BAR_WIDTH, -barTotalSizeY);
      ctx.fillStyle = window.statConstants.BLACK_COLOR;
      ctx.fillText(Math.floor(times[i]), barTotalPositionX, -barTotalSizeY + window.statConstants.BAR_HEIGHT_TOTAL - window.statConstants.GAP);
    }
  };
})();
