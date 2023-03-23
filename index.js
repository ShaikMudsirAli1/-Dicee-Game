var randomNumberOne_1to6 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumberOne_1to6 + ".png"; //dice1.png to dice6.png

var randomImageSource1 = "images/" + randomDiceImage; //images/dice1.png - images/dice.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource1);

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumberTwo_1to6 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumberTwo_1to6 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins

if (randomNumberOne_1to6 > randomNumberTwo_1to6) {
  document.querySelector("h1").innerHTML = "🚩player 1 Wins!";
} else if (randomNumberTwo_1to6 > randomNumberOne_1to6) {
  document.querySelector("h1").innerHTML = " player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Opps Draw!";
}

document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/dice" + randomNumberOne_1to6 + ".png");
