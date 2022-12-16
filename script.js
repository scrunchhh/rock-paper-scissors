function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function selectButton(e) {
    choice = e.target.className;
    let rockClass = buttons[0]
    let paperClass = buttons[1]
    let scissorsClass = buttons[2]
    
    paperClass.classList.remove('buttonSelected')
    scissorsClass.classList.remove('buttonSelected')
    rockClass.classList.remove('buttonSelected')

    e.target.classList.toggle('buttonSelected')
    
}

function rockPaperScissors() {
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

    score.textContent = `Player ${playerScore}:${computerScore} Computer`
    
}

let computerScore = 0
let playerScore = 0
let choice = ''

const buttons = Array.from(document.querySelectorAll('.options button'))
buttons.forEach(button => button.addEventListener('click', selectButton))

const score = document.querySelector('.scoreContainer h1')
score.textContent = `Player ${playerScore}:${computerScore} Computer`
const start = document.querySelector('#rollBtn')

start.addEventListener('click', rockPaperScissors)
