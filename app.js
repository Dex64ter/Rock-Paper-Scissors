var userScore = 0
var computerScore = 0
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice() {
    const characters = ['r', 'p', 's']
    var result = Math.floor(10 * Math.random())%3
    
    return characters[result]
}

function convertion(letter){
    if(letter == 'r')
        return 'Pedra'
    
    if(letter == 'p')
        return 'Papel'
    else
        return 'Tesoura'
}

function win(uChoice, cChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = computerScore
    result_div.innerHTML = `${convertion(uChoice)} ganha de ${convertion(cChoice)}. Você ganhou!! 🔥`
    document.getElementById(uChoice).classList.add('green-glow')
    setTimeout(function() { document.getElementById(uChoice).classList.remove('green-glow') }, 250)
}

function lose(uChoice, cChoice) {
    computerScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = computerScore
    result_div.innerHTML = `${convertion(cChoice)} ganha de ${convertion(uChoice)}. Você perdeu 😢`
    document.getElementById(uChoice).classList.add('red-glow')
    setTimeout(() => document.getElementById(uChoice).classList.remove('red-glow'), 250)
}

function draw(uChoice, cChoice) {
    result_div.innerHTML = "Empatou... 😑"
    document.getElementById(uChoice).classList.add('grey-glow')
    setTimeout(function() { document.getElementById(uChoice).classList.remove('grey-glow') }, 250)
}

function game(userChoice){
    const CompChoice = getComputerChoice()
    
    switch(userChoice + CompChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, CompChoice)
            break
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, CompChoice)
            break
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, CompChoice)
            break
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r"))
    
    paper_div.addEventListener('click', () => game("p"))
    
    scissors_div.addEventListener('click', () => game("s"))
}

main();