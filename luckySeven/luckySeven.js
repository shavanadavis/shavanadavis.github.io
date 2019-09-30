function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
    console.log(rollDice());
}
 function myBet() {}
       var dice1;
       var dice2;
       var diceSum;
       var maxWin = 0;
       var rollsDice = 0;
       var rollsDiceMax = 0;
       var bet = document.forms["lucky"].value;
       var gameMoney = bet;

        if (bet <= 0) {
             alert("ERROR!");
       }
       else {

                while(gameMoney > 0) {
                       dice1 = rollsDice();
                       dice2 = rollsDice();
                       rollsDice++;

                       if(diceSum != 7) {
                           gameMoney--;
                            alert("You Lost");
                  }
                  else {
                        gameMoney += 4;
                           if (gameMoney > maxWin) {
                              maxWin += (gameMoney-maxWin)
                           }
                            alert("You Win");
                  }
        }
}
document.getElementById("results").style.display = "block";
document.getElementById("submitButton").innerText = "Play Again!";
document.getElementById("startBet").innerText = bet;
document.getElementById("rollsNum").innerText = rollsDice;
document.getElementById("max").innerText = maxWin;
document.getElementById("rollsAtMax").innerText = rollsDiceMax;
