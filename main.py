basic.show_arrow(ArrowNames.EAST)
servos.P0.set_angle(90)

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_arrow(ArrowNames.SOUTH)
        servos.P0.set_angle(150)
        basic.pause(300)
        servos.P0.set_angle(90)
        basic.pause(150)
        basic.show_arrow(ArrowNames.EAST)
basic.forever(on_forever)
