//generate random number from user
//create random number
//match random & user number
//result
//


let youWon = 0;
let youLost = 0;

for(i=0; i<5; i++){
    let userNumber = parseInt(prompt("Enter a Number from 1-5 : "));
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    if( userNumber === randomNumber){
    // console.log("You won");
    var matchNum = document.write("Match number was : " + userNumber + "<br>");

    youWon++;
    }else{
    // console.log("You lost");
    var allLost = document.write("Loost number was : " + randomNumber + "<br>");

    youLost++;
    }
}




document.getElementById("won").innerHTML = "Total Winning Number : " + youWon + "<br>";
document.getElementById("lost").innerHTML = "Total Losing Number : " + youLost + "<br>";

// document.write("Total Losing Number : " + youLost);







