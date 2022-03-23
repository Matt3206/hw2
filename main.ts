input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showString("#1")
    basic.showNumber(Number_1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Number_2 += 1
    basic.showString("#2")
    basic.showNumber(Number_2)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("#2")
        basic.showNumber(Number_2)
        basic.showString("#1")
        basic.showNumber(Number_1)
    }
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    Number_1 += -1
    basic.showString("#1")
    basic.showNumber(Number_1)
})
input.onGesture(Gesture.TiltRight, function () {
    Number_2 += -1
    basic.showString("#2")
    basic.showNumber(Number_2)
})
let Number_2 = 0
let Number_1 = 0
basic.showString("Welcome")
Number_1 = 0
basic.showString("#1")
basic.showNumber(Number_1)
Number_2 = 0
basic.showString("#2")
basic.showNumber(Number_2)
