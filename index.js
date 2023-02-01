

var randomNumber1=Math.floor(Math.random()*6+1);//generating a random number
var randomDiceImage1="images/dice"+randomNumber1+".png"//using that random number to generate a random img source
var image1=document.querySelectorAll("img")[0];//getting the real image source
image1.setAttribute("src", randomDiceImage1);//replacing it with the new source that we generated


var randomNumber2=Math.floor(Math.random()*6+1);
var randomDiceImage2="images/dice"+randomNumber2+".png"
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2)

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}

else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins";
}

else{
  document.querySelector("h1").innerHTML="Draw";
}
