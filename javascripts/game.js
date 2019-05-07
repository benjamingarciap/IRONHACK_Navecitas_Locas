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
  obstacles: [],
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
        this.start();
        

  },

  //== DEFINES TOTAL CANVAS DIMENSIONS ==// 
  setDimensions: function () {
        
        this.canvas.setAttribute('width', 650);
        this.canvas.setAttribute('height', 650);
        this.winH = 800;
        this.winW = 1280;

  },

  //== START INTERVAL METHOD ==// 
  start: function(){

      this.fps = 1000;
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
            //this.clearObstacles();

            //--control obstacle generation times--//
            if (this.framesCounter % 300 === 0) {
                  this.generateObstacle();
            };

            //--checks for collisions player obstacle--//
            if (this.isCollisionObstaclePlayer()) {
              console.log("crash player")
              this.stop()
            };
            //--checks for collisions bullets obstacle--//
            this.isCollisionObstacleBullet()
            

            
      
             
      }, 1000/ this.fps)
  },

  //== STOP METHOD ==//
  stop: function() {

    clearInterval(this.interval);

  },

  //== RESET ALL METHOD ==//
  reset: function() {

    //this.obstacle = new Obstacle(this.canvas.width, this.canvas.height, this.ctx, this.keys)
    this.background = new Background(this.winW, this.winH, this.ctx);
    this.background2 = new Background2(this.winW, this.winH, this.ctx);
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
        this.background2.draw();
        this.player1.draw(this.framesCounter);
        this.obstacles.forEach(function(obstacle) {
            obstacle.draw();
          });
  
  },
     
  //== MOVE ALL METHOD ==// 
   moveAll: function() {
        //--background movement--//
        this.background.move();
        this.background2.move()

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
      /*this.obstacles = this.obstacles.filter(function(obstacle) {
        return obstacle.y >= 0;
      });*/
      if (this.obstacles.length > 15) {
        this.obstacles.pop()
      }
  },
  
  //== COLLITION LOGIC ==// 
  //--obstacle and player collition logic--//
  isCollisionObstaclePlayer: function() {
    // colisiones genéricas
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    // esto chequea que el personaje no estén en colisión con cualquier obstáculo
    return this.obstacles.some(obstacle => {
      return (
        this.player1.x + this.player1.w >= obstacle.x && //Lateral derecha
        this.player1.x <= obstacle.x + obstacle.w && // Lateral izquierda
        this.player1.y + (this.player1.h - 60) >= obstacle.y && //
        this.player1.y <= obstacle.y + obstacle.h
      );
    });
  },

  //--bullet and obstacle collition logic--//
  isCollisionObstacleBullet: function() {
    
    this.obstacles.forEach((obstacle,idx) => {
      if(
      this.player1.bullets.some(bullet => {
        //console.log(bullet.w,bullet.h)
        console.log(bullet.w)
        return (
          bullet.x + (bullet.w  ) >= obstacle.x && //Lateral derecha
          bullet.x  <= obstacle.x + obstacle.w   && // Lateral izquierda
          bullet.y + (bullet.h) >= obstacle.y &&
          bullet.y <= obstacle.y + obstacle.h

        )  
      })
      ){
        this.obstacles.splice(idx, 1)
        //console.log(this.obstacles)

        console.log("Man down")
      }

    })

  },
  
  
  
} 
