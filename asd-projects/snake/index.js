/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);
  var KEY = {
    "ENTER": 13,
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40,
  }
  var positionX = 0
  var positionY = 0
  var speedX = 0
  var speedY = 0

  ///////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  
    function newFrame() {
      repositionGameItem();
      redrawGameItem();
  
    }
    var head = {
      id : "#head",
      x: 0,
      y:0,
      speedX: 0,
      speedY: 0,
    };

    head.x += head.speedX

    function updatePositionHead(piece){
     piece.x += piece.speedX;
    }






    //////apple/////
    apple = {

    }







  
    

  
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {

    if (event.which === 13) {
      
      $('#snake').css("background-color" , `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`);
    }
    else if (event.which === 37) {
      speedX = -5
    
    }
    else if (event.which === 38) {
      speedY = -5
      
    }
    else if (event.which === 39) {
      speedX = 5
      
    }
    else if (event.which === 40) {
      speedY = 5
      
    }



  }
  function handleKeyUp(event){
     if (event.which === 37) {
      speedX = 0
      
    }
    else if (event.which === 38) {
      speedY = 0
      
    }
    else if (event.which === 39) {
      speedX = 0
     
    }
    else if (event.which === 40) {
      speedY = 0
      
    }
    
  }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  
} function randomRGB(){
  return Math.floor(Math.random() * 256);
}

function endGame() {
  // stop the interval timer
  clearInterval(interval);

  // turn off event handlers
  $(document).off();
}


function repositionGameItem() {
  positionX += speedX;
  positionY += speedY;
}


function redrawGameItem() {
  $("#snake").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
  $("#snake").css("top", positionY);
}



