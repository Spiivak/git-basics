'use strict'

function onBallClick(elBall) {
    var currentWidth = parseInt(elBall.style.width, 10) || 0;
    var currentHeight = parseInt(elBall.style.height, 10) || 0;

    if (currentWidth === 400 && currentHeight === 400) {

        elBall.style.width = 100 + 'px';
        elBall.style.height = 100 + 'px';

    } else {


        elBall.style.width = (currentWidth + 50) + 'px';
        elBall.style.height = (currentHeight + 50) + 'px';
    }

}