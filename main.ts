function ladder () {
    basic.showLeds(`
        # . . . #
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    if (player == 2) {
        dice = randint(1, 6)
        player = 1
        basic.showNumber(dice)
        p1loc += dice
        for (let index = 0; index <= dice - 1; index++) {
            player_1.move(1)
            move()
            basic.pause(100)
        }
        locationcheck = p1loc
        locationchecker()
    }
})
function locationchecker () {
    if (locationcheck == 3) {
        ladder()
        if (player == 1) {
            player_1.delete()
            player_1 = game.createSprite(3, 3)
            player_1.turn(Direction.Right, 180)
            p1loc = 7
        } else {
            player_2.delete()
            player_2 = game.createSprite(3, 3)
            player_2.turn(Direction.Right, 180)
            p2loc = 7
            player_2.set(LedSpriteProperty.Blink, 200)
        }
    } else if (locationcheck == 8) {
        ladder()
        if (player == 1) {
            player_1.delete()
            player_1 = game.createSprite(1, 0)
            p1loc = 22
            player_1.turn(Direction.Right, 180)
        } else {
            player_2.delete()
            player_2 = game.createSprite(1, 0)
            p2loc = 22
            player_2.set(LedSpriteProperty.Blink, 200)
            player_2.turn(Direction.Right, 180)
        }
    } else if (locationcheck == 24) {
        snake()
        if (player == 1) {
            player_1.delete()
            player_1 = game.createSprite(2, 2)
            p1loc = 9
            player_1.turn(Direction.Right, 180)
        } else {
            player_2.delete()
            player_2 = game.createSprite(1, 3)
            p2loc = 0
            player_2.set(LedSpriteProperty.Blink, 200)
            player_2.turn(Direction.Right, 180)
        }
    } else if (locationcheck == 21) {
        snake()
        if (player == 1) {
            player_1.delete()
            player_1 = game.createSprite(1, 3)
            p1loc = 13
        } else {
            player_2.delete()
            player_2 = game.createSprite(1, 3)
            p2loc = 13
            player_2.set(LedSpriteProperty.Blink, 200)
        }
    } else if (locationcheck == 18) {
        snake()
        if (player == 1) {
            player_1.delete()
            player_1 = game.createSprite(1, 3)
            p1loc = 11
        } else {
            player_2.delete()
            player_2 = game.createSprite(1, 3)
            p2loc = 11
            player_2.set(LedSpriteProperty.Blink, 200)
        }
    } else if (locationcheck >= 25) {
        if (player == 1) {
            basic.clearScreen()
            basic.showString("p1 wins!")
            game.setScore(p1loc)
            game.gameOver()
        } else {
            basic.clearScreen()
            basic.showString("p2 wins!")
            game.setScore(p2loc)
            game.gameOver()
        }
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    if (player == 1) {
        dice = randint(1, 6)
        player = 2
        basic.showNumber(dice)
        p2loc += dice
        for (let index = 0; index <= dice - 1; index++) {
            player_2.move(1)
            move()
            basic.pause(100)
        }
        locationcheck = p2loc
        locationchecker()
    }
})
function snake () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(200)
}
function move () {
    if (player == 1) {
        if (player_1.get(LedSpriteProperty.X) == 4) {
            player_1.turn(Direction.Left, 90)
        } else if (player_1.get(LedSpriteProperty.X) == 0) {
            player_1.turn(Direction.Right, 90)
        }
    } else {
        if (player_2.get(LedSpriteProperty.X) == 4) {
            player_2.turn(Direction.Left, 90)
        } else if (player_2.get(LedSpriteProperty.X) == 0) {
            player_2.turn(Direction.Right, 90)
        }
    }
}
let locationcheck = 0
let dice = 0
let player = 0
let p2loc = 0
let p1loc = 0
let player_2: game.LedSprite = null
let player_1: game.LedSprite = null
player_1 = game.createSprite(0, 4)
player_2 = game.createSprite(0, 4)
p1loc = 1
p2loc = 1
player = 2
player_2.set(LedSpriteProperty.Blink, 200)
