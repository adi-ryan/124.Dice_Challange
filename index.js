var wasStartButtonClicked = false;

document.querySelector("#start-button").addEventListener("click", function () {
  start();
});

function diceReset() {
  for (let i = 1; i <= 7; i++) {
    for (let y = 1; y < 3; y++) {
      document
        .querySelector("#" + "player" + 1 + " div.dot-" + i)
        .setAttribute("class", "dice-dots dot-" + i);
        console.log(document
            .querySelector("#" + "player" + y + " div.dot-" + i)
            .getAttribute("class"));
    }
  }
}

function start() {
  let player1roll = rollDice(6);
  let player2roll = rollDice(6);
  console.log(player1roll);
  console.log(player2roll);
  dice(1, player1roll);
  dice(2, player2roll);
  playerWinMessage(player1roll, player2roll);
}

//dice structure: made with divs inside a grid display
function dice(specifyPlayer, dice) {
    diceReset();
  // ******   !!IMPORTANT!! values of specifyPlayer parameter should  be 1 or 2
  // (concat with player as element id => example: if you choose 1 id will be player1 ) ******//
  // ******   !!IMPORTANT!! value of dice has to be between 1 and 6   ******//
  if (specifyPlayer === 1 || (specifyPlayer === 2 && dice > 0 && dice < 7)) {
    if (specifyPlayer === 1) specifyPlayer = "player1";
    else specifyPlayer = "player2";

    let divToHide;
    let divToUnhide;
    switch (dice) {
      case 1:
        divToHide = [1, 2, 3, 5, 6, 7];
        //divToUnhide = [4];
        break;

      case 2:
        divToHide = [1, 3, 4, 5, 7];
        //divToUnhide = [2, 6];
        break;

      case 3:
        divToHide = [1, 3, 5, 7];
        //divToUnhide = [2, 4, 6];
        break;

      case 4:
        divToHide = [3, 4, 5];
        //divToUnhide = [1, 2, 6, 7];
        break;

      case 5:
        divToHide = [3, 5];
        //divToUnhide = [1, 2, 4, 6, 7];
        break;

      case 6:
        divToHide = [4];
        //divToUnhide = [1, 2, 3, 5, 6, 7];
        break;
    }
    
    // ADDING "hide" to its class to hide the required dots
    for (let i = 0; i < divToHide.length; i++) {
      let editPart = document.querySelector(
        "#" + specifyPlayer + " div" + ".dot-" + divToHide[i]
      );
      let currentClassToHide = editPart.getAttribute("class");
      editPart.setAttribute("class", currentClassToHide + " hidden");
      console.log(currentClassToHide);
    }

    //szfvb vnbv
  } else {
    console.log(
      "dice function: wrong parameters \n" +
        "dice(1,2) => first paremeter should be the player number 1 or 2\n" +
        " second parameter should be between 1 and 6 inclusive"
    );
    console.log("player" + specifyPlayer + ": " + dice);
  }
}

// randomise a number 1 to maxNumber
function rollDice(maxNumber) {
  return Math.floor(Math.random() * maxNumber) + 1;
}

// player message
function playerWinMessage(player1, player2) {
  let result;
  if (player1 > player2) result = "Player 1 WON!";
  else if (player1 < player2) result = "Player 2 WON!";
  else result = "Draw";
  titleTextContent(result);
}

function titleTextContent(message) {
  document.querySelector("h1").textContent = message;
}
