motorx.init()
basic.forever(function () {
    let time = 0
    let speed = 0
    mecanumRobot.mecanumMoveTime(MoveDir.Back, speed, time)
    basic.pause(1000)
})
