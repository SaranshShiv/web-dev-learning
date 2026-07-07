let score1 = 0;
let score2 = 0;

let buttons = document.querySelectorAll("#choices button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let playerchoice = button.id;
        let computechoice = getComputerChoice();

        if (playerchoice === computechoice) {
            document.getElementById("message").textContent = "Draw!";

            setTimeout(() => {
                document.getElementById("message").textContent = "Choose your weapon!";
            }, 2000);
        }
        else if (
            (playerchoice === "rock" && computechoice === "scissors") ||
            (playerchoice === "paper" && computechoice === "rock") ||
            (playerchoice === "scissors" && computechoice === "paper")
        ) {
            score1++;
            document.getElementById("p1").textContent = "Player: " + score1;
            document.getElementById("message").textContent = "Player Wins!";

            setTimeout(() => {
                document.getElementById("message").textContent = "Choose your weapon!";
            }, 2000);
        }
        else {
            score2++;
            document.getElementById("p2").textContent = "Computer: " + score2;
            document.getElementById("message").textContent = "Computer Wins!";

            setTimeout(() => {
                document.getElementById("message").textContent = "Choose your weapon!";
            }, 2000);
        }

    });
});

let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    score1=0;
    score2=0;
    document.getElementById("p1").textContent = "Player: 0";
    document.getElementById("p2").textContent = "Computer: 0";
})

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}