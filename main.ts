function _2 () {
    basic.showArrow(ArrowNames.West)
    servos.P0.setAngle(90)
}
function _ () {
    basic.showArrow(ArrowNames.SouthWest)
    servos.P0.setAngle(150)
    basic.pause(300)
    basic.pause(150)
    _2()
}
_2()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) > 800) {
        _()
    }
})
