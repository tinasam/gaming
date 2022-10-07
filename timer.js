// Timer
// const timer = document.getElementById("timer");
export const startTimer = (sec, timeInterval) => {
    clearInterval(timeInterval);
    // if (sec!=0)
    timeInterval = setInterval(function(){
     
      
     // Next, we reduced a  second since one second is passed
     if (sec!=0) {
      sec--
      return timer.innerHTML = (sec < 10 ? '0' + sec : sec)
     } else {
       clearInterval(timeInterval);
     }
    }, 1000)
    
  }