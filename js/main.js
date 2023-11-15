'use strict'

function onBallClick(elBall) {
    var currentWidth = parseInt(elBall.style.width, 10) || 100
    var currentHeight = parseInt(elBall.style.height, 10) || 100

    console.log('currentWidth', currentWidth)
    console.log('currentHeight', currentHeight)

    if (currentWidth >= 400 && currentHeight >= 400) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.style.backgroundColor = 'lightcoral'

    } else {
        var newWidth = currentWidth + getRandomInt(20, 60)
        elBall.style.width = newWidth + 'px'
        elBall.style.height = newWidth + 'px'
        elBall.style.backgroundColor = getRandomColor()
    }
}