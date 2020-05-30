'use strict';

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
  ctx.fillStyle = '#000';
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
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH_TOTAL * i), CLOUD_HEIGHT - GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH_TOTAL * i), BAR_HEIGHT_TOTAL, BAR_WIDTH, -(BAR_MAX_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH_TOTAL * i), -((BAR_MAX_HEIGHT * times[i]) / maxTime) + BAR_HEIGHT_TOTAL - GAP);

  }
};
