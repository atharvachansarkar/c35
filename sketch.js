var database;
var canvas, backgroundImg
var playerCount
var gameState = 0
var form, player, game


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game()
  game.gameState()
  game.start()
  
  


 
}

function draw(){
  background("white");
  
  
    drawSprites();
  
}

