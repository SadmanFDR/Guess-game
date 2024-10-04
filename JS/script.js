// ============= dom part start ==================
let playerName = document.querySelector(".playerName");
let winer = document.querySelector(".winer");
let result = document.querySelector(".result");
let chanceNumber = document.querySelector(".chanceNumber");
let chanceOption = document.querySelector('.chanceOption');
let chance = 0;
let chanceLast = 0;
// ++++++ player one
let oneValue = document.querySelector(".oneValue");
let playerOnebutton = document.querySelector(".playerOnebutton");
let playerOneinput = document.querySelector(".playerOneinput");
// ++++++ player two
let twoValue = document.querySelector(".twoValue");
let playerTwoinput = document.querySelector(".playerTwoinput");
let playerTwobutton = document.querySelector(".playerTwobutton");
// ++++++ player three
let threeValue = document.querySelector(".threeValue");
let playerThreeinput = document.querySelector(".playerThreeinput");
let playerThreebutton = document.querySelector(".playerThreebutton");
// ++++++++ error
let error = document.querySelector(".error");
// ------------- dom part end -------------------
// =============  function part start
chanceNumber.innerHTML = chance
// ----------- player one
playerOnebutton.addEventListener("click", () => {
  if (playerOneinput.value == "") {
    error.innerHTML = "Write something";
  } else {
    if (playerOneinput.value > 21) {
      error.innerHTML = "This number is too larg.";
    } else {
      oneValue.style = "display :none";
      error.innerHTML = "";
      twoValue.style = "display : block";
    }
    // ------------ player two
  }
  playerTwobutton.addEventListener("click", () => {
    if (playerTwoinput.value == "") {
      error.innerHTML = "Same Same But Different...";
    } else {
      if (playerTwoinput.value > 16) {
        error.innerHTML = "Don't cross your limits.";
      } else {
        if (playerOneinput.value == playerTwoinput.value) {
          winer.style = "display:block";
          result.innerHTML = "Player 2 win";
          twoValue.style = "display:none";
          error.style= "display:none"
        } else {
          chance++
          chanceNumber.innerHTML =chance
          playerTwoinput.value= ""
        }if(chance==5){
          twoValue.style= "display:none";
          threeValue.style= 'display:block';
        }
        
        // ---------------- player three
       playerThreebutton.addEventListener('click' , ()=>{
        if (playerThreeinput.value == ""){
          error.innerHTML= "Write something"
        }else{
          if(playerThreeinput.value > 16){
            error.innerHTML ="Write somll number"
          }else{
            if(playerOneinput.value == playerThreeinput.value){
              winer.style="display:block";
              result.innerHTML="Player 3 win";
              threeValue.style= 'display:none';
              error.style= "display:none"

            }else{
              chanceLast++
              chanceOption.innerHTML = chanceLast
              playerThreeinput.value = "" 
            }if (chanceLast==5){
              threeValue.style = "display:none";
              winer.style = "display:block";
                result.innerHTML = "Player 1 win";
                error.style= "display:none"

            }
          }
        }
       })
         
      }
    }
  })
})
