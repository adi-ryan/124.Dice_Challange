document.querySelector("#roll-dice").addEventListener("click", start);


function start() {
  resetDice("player2");
  resetDice("player1");
  let player1Roll = rollDice(6);
  let player2Roll = rollDice(6);
  dice("player1", player1Roll);
  dice("player2", player2Roll);
  

  winnerMessage(player1Roll, player2Roll);
}

function resetDice(playerSelect) {
  

  for (let i = 1; i <= 7; i++) {
    let searchFilter = "#" + playerSelect + " div.dot-" + i;
    document
      .querySelector(searchFilter)
      .setAttribute("class", "dice-dots dot-" + i);
    
  }
}

function winnerMessage(p1DiceRoll, p2DiceRoll) {
  var $0 = document.querySelector("h1");
  if (p1DiceRoll > p2DiceRoll) $0.innerHTML = "Player 1 WON!";
  else if (p1DiceRoll < p2DiceRoll) $0.innerHTML = "Player 2 WON!!";
  else $0.innerHTML = "It's a draw";
}

// dice change logic
function dice(player, diceRoll) {
  
  let dotsToHide = [];
  // switching each dice number (1-to-6) to dots to hide
  switch (diceRoll) {
    case 1:
      dotsToHide = [1, 2, 3, 5, 6, 7];
      break;

    case 2:
      dotsToHide = [1, 3, 4, 5, 7];
      break;

    case 3:
      dotsToHide = [1, 3, 5, 7];
      break;

    case 4:
      dotsToHide = [3, 4, 5];
      break;

    case 5:
      dotsToHide = [3, 5];
      break;

    case 6:
      dotsToHide = [4];
  }

 

  // looping trough dots to toggle the hidden dots
  for (let i = 0; i < dotsToHide.length; i++) {
    let searchFilter = "#" + player + " div.dot-" + dotsToHide[i];
    let classContainer = document.querySelector(searchFilter);
    let classContent = classContainer.getAttribute("class");
    classContainer.setAttribute(
      "class",
      "dice-dots dot-" + dotsToHide[i] + " hidden"
    );
  }
}

// random dice generator
function rollDice(maxNum) {
  return Math.floor(Math.random() * maxNum) + 1;
}
