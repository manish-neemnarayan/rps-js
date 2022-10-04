const userRes = document.querySelector("#result-user-stat");
const compRes = document.querySelector("#result-comp-stat");
const finalRes = document.querySelector("#result-final-stat");

const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");

const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissors = document.querySelector("#s");

let compCount = 0; // to check the count state
let userCount = 0; // to check the count state

function rockClick() {

    let arr = ["rock", "scissors", "paper"]; // array containing values for computer
    let rand = arr[Math.floor(Math.random() * 3)]; // poping out the random value

    userRes.textContent = `User: rock`;
    compRes.textContent = `Comp: ${rand}`;
 
    if(rand === "paper") {
        compCount += 1;
        compScoreVal.textContent = compCount;
    } else {
        userCount += 1;
        userScoreVal.textContent = userCount;
    }

    // removing event listener
    if(compCount === 5 || userCount === 5) { 
        const winner = compCount === 5 ? "Computer" : "You";
        finalRes.textContent = `Winner: ${winner}`;
        rock.removeEventListener("click", rockClick);
        scissors.removeEventListener("click", scissorsClick);
        paper.removeEventListener("click", paperClick);
    }

}

function paperClick() {
    let arr = ["rock", "scissors", "paper"];
    let rand = arr[Math.floor(Math.random() * 3)];

    userRes.textContent = `User: paper`;
    compRes.textContent = `Comp: ${rand}`;

    if(rand === "scissors") {
        compCount += 1;
        compScoreVal.textContent = compCount;
    } else {
        userCount += 1;
        userScoreVal.textContent = userCount;
    }

    // removing event listener
    if(compCount === 5 || userCount === 5) {
        finalRes.textContent = "Winner: You";
        rock.removeEventListener("click", rockClick);
        scissors.removeEventListener("click", scissorsClick);
        paper.removeEventListener("click", paperClick);
    }

}

function scissorsClick() {
    let arr = ["rock", "scissors", "paper"];
    let rand = arr[Math.floor(Math.random() * 3)];

    userRes.textContent = `User: scissors`;
    compRes.textContent = `Comp: ${rand}`;

    if(rand === "rock") {
        compCount += 1;
        compScoreVal.textContent = compCount;
    } else {
        userCount += 1;
        userScoreVal.textContent = userCount;
    }

    // removing event listener
    if(compCount === 5 || userCount === 5) {
        finalRes.textContent = "Winner: You";
        rock.removeEventListener("click", rockClick);
        scissors.removeEventListener("click", scissorsClick);
        paper.removeEventListener("click", paperClick);
    }

}

// event listeners

rock.addEventListener("click", rockClick);

paper.addEventListener("click", paperClick);

scissors.addEventListener("click", scissorsClick);