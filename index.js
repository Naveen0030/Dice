alert("Ready to see who won!!");
var randomNum1 = Math.floor(Math.random() * 6) + 1 ;
var randomDice1 = "images/dice" +randomNum1+ ".png" ;

document.querySelector(".img1").setAttribute("src" , randomDice1);

var randomNum2 = Math.floor(Math.random() * 6) + 1 ;
var randomDice2 = "images/dice" +randomNum2+ ".png" ;

document.querySelectorAll("img")[1].setAttribute("src" , randomDice2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "OOPS Draw!";
  }