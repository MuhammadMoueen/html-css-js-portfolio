let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];

    const randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();

    console.log("computer choice =", compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});