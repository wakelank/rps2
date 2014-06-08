// function doesBeat(moveA, moveB) {
//   if (moveA == 'paper' && moveB == 'rock'){
//     return true;
//   }
//   if (moveA == 'rock' && moveB == 'scissors'){
//     return true;
//   }
//   if (moveA == 'scissors' && moveB == 'paper'){
//     return true;
//   }
//   if (moveA == 'rock' && moveB =='paper'){
//     return false;
//   }
// }

// rockWin =[scissors]
// paperWin=[rock]
// scissorsWin=[paper]



// return victory[moveA] = moveB

function doesBeat(moveA, moveB){
victory = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
return victory[moveA] == moveB

}

function doesTie(moveA, moveB){
 return moveA == moveB;
}



function Player(name){
  this.name         = name
  this.victoryCount = 0
}

Player.prototype.pickMove = function(move){
  this.move = move;
}

Player.prototype.winBattle = function(){
  this.victoryCount += 1;
}

Player.prototype.winWar = function(){
  return this.victoryCount == 3;

  }

Player.prototype.tieLose = function(){
    this.victoryCount = 0;
}


function Game(){
  this.playerA  = undefined;
  this.playerB  = undefined;
  this.gameOver = true;
}

Game.prototype.startGame = function(playerA, playerB){
  this.gameOver = false;
  this.playerA  = new Player("playerA");
  this.playerB  = new Player("playerB");
  

}

Game.prototype.showScore = function(){
  $('.scoreA').html(this.playerA.victoryCount);
  $('.scoreB').html(this.playerB.victoryCount);

}

Game.prototype.shoot = function(){
  var moveA = this.playerA.move;
  var moveB = this.playerB.move;
  var playerA = this.playerA;
  var playerB = this.playerB;

  if (moveA && moveB){
    if (doesTie(moveA, moveB)){
      playerA.tieLose();
      playerB.tieLose();
    }
    else {
      if (doesBeat(moveA, moveB)){
        playerA.winBattle();
        playerB.tieLose();
      }
      else{
        playerB.winBattle();
        playerA.tieLose();
      }
    }
  }
  if (playerA.winWar || playerB.winWar){
    this.gameOver = true;
  }
  this.showScore();


}





 
  var game = new Game();
 

$(function(){

  var moveA = undefined;
  var moveB = undefined;


  game.startGame();



  $('.buttonA').click(function(){
    var moveA = $(this).attr('id');
    game.playerA.pickMove(moveA);
  });

  $('.buttonB').click(function(){
    var moveB = $(this).attr('id');
    game.playerB.pickMove(moveB);
  });
  $('.shoot').click(function(){
    game.shoot();
  });


})