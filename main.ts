let Adding = 0
// Whenever you press the A button, the program will count from 1-9. How I did it is that I made it so when ever index (variable) is counting and i made it add 1.
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 8; index++) {
        basic.showNumber(index + 1)
    }
})
// To add from 1-100, you will need to set the number from 1-100 and you will need to loop this 101 times because there is a 0 in the beginning and 0+anything remains the same. So I set up a new variable called adding and i made adding by how much its counting so it is adding everything up then I just made the number show.
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 100; index++) {
        Adding += index
    }
    basic.showNumber(Adding)
})
// Whenever you press the B button, the program will count from 1-9. To code this program, we will need to minus whatever the number by 9.
input.onButtonPressed(Button.B, function () {
    for (let index_going_down = 0; index_going_down <= 8; index_going_down++) {
        basic.showNumber(9 - index_going_down)
    }
})
