function rollDice(){
var randomnumber1= Math.floor(Math.random()*6)+1;

var randomdice= "dice"+ randomnumber1+ ".png";

var imagessource= "images/" +randomdice;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",imagessource);}


setTimeout(function() {
    clearInterval(initialRoll); // Stop the initial rolling effect

    var randomnumber1 = Math.floor(Math.random() * 6) + 1;
    var randomdice = "dice" + randomnumber1 + ".png";
    var imagessource = "images/" + randomdice;
    image1.setAttribute("src", imagessource);
}, 1000); // Delay of 1 second before setting the final image
