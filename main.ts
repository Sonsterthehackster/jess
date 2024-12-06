input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("C5 - C5 - C5 - C C ", 220), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . # # # .
        . . . . .
        . # # # .
        # . . . #
        `)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    for (let index = 0; index < 5; index++) {
        cuteBot.turnright()
    }
})
input.setSoundThreshold(SoundThreshold.Loud, 190)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
