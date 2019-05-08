// class Enemy {
 class Obstacle {
  //== ENEMY CONSTRUCTOR ==// 
  constructor(w, h, ctx, keys) {

       //--total canvas sizes--//
      this.canvasW = w;
      this.canvasH = h;

      //--basic player image creation--//
      this.ctx = ctx;
      this.keys = keys;
      this.img = new Image();
      this.img.src =  "imgs/obstacle.png";

      //--original player position--//
      this.x0 = this.canvasW * 0.45;   
      this.y0 = this.canvasH * 0.10;

      //--player position--//
      this.x = Math.floor(Math.random() * w);
      this.y = -30;

      //--player animation frames--//
      this.img.frames = 3;
      this.img.frameIndex = 0;

      //--player dimensions--//
      this.w = 60;
      this.h = 60;

      //--movement velocity--//
      this.vy = 2;
      this.vx = 1;

      //--bullets array--//
      this.bullets = [];

  };
  

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
    
  }
  //== DRAW METHOD ==// 
  move() {
    this.y += this.vy;
  }
  animateImg(framesCounter) {
  
    //-- changes velocity --//
    if (framesCounter % 32 === 0) {
      this.img.frameIndex += 1;

        //-- if its the last frame it begins again --//
        if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }
  };
  
  

}



// class Obstacle {
//   constructor(w, playerY, playerH, ctx) {
      
//       this.ctx = ctx;
//       this.img = new Image();
//       this.img.src = "imgs/enemy_1-01.png";
//       this.w = 50;
//       this.h = 50;
//       this.dx = 1.5;
//       this.x = Math.floor(Math.random() * w);
//       this.y = 0;  //playerY + playerH - this.h - 5;
    
//   }

//   draw() {

//     this.ctx.drawImage(

//       this.img,
//       //this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
//       //0,
//      // Math.floor(this.img.width / this.img.frames),
//       //this.img.height,
//       this.x,
//       this.y,
//       this.w,
//       this.h

//     );

//   }

//   move() {
//     this.y += this.dx;
//   }
// }