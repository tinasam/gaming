// Cards display
const originalCardList = document.querySelectorAll(".grid-item");
const frontSideCard = document.querySelectorAll(".backgroundImg");
const beginGame = document.querySelector("#fullSite");
const onButton = document.querySelector("#on");
const offButton = document.querySelector("#off");
const points = document.querySelector("#points")
let cardList;

onButton.addEventListener ("click", (event) => {
   beginGame.style.visibility="visible";
   onButton.style.visibility="hidden";
});

offButton.addEventListener ("click", (event) => {
   location.reload();
});



let count = 0;
let clickedIndex1 = 0;
let clickedIndex2 = 0;
let cardClick1;
let score = 0;

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
       console.log(array[i]);
       console.log(array[j]);
   }
   console.log(array);
   return array;
}
console.log(cardList);

cardList=shuffleArray(originalCardList)
console.log(cardList);

//// Click to reveal shapes and images
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
      if (score===6) {
         startConfetti()
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




// input.forEach( function(element){
//     element.addEventListener(`click`,function(){
//         console.log(`clicked`);
//     });
// });


// frontSideCard.forEach((indCard)  => { 
//         card.addEventListener("click", (event) => {
//         card.style.visibility="hidden";
//         indCard.style.visibility="visible";
//         });
//         count++; 
        // if (count===1) {
        //     let cardClick1 = cardList[card].className;
        //     console.log(cardClick1);
        // }
        // if (count===2) {
        //     if (cardClick1 == cardList[card].className) {
        //         console.log("Woohoo - 1 point!");
        //     } else {
        //         console.log("Try Again");
        //     }
        // }
        // });

   //   const flipfront = (event) => {
   //      event.target.style.visibility="hidden";
   //      };
   //   frontSideCard.forEach((card) => {
   //      card.addEventListener("click", flipfront);
   //   });

   //   const flipOver = (event) => {
   //      event.target.style.visibility="visible";
   //      };
   //  cardList.forEach((cardBack) => {
   //          cardBack.addEventListener("click", flipOver);
   //       });   
     
    //  cardList.style.visibility="visible";
    
        
       
// }


// let cardSet;
// empty array to display cards 


// window.onload = function() {
//     shuffleCards();
//     startGame();
// }

// let shuffleCards = () => {
//     cardSet = cardList.concat(cardList);  // This displays two of each card
//     console.log(cardSet);
//     // shuffle
//     for (let i = 0; i < cardSet.length; i++) {
//         let j = Math.floor(Math.random() * cardSet.length); //gets random i
//         //swap
//         let temp = cardSet[i];
//         cardSet[i] = cardSet[j];
//         cardSet[j] = temp;
//     }
//     console.log(cardSet);
// }

// const startGame = () => {

// }

// console.log(frontSideCard);
// const checkCards = frontSideCard.map((card)  => { 
//         card.addEventListener("click", (event) => {
//         card.style.visibility="hidden";
//         cardList[card].style.visibility="visible";
//         });
//         count++;
//         return;

        // if (count===1) {
        //     let cardClick1 = cardList[card].className;
        //     console.log(cardClick1);
        // }
        // if (count===2) {
        //     if (cardClick1 == cardList[card].className) {
        //         console.log("Woohoo - 1 point!");
        //     } else {
        //         console.log("Try Again");
        //     }
        // }
        // });



// Game begins with blank screen

// Click on/off button then frontSideCards displays









