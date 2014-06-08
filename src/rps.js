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
  var victory = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
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
  if (game.gameOver == false){
  this.move = move;
}
else
  $('#results').html("You must start a new game before your can pick a move.");
}

Player.prototype.winBattle = function(){
  this.victoryCount += 1;
  $('#results').html(this.name + " wins the battle!");
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

Game.prototype.startGame = function(){
  this.gameOver = false;
  this.playerA  = new Player("Player A");
  this.playerB  = new Player("Player B");
  $('#results').html('');
  this.showScore();  
}

Game.prototype.showScore = function(){
  $('#scoreA').html(this.playerA.victoryCount);
  $('#scoreB').html(this.playerB.victoryCount);

}
Game.prototype.endGame = function(){
  $that = this;
  this.gameOver = true;
  this.playerA.move = undefined;
  this.playerB.move = undefined;
  if(this.playerA.winWar){
    $('#results').html(this.playerA.name + " wins the war!");
  }
  else
  {
    $('#results').html(this.playerB.name + " wins the war!");
  }
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
      $('#results').html("It's a tie");

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
  if (playerA.winWar() || playerB.winWar()){
    game.endGame();
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
  $('.newGameBtn').click(function(){
    game.startGame();
  });


})