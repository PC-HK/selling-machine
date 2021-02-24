basic.showArrow(ArrowNames.East)
servos.P0.setAngle(90)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.South)
        servos.P0.setAngle(150)
        basic.pause(1500)
        servos.P0.setAngle(90)
        basic.showArrow(ArrowNames.East)
    }
})
