var sec=0, min=0, hr=0;

const appendSec=document.getElementById("sec");
const appendMin=document.getElementById("min");
const appendHr=document.getElementById("hr");

const startButton=document.getElementById("start-button");
const stopButton=document.getElementById("stop-button");
const resetButton=document.getElementById("reset-button");

const timer=document.getElementById("timer");


var intervalId=null;

//Start Timer function

function startTimer () {
    sec++; 
    if(sec <10){
      appendSec.innerHTML = "0" + sec;
    }
    else{
        appendSec.innerHTML=sec;
    } 
    
    if (sec==60) {
      min++;
      sec = 0;
      if (min <10){
        appendMin.innerHTML = "0" + min;
      }
      else{
        appendMin.innerHTML = min;
      }
      appendSec.innerHTML = "0" + sec;
    }

    if(min==60){
      hr++;
      min=0, sec=0;
      if(hr<10){
        appendHr.innerHTML = "0" + hr;
      }
      else{
        appendHr.innerHTML = hr;
      }
      appendMin.innerHTML = "0" + min;
      appendSec.innerHTML = "0" + sec;
    }
}

//start Button event
startButton.onclick = function(){
    if(intervalId!=null){
        clearInterval(intervalId);
    }
    // timer.style.color="white";
    timer.style.color="#22db72";
    intervalId = setInterval(startTimer, 1000);
  }
  
  //stop button event 
stopButton.onclick = function() {
      timer.style.color="#f24c4c";
       clearInterval(intervalId);
      
}
  
//reset button event
resetButton.onclick = function() {
    clearInterval(intervalId);
    timer.style.color="white";
    sec=0,min=0,hr=0;
    appendSec.innerHTML = "00";
    appendMin.innerHTML = "00";
    appendHr.innerHTML = "00";	
}
