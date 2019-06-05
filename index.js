function roll(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageForLeftDice = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImageForLeftDice);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageForRightDice = "dice"+ randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImageForRightDice);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins"
} else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins"

} else {
  document.querySelector("h1").innerHTML="Draw..."
}
}
function reset(){
  document.querySelector("h1").innerHTML="Hit Roll"
  document.querySelector(".img1").setAttribute("src", "dice6.png");
  document.querySelector(".img2").setAttribute("src", "dice6.png");
}
