let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function highlightLeader(){
    let scoreHomeTeam = parseInt(homeScore.innerText)
    let scoreGuestTeam = parseInt(guestScore.innerText) 
    
    if (scoreHomeTeam > scoreGuestTeam){
        homeEl.style.color = "green"
        guestEl.style.color = "white"
    } else if (scoreGuestTeam > scoreHomeTeam) {
        guestEl.style.color = "green"
        homeEl.style.color = "white"
    } else {
        homeEl.style.color = "white"
        guestEl.style.color = "white"
    }
}

function homePlusOne(){
    let score = parseInt(homeScore.innerText)
    score += 1
    homeScore.innerText = score
    highlightLeader()
}

function homePlusTwo(){
    let score = parseInt(homeScore.innerText)
    score += 2
    homeScore.innerText = score
    highlightLeader()
}

function homePlusThree(){
    let score = parseInt(homeScore.innerText)
    score += 3
    homeScore.innerText = score
    highlightLeader()
}

function guestPlusOne(){
    let score = parseInt(guestScore.innerText)
    score += 1
    guestScore.innerText = score
    highlightLeader()
}

function guestPlusTwo(){
    let score = parseInt(guestScore.innerText)
    score += 2
    guestScore.innerText = score
    highlightLeader()
}

function guestPlusThree(){
    let score = parseInt(guestScore.innerText)
    score += 3
    guestScore.innerText = score
    highlightLeader()
}

function newGame(){
    homeScore.innerText = 0
    guestScore.innerText = 0
    highlightLeader()
}