'use strict'

function onBallClick(elBall, maxDiameter, reset) {
    var currentWidth = elBall.offsetWidth
    var currentHeight = elBall.offsetHeight
    // console.log('elBall.offsetWidth', elBall.offsetWidth)

    if (currentWidth >= maxDiameter && currentHeight >= maxDiameter) {
        elBall.style.width = reset + 'px'
        elBall.style.height = reset + 'px'
        elBall.style.backgroundColor = 'lightcoral'

    } else {
        var newWidth = currentWidth + getRandomInt(20, 60)
        elBall.style.width = newWidth + 'px'
        elBall.style.height = newWidth + 'px'
        elBall.style.backgroundColor = getRandomColor()

        console.log('elBall.offsetWidth', newWidth)
    }
}