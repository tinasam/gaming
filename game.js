import {startTimer} from "./timer.js";

// Cards display
const cardList = document.querySelectorAll(".grid-item");
const frontSideCard = document.querySelectorAll(".backgroundImg");
const beginGame = document.querySelector("#fullSite");
const onButton = document.querySelector("#on");
const offButton = document.querySelector("#off");
const points = document.querySelector("#points")
const timer = document.getElementById("timer");
// let cardList;
let timeInterval;
let sec=60;
let count = 0;
let clickedIndex1 = 0;
let clickedIndex2 = 0;
let cardClick1;
let score = 0;

onButton.addEventListener ("click", (event) => {
   beginGame.style.visibility="visible";
   onButton.style.visibility="hidden";
   startTimer(sec,timeInterval);
   console.log(sec);
});

offButton.addEventListener ("click", (event) => {
   location.reload();
});



frontSideCard.forEach((card, index)  => { 
   card.addEventListener("click", (event) => {
      if (count===2) {
         console.log ("reset screen")
         count = 0;
         cardClick1 = "";
         if (cardList[clickedIndex1].className !== cardList[clickedIndex2].className) {
            frontSideCard[clickedIndex1].style.visibility = "visible";
            frontSideCard[clickedIndex2].style.visibility = "visible";
            cardList[clickedIndex1].style.visibility = "hidden";
            cardList[clickedIndex2].style.visibility = "hidden";
         }

      }
      
      card.style.visibility="hidden";
      console.log(cardList[index]);
      cardList[index].style.visibility="visible";
         count++;
      if (count===1) {
         cardClick1 = cardList[index].className;
         clickedIndex1 = index;
         console.log(cardClick1);
      }
      if (count===2) {
         clickedIndex2 = index;
         console.log(cardList[index].className)
         if (cardClick1 === cardList[index].className) {
            // update point by 1
            score += 1;
               console.log("Woohoo - 1 point!");
               alert("Woohoo - 1 point!");
               points.innerHTML = score;
         } else {
               console.log("Try Again");
               alert("Try Again");
         }
      }
      console.log(timer.innerHTML);
      if (score === 6 || timer.innerHTML==="00") {
            startConfetti()
            alert("Game Over");
            return 
      }
   });
});

const startConfetti=()=>{
   setTimeout(function(){
           confetti.start()
   },1000  );
}    

const stopConfetti = () => {
   setTimeout(function() {
       confetti.stop()
   }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};





