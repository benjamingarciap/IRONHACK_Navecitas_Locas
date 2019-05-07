class Player {
    //== PLAYER CONSTRUCTOR ==// 
    constructor(w, h, ctx, keys) {

         //--total canvas sizes--//
        this.canvasW = w;
        this.canvasH = h;

        //--basic player image creation--//
        this.ctx = ctx;
        this.keys = keys;
        this.img = new Image();
        this.img.src = "imgs/player_1-01ani-01.png";//"imgs/player_1-01ani-01.png";

        //--original player position--//
        this.x0 = this.canvasW * 0.45;
        this.y0 = this.canvasH * 0.80;

        //--player position--//
        this.x = this.x0
        this.y = this.y0;

        //--player animation frames--//
        this.img.frames = 3;
        this.img.frameIndex = 0;

        //--player dimensions--//
        this.w = 60;
        this.h = 60;

        //--movement velocity--//
        this.vy = 1;
        this.vx = 1;

        //--bullets array--//
        this.bullets = [];

        //--keyPress array--//
        this.keyPress = undefined;
        this.keyCode = undefined;
        this.freezeFrameUp = false;
        this.freezeFrameDown = false;

    }
    
    //== DRAW METHOD ==// 
    draw(framesCounter) {
     
      this.ctx.drawImage(

          this.img,
          this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
          0,
          Math.floor(this.img.width / this.img.frames),
          this.img.height,
          this.x,
          this.y,
          this.w,
          this.h

        );
        
        this.animateImg(framesCounter);
        
        this.bullets = this.bullets.filter(bullet => {
          return bullet.x < this.canvasW;
        });
    
        this.bullets.forEach(function(bullet) {
          bullet.draw();
          bullet.move();
        
      });
    }

    //== MOVE SHIP EVENTS LOGIC ==//
    moveShip(){

        //move right
        if (this.keyCode == this.keys.RIGHT_KEY & this.keyPress === true) {
          this.x += 2;
          this.vx += 7;
        }

        //move left
        else if (this.keyCode == this.keys.LEFT_KEY & this.keyPress === true) {
          this.x -= 2;
          this.vx -= 7;
        }

        //move up and keeps frame 0 of ship exaust long
        else if (this.keyCode == this.keys.UP_KEY & this.keyPress === true) {
          this.y -= 2;
          this.vy -= 7;
          this.freezeFrameUp = true
        }

        //move down
        else if (this.keyCode == this.keys.DOWN_KEY & this.keyPress === true) {
          this.y += 2;
          this.vy += 7;
          this.freezeFrameDown = true
        }
        // shoots 
        else if (this.keyCode == this.keys.SPACE_KEY & this.keyPress === true) {
          this.shoot()

        };

    };
  
    //== EVENTS LISTENERS LOGIC ==//
    setListeners() {

        document.onkeydown = function(e) {

            this.keyCode = e.keyCode
            this.keyPress = true;

        }.bind(this);
        
        document.onkeyup = function() {

            this.keyPress = false;
            this.freezeFrameUp = false //this returns freeze frame to false for the animation of the exaust
            this.freezeFrameDown = false //this returns freeze frame to false for the animation of the exaust

        }.bind(this);

    };

    //== CREATE BULLET AND PUSH TO ARRAY ==//
    shoot() {
      var bullet = new Bullet(
        this.x + this.w / 2,
        this.y + this.h / 10,
        this.y0,
        this.h,
        this.ctx
      );
  
      this.bullets.push(bullet);
    }
    
    //== CHANGES FRAMES AND MANIPULATION THE MODULO MAKES THE THREE FRAMES ANIMATION GO SLOWER OR FASTER ==//
    animateImg(framesCounter) {
      //-- keeps frameIndex in 0 if the ship is moving upwards --//
      if(this.freezeFrameUp === true) {
        this.img.frameIndex = 0
      }
      //-- keeps frameIndex in 0 if the ship is moving upwards --//
      if(this.freezeFrameDown === true) {
        this.img.frameIndex = 2
      }
      //-- changes velocity --//
      if (framesCounter % 24 === 0) {
        this.img.frameIndex += 1;

          //-- if its the last frame it begins again --//
          if (this.img.frameIndex > 2) this.img.frameIndex = 0;


      }
    }


}