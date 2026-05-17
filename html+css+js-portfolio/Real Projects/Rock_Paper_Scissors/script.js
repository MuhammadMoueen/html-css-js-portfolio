let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.getElementById("result-message");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];

    const randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];
};

const drawGame = () => {
    console.log("Game was draw.");

    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin){

        console.log("You Win!");

        msg.innerText =
        `You Win! Your ${userChoice} beats Computer's ${compChoice}`;

        msg.style.backgroundColor = "green";

    } else {

        console.log("You Lose");

        msg.innerText =
        `You Lose! Computer's ${compChoice} beats Your ${userChoice}`;

        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    console.log("user choice =", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();

    console.log("computer choice =", compChoice);

    if (userChoice === compChoice) {

        // Draw Game
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
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });

});