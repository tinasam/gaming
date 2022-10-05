// Baby matching game 
    //Click first card to reveal shape/image
    //Click second card to see if it matches
        //if the two cards match give one point and return "Woo-hoo!"
        //if the cards do not match return "Try Again"
    
    //Game ends in a "WIN"
        // when all uncovered cards match & points ==6
        // OR
        // after 1 minute expires return "Sorry game over"

let points = 0;
// Cards display
const cardList = document.querySelectorAll(".grid-item");
const startButton = document.querySelector ("#onOff");
const frontSideCard = document.querySelectorAll(".backgroundImg");

// Click to reveal shapes and images
// frontSideCard.addEventListener("click", (event) => {
//     frontSideCard.style.visibility="hidden";
//     cardList.style.visibility="visible";
// });

// cardList.addEventListener("click", (event) => {
//     cardList.style.visibility="hidden";
//     frontSideCard.style.visibility="visible";
// });
let count = 0;




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

     const flipfront = (event) => {
        event.target.style.visibility="hidden";
        };
     frontSideCard.forEach((card) => {
        card.addEventListener("click", flipfront);
     });

     const flipOver = (event) => {
        event.target.style.visibility="visible";
        };
    cardList.forEach((cardBack) => {
            cardBack.addEventListener("click", flipOver);
         });   
     
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



// startButton.addEventListener("click", (event) => {
//     startOver();
// });





