function rollDice(){
  var diceValue = document.querySelector(".diceValue").textContent;
  var diceQuantity = document.querySelector(".diceQuantity").textContent;
  var cnt = 0;

  for (var i = 0; i < 5; i++){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[i].setAttribute("src", "images/dice" + randomNumber + ".png");
    if (randomNumber==diceValue){
      cnt+=1;
      document.querySelectorAll("img")[i].style.filter = "invert(100)";
    }else{
      document.querySelectorAll("img")[i].style.filter = "invert(0)";
    }
  }
  if (cnt==diceQuantity){
    document.querySelector("h1").textContent = "Congratulations, you won!!";
    document.querySelector("h1").style.color = "#63F9F3";
  }else{
    document.querySelector("h1").textContent = "Choose values and play...";
    document.querySelector("h1").style.color = "#4ECCA3";
  }
}

function chooseDiceValue(value){
  document.querySelector(".diceValue").textContent = value;
}

function chooseDiceQuantity(value){
  document.querySelector(".diceQuantity").textContent = value;
}
