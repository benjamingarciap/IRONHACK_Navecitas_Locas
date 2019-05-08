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
        this.img.src = "imgs/player_1-01ani-01.png";

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
        this.w = 55;
        this.h = 60;

        //--movement velocity--//
        this.vy = 1;
        this.vx = 1;

        //--bullets array--//
        this.bullets = [];

        //--keyPress array--//
        //this.keyPress = undefined;
        this.keyPress = []
        this.keyCode = [];
        this.freezeFrameUp = false;
        this.freezeFrameDown = false;

    }
    
    //== DRAW METHOD ==// 
    draw(framesCounter) {
      //console.log(this.bullets)
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
        this.clearBullets()
        //console.log(this.keyCode)
       // console.log(this.keyPress)


  
    }

    //== MOVE SHIP EVENTS LOGIC ==//
    moveShip(){

        //move right
        
        if (this.x <= 600 && this.keyCode.includes(this.keys.RIGHT_KEY) && this.keyPress.includes(this.keys.RIGHT_KEY)) {
        //if (this.keyCode.includes(this.keys.RIGHT_KEY) && this.keyPress === true) {
          this.x += 2;
          //this.vx += 7;
        }

        //move left
       
         if (this.x >= 0 && this.keyCode.includes(this.keys.LEFT_KEY) && this.keyPress.includes(this.keys.LEFT_KEY)) {
         //if (this.keyCode.includes(this.keys.LEFT_KEY) && this.keyPress === true) {
          this.x -= 2;
          //this.vx -= 7;
        }

        //move up and keeps frame 0 of ship exaust long

         if (this.y >= 0 && this.keyCode.includes(this.keys.UP_KEY) && this.keyPress.includes(this.keys.UP_KEY)) {
         //if (this.keyCode.includes(this.keys.UP_KEY) && this.keyPress === true) {
          this.y -= 2;
          //this.vy -= 7;
          this.freezeFrameUp = true
        }

        //move down
        
         if (this.y <= 900 && this.keyCode.includes(this.keys.DOWN_KEY) && this.keyPress.includes(this.keys.DOWN_KEY)) {
         //if (this.keyCode.includes(this.keys.DOWN_KEY) && this.keyPress === true) {
          this.y += 2;
          //this.vy += 7;
          this.freezeFrameDown = true
        }
        // // shoots 
        // else if (this.keyCode == this.keys.SPACE_KEY & this.keyPress === true) {
        //   this.shoot()

        // };

    };
  
    //== EVENTS LISTENERS LOGIC ==//
    setListeners() {

        document.onkeydown = function(e) {

            //this.keyCode = e.keyCode
            this.keyCode.push(e.keyCode)
            //this.keyPress = true;
            this.keyPress.push(e.keyCode)
            if (this.keyCode.includes(this.keys.SPACE_KEY)) {
              this.shoot()}
            

        }.bind(this);
        
        document.onkeyup = function(e) {
            this.keyCode.pop()
            this.keyPress.splice(this.keyPress.indexOf(e.keyCode), 1)
            //this.keyPress = false;
            this.freezeFrameUp = false; //this returns freeze frame to false for the animation of the exaust
            this.freezeFrameDown = false; //this returns freeze frame to false for the animation of the exaust

        }.bind(this);

    };

    //== CREATE BULLET AND PUSH TO ARRAY ==//
    shoot() {
      var bullet = new Bullet(
        this.x + this.w / 3,
        this.y + this.h / 10,
        this.y0,
        this.h,
        this.ctx
      );
        
      this.bullets.push(bullet);
    };
    
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
    };

    //--clear obstacles from array -- change x to y--//
    clearBullets() {
      this.bullets = this.bullets.filter(function(obstacle) {
        return obstacle.y >= 0;
      });
    }


}