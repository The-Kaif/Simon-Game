var buttonColor=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
// click function



var started = false;
var level = 0;

// adding button pressd in this function with some logic

$(document).keypress(function() {
  if(!started){
    $("#level-title").text("Level " + level);
    nextSquence();
    started = true;
  }
});

$(".btn1").click(function() {
  if(!started){
    $("#level-title").text("Level " + level);
    nextSquence();
    started = true;
  }
});

$(".btn").click(function(){
var userChosenColor= $(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
  console.log("success");
  if(userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
      nextSquence();
    },1000 );
  }
}
else {
  console.log("wrong")
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200)
  $("#level-title").text("Game Over, Press Any Key to Restart")
  startOver();

}
}

function nextSquence(){
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);
var randomNumber = Math.floor(Math.random() * 4);

// console.log(Math.random());

var randomChosenColour = buttonColor[randomNumber];

// alert(randomNumber)
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

// var audio= new Audio("sounds/" + randomChosenColour + ".mp3");
// audio.play();

playSound(randomChosenColour);

}

function playSound(name){
  var audio= new Audio("sounds/" + name + ".mp3");
  audio.play();
  // randomNumber generator function

}
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout (function(){
  $("#" + currentColor).removeClass("pressed");

} ,100);
}
function startOver(){
  level=0

  gamePattern=[];

  started=false;
}
// function jkl(){
//   $('[data-toggle="popover"]').popover();
// };
