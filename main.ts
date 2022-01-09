enum RadioMessage {
    message1 = 49434,
    test = 2239,
    Follow = 44477,
    StopFollowing = 46389,
    Start = 56380,
    Abbrechen = 21951
}
input.onButtonPressed(Button.B, function () {
	
})
radio.sendMessage(RadioMessage.Start)
radio.setGroup(1)
radio.setTransmitPower(20)
let folgen_oder_nicht_oder_Abbrechen = 2
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        folgen_oder_nicht_oder_Abbrechen = 1
        basic.showString("Folgen")
    }
    if (input.buttonIsPressed(Button.B)) {
        folgen_oder_nicht_oder_Abbrechen = 2
        basic.showString("Folgen Beendet")
    }
    if (input.buttonIsPressed(Button.AB)) {
        folgen_oder_nicht_oder_Abbrechen = 3
        basic.showString("Abbruch")
    }
    if (folgen_oder_nicht_oder_Abbrechen == 1) {
        radio.sendMessage(RadioMessage.Follow)
    } else if (folgen_oder_nicht_oder_Abbrechen == 3) {
        radio.sendMessage(RadioMessage.Abbrechen)
    } else {
        radio.sendMessage(RadioMessage.StopFollowing)
    }
})
control.inBackground(function () {
    radio.sendValue("compass", input.compassHeading())
    radio.sendValue("Neigung", input.rotation(Rotation.Pitch))
})
