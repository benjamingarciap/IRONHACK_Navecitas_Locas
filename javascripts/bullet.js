class Bullet {
  constructor(x, y, y0, h, ctx) {
    this.x = x;
    this.y = y;
    this.y0 = y0
    this.ctx = ctx
    this.r = 8; //<-- bullet size
    this.img = new Image();
    this.img.src = "imgs/bullet1.png";
    this.w = 19
    this.h = 19
    this.vx = 10;
    this.vy = 15;  

    this.gravity = 0.25;
  }

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
  }

  move() {
    this.y -= this.vy ;
  }
}
