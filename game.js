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
frontSideCard.addEventListener("click", (event) => {
    frontSideCard.style.visibility="hidden";
    cardList.style.visibility="visible";
});

cardList.addEventListener("click", (event) => {
    cardList.style.visibility="hidden";
    frontSideCard.style.visibility="visible";
});

// cardList.forEach((card) => {

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

startButton.addEventListener("click", (event) => {
    startOver();
});





