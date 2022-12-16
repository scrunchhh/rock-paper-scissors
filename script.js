function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function selectButton(e) {
    choice = e.target.className;

    buttons[0].classList.remove('buttonSelected')
    buttons[1].classList.remove('buttonSelected')
    buttons[2].classList.remove('buttonSelected')

    e.target.classList.toggle('buttonSelected')
}

function reset() {
    optionDiv.setAttribute('style', 'width: 50%;')
}

function rockPaperScissors() {
    start.setAttribute('style', 'scale: 1.1; background-color: lightgreen;')
    let computerChoice = getRndInteger(1, 4)
    console.log(choice)
    if (choice == 'rock') {
        if (computerChoice == 1) {
            console.log("draw")
        } else if (computerChoice == 2) {
            console.log("you lose")
            computerScore++
        } else {
            console.log("you win")
            playerScore++
        }
    }

    if (choice == 'paper') {
        if (computerChoice == 1) {
            console.log("you win")
            playerScore++
        } else if (computerChoice == 2) {
            console.log("draw")
        } else {
            console.log("you lose")
            computerScore++
        }
    }

    if (choice == 'scissors') {
        if (computerChoice == 1) {
            console.log("you lose")
            computerScore++
        } else if (computerChoice == 2) {
            console.log("you win")
            playerScore++
        } else {
            console.log("draw")
        }
    }

    choice = ''
    buttons[0].classList.remove('buttonSelected')
    buttons[1].classList.remove('buttonSelected')
    buttons[2].classList.remove('buttonSelected')
    score.textContent = `Player ${playerScore}:${computerScore} Computer`
}

let computerScore = 0
let playerScore = 0
let choice = ''
const buttons = Array.from(document.querySelectorAll('.options button'))
const optionDiv = document.querySelector('.options')
const score = document.querySelector('.scoreContainer h1')
const start = document.querySelector('#rollBtn')

//onclick animation for option buttons
buttons.forEach(button => button.addEventListener('click', selectButton))

//scoreboard
score.textContent = `Player ${playerScore}:${computerScore} Computer`

//play button
start.addEventListener('click', rockPaperScissors)