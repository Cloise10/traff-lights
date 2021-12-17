function GYRS () {
    while (true) {
        basic.clearScreen()
        Green()
        basic.pause(3000)
        Crosswalk2()
        basic.pause(1500)
        Yellow()
        basic.pause(5000)
        Red()
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
        basic.pause(5000)
        basic.clearScreen()
    }
}
function GYRN () {
    while (true) {
        basic.clearScreen()
        Green()
        basic.pause(3000)
        Crosswalk()
        basic.pause(1500)
        Yellow()
        basic.pause(5000)
        Red()
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
        basic.pause(5000)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    mode = 1
})
function Yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Sound () {
    music.setVolume(300)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
}
function Sound2 () {
    music.stopMelody(MelodyStopOptions.All)
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
function Crosswalk2 () {
    basic.showIcon(IconNames.Yes)
    Sound()
    basic.pause(2000)
    basic.clearScreen()
    Countdown()
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    Sound2()
    basic.pause(2000)
    basic.clearScreen()
}
function Crosswalk () {
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
    Countdown()
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    basic.pause(2000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    mode = 2
})
function Countdown () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(10 - index)
        basic.pause(800)
        basic.clearScreen()
    }
}
function Green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
let range: neopixel.Strip = null
let mode = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
})
basic.forever(function () {
    if (mode == 1) {
        GYRN()
        mode += 0
    } else if (mode == 2) {
        GYRS()
        mode += 0
    } else if (0 == 0) {
    	
    } else {
    	
    }
})
