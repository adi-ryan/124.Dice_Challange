let player1roll =rollDice(6);
let player2roll =rollDice(6);
dice(1, player1roll);
dice(2, player2roll);
console.log("Player 1 roll: " + player1roll );
console.log("Player 2 roll: " + player2roll );

playerWinMessage(player1roll,player2roll);

let refreshNumber = 0;
refreshNumber = refreshTest(refreshNumber);
console.log(refreshNumber);

var someVarName = "value";
sessionStorage.setItem("refreshNumber", refreshNumber);
refreshNumber = sessionStorage.getItem(refreshNumber);

//dice structure: made with divs inside a grid display
function dice(specifyPlayer, dice) {
  // ******   !!IMPORTANT!! values of specifyPlayer parameter should  be 1 or 2
  // (concat with player as element id => example: if you choose 1 id will be player1 ) ******//
  // ******   !!IMPORTANT!! value of dice has to be between 1 and 6   ******//
  if (specifyPlayer === 1 || (specifyPlayer === 2 && dice > 0 && dice < 7)) {
    if (specifyPlayer == 1) specifyPlayer = "player1";
    else specifyPlayer = "player2";

    let divToHide;
    switch (dice) {
      case 1:
        divToHide = [1, 2, 3, 5, 6, 7];
        break;

      case 2:
        divToHide = [1, 3, 4, 5, 7];
        break;

      case 3:
        divToHide = [1, 3, 5, 7];
        break;

      case 4:
        divToHide = [3, 4, 5];
        break;

      case 5:
        divToHide = [3, 5];
        break;

      case 6:
        divToHide = [4];
        break;
    }
    for (let i = 0; i < divToHide.length; i++) {
      document
        .querySelector("#" + specifyPlayer + " .dot-" + divToHide[i])
        .setAttribute("class", "hidden");
    }
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
function playerWinMessage(player1,player2)
{
    let result;
    if (player1 > player2)
        result = "Player 1 WON!";
    else if( player1 < player2)
        result = "Player 2 WON!";
    else
        result = "Draw";
    document.querySelector("h1").textContent = result;
}