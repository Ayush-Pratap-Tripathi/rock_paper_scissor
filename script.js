let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#comp-score");
let displayMessage = document.querySelector(".result");
let message = document.querySelector("#message");
let resetBtn = document.querySelector("#resetBtn");

playerScore.innerText = 0;
computerScore.innerText = 0;

let choice = ["rock", "paper", "scissor"]

let computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

rock.addEventListener("click", () => {
    let compChoice = computerChoice();
    if (compChoice === "rock") {
        message.innerText = "AI made the same choice. It's a draw!";
        displayMessage.classList.remove("lost");
        displayMessage.classList.remove("won");
    } else if (compChoice === "paper") {
        message.innerText = "Oops! you lost.\nPaper beats Rock.";
        displayMessage.classList.add("lost");
        displayMessage.classList.remove("won");
        computerScore.innerText++;
    } else if (compChoice === "scissor") {
        message.innerText = "yay! you won.\nRock beats Scissor.";
        displayMessage.classList.add("won");
        displayMessage.classList.remove("lost");
        playerScore.innerText++;
    }
})

paper.addEventListener("click", () => {
    let compChoice = computerChoice();
    if (compChoice === "rock") {
        message.innerText = "yay! you won.\nPaper beats Rock.";
        displayMessage.classList.add("won");
        displayMessage.classList.remove("lost");
        playerScore.innerText++;
    } else if (compChoice === "paper") {
        message.innerText = "AI made the same choice. It's a draw!";
        displayMessage.classList.remove("lost");
        displayMessage.classList.remove("won");
    } else if (compChoice === "scissor") {
        message.innerText = "Oops! you lost.\nScissor beats Paper.";
        displayMessage.classList.add("lost");
        displayMessage.classList.remove("won");
        computerScore.innerText++;
    }
})

scissor.addEventListener("click", () => {
    let compChoice = computerChoice();
    if (compChoice === "rock") {
        message.innerText = "Oops! you lost.\nRock beats Scissor.";
        displayMessage.classList.add("lost");
        displayMessage.classList.remove("won");
        computerScore.innerText++;
    } else if (compChoice === "paper") {
        message.innerText = "yay! you won.\nScissor beats Paper.";
        displayMessage.classList.add("won");
        displayMessage.classList.remove("lost");
        playerScore.innerText++;
    } else if (compChoice === "scissor") {
        message.innerText = "AI made the same choice. It's a draw!";
        displayMessage.classList.remove("lost");
        displayMessage.classList.remove("won");
    }
})

resetBtn.addEventListener("click", () => {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    displayMessage.classList.remove("lost");
    displayMessage.classList.remove("won");
    message.innerText = "Pick your move";
})