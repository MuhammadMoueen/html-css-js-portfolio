/* ---------------------------------------------------------
   Rock Paper Scissors game script
   This file contains game state, helper functions, and event
   listeners for each player choice.
   --------------------------------------------------------- */

// game state variables
let userScore = 0;
let compScore = 0;
let round = 1;
const totalRounds = 10;

// DOM elements used by the game
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("result-message");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const roundText = document.getElementById("round");
const finalResult = document.getElementById("final-result");
const finalText = document.getElementById("final-text");
const restartBtn = document.getElementById("restart-btn");

// return a random computer choice from rock, paper, scissors
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
};

// remove any result animation classes before a new result is shown
const removeAnimations = () => {
    msg.classList.remove("win-animation", "lose-animation", "draw-animation");
};

// handle when player and computer choose the same item
const drawGame = () => {
    removeAnimations();
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31";
    msg.classList.add("draw-animation");
};

// update the page after a win or loss
const showWinner = (userWin, userChoice, compChoice) => {
    removeAnimations();

    if (userWin) {
        userScore += 1;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.classList.add("win-animation");
    } else {
        compScore += 1;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.classList.add("lose-animation");
    }
};

// check if the match is finished and show the final result popup
const checkFinalWinner = () => {
    if (round > totalRounds) {
        finalResult.classList.remove("hide");

        if (userScore > compScore) {
            finalText.innerText = "🏆 YOU WON THE MATCH!";
            document.body.classList.add("player-win");
        } else if (compScore > userScore) {
            finalText.innerText = "💻 COMPUTER WON THE MATCH!";
            document.body.classList.add("comp-win");
        } else {
            finalText.innerText = "🤝 MATCH DRAW!";
        }

        // disable further clicks once match is over
        choices.forEach((choice) => {
            choice.style.pointerEvents = "none";
        });
    }
};

// main game flow when the user selects rock, paper, or scissors
const playGame = (userChoice) => {
    if (round > totalRounds) {
        return; // nothing happens if the match is already done
    }

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

    round += 1;

    if (round <= totalRounds) {
        roundText.innerText = round;
    }

    checkFinalWinner();
};

// attach click listeners to each game choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// restart the page when the restart button is clicked
restartBtn.addEventListener("click", () => {
    location.reload();
});

