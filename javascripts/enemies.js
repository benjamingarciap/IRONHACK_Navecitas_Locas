class Enemy {
  //== ENEMY CONSTRUCTOR ==// 
  constructor(w, h, ctx, keys) {

       //--total canvas sizes--//
      this.canvasW = w;
      this.canvasH = h;

      //--basic player image creation--//
      this.ctx = ctx;
      this.keys = keys;
      this.img = new Image();
      this.img.src = undefined;

      //--original player position--//
      this.x0 = this.canvasW * 0.45;   
      this.y0 = this.canvasH * 0.10;

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

  };

  //== DRAW METHOD ==// 
  draw() {
     
    this.ctx.drawImage(

        this.img,
        //this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
        //0,
       // Math.floor(this.img.width / this.img.frames),
        //this.img.height,
        this.x,
        this.y,
        this.w,
        this.h

      );
      
      //this.animateImg(framesCounter);
      /*
      this.bullets = this.bullets.filter(bullet => {
        return bullet.x < this.canvasW;
      });
  
      this.bullets.forEach(function(bullet) {
        bullet.draw();
        bullet.move();
      
    });*/
  }
  //== DRAW METHOD ==// 
  move() {
    this.y += this.vy;
  }

}

class Obstacle {
  constructor(w, playerY, playerH, ctx) {
      
      this.ctx = ctx;
      this.img = new Image();
      this.img.src = "imgs/enemy_1-01.png";
      this.w = 50;
      this.h = 50;
      this.dx = 2;
      this.x = Math.floor(Math.random() * w);
      this.y = 0;  //playerY + playerH - this.h - 5;
    
  }

  draw() {

    //this.ctx.fillStyle = "black";
    //this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.drawImage(

      this.img,
      //this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      //0,
     // Math.floor(this.img.width / this.img.frames),
      //this.img.height,
      this.x,
      this.y,
      this.w,
      this.h

    );

  }

  move() {
    this.y += this.dx;
  }
}