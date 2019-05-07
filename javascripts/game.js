const Game = {
  author: "Ben Garcia",
  version: "1.0 beta",
  canvas: undefined,
  ctx: undefined,
  winW: undefined,
  winH: undefined,
  fps: undefined,
  scoreBoard: undefined,
  framesCounter: 0,
  keys: {
    RIGHT_KEY: 39,
    LEFT_KEY: 37,
    UP_KEY: 38,
    DOWN_KEY: 40,
    SPACE_KEY: 32,
  },

  //== INITIALIZATION METHOD ==// 
  init: function(canvasId){

        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.setDimensions();
        this.setHandlers();
        this.start();
        

  },

  //== DEFINES TOTAL CANVAS DIMENSIONS ==// 
  setDimensions: function () {
        
        this.canvas.setAttribute('width', 650);
        this.canvas.setAttribute('height', 650);
        this.winH = 800;
        this.winW = 1280;

  },

  //== DEFINES RESPONSIVE CANVAS ==// 
  setHandlers: function () {

        window.onresize = () => this.setDimensions()

  },

  //== START INTERVAL METHOD ==// 
  start: function(){

      this.fps = 60;
      this.reset() //<--- inizialize reset before interval 

      //--initilize interval--//
      this.interval = setInterval( () => {

            //--clear all interations--//
            this.clear();
            
            //--frameCounter logic--//
            this.framesCounter++;
            if (this.framesCounter > 1000) {
              this.framesCounter = 0;
            };

            //--draw all iterations--//
            this.drawAll();

            //--move all iterations--//
            this.moveAll();
            this.clearObstacles();

            //--control obstacle generation times--//
            if (this.framesCounter % 300 === 0) {
                  this.generateObstacle();
            };
             
      })
  },

  //== RESET ALL METHOD ==//
  reset: function() {

    //this.obstacle = new Obstacle(this.canvas.width, this.canvas.height, this.ctx, this.keys)
    this.background = new Background(this.winW, this.winH, this.ctx);
    this.player1 = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys);
    this.framesCounter = 0;
    this.obstacles = [];

  },

   //== CLEAR ALL METHOD ==// 
  clear: function() {
    
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  },

  //== DRAW ALL METHOD ==// 
  drawAll: function() {

        this.background.draw();
        this.player1.draw(this.framesCounter);
        //this.obstacle.draw();
        this.obstacles.forEach(function(obstacle) {
            obstacle.draw();
          });
  
  },
     
  //== MOVE ALL METHOD ==// 
   moveAll: function() {
        //--background movement--//
        this.background.move();

        //--listener inicialization player1--//
        this.player1.setListeners();
        this.player1.moveShip();

        //--move all obstacles--//
        // this.obstacle.move();
       this.obstacles.forEach(function(obstacle) {
            obstacle.move();
          });

  },
  //== PUSH OBSTACLES TO THE OBSTACLE ARRAY ==// 
  generateObstacle: function() {
    this.obstacles.push(
      new Obstacle(this.canvas.width, this.player1.y0, this.player1.h, this.ctx)
    );
  },
  //--clear obstacles from array -- change x to y--//
  clearObstacles: function() {
      this.obstacles = this.obstacles.filter(function(obstacle) {
        return obstacle.x >= 0;
      });
    },
  
  
  
   
}