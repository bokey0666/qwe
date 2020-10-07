for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(0, 0)
    basic.pause(500)
}
