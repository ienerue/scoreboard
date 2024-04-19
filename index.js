let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let homeScore = 0
let guestScore = 0

function add1Home() {
    homeScore += 1
    homePoints.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homePoints.textContent = homeScore
}

function add3Home() {
    homeScore += 3
    homePoints.textContent = homeScore
}

function add1Guest() {
    guestScore += 1
    guestPoints.textContent = guestScore
}

function add2Guest() {
    guestScore += 2
    guestPoints.textContent = guestScore
}

function add3Guest() {
    guestScore += 3
    guestPoints.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homePoints.textContent = 0
    guestPoints.textContent = 0
}