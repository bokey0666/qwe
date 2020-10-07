for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(0, 0)
}
