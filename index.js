
  if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice() {
    var randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
    var randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
   
    document.querySelector(".img1").setAttribute("src", randomNumber1);
    document.querySelector(".img2").setAttribute("src", randomNumber2);
   
    changeTitle(randomNumber1, randomNumber2);
  }
   
  function changeTitle(num1, num2) {
    if (num1 === num2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (num1 > num2) {
      document.querySelector("h1").innerHTML = "🚩 Saki Wins!";
    } else {
      document.querySelector("h1").innerHTML = "Ryfo Wins! 🚩";
    }
  }