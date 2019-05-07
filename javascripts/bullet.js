class Bullet {
  constructor(x, y, y0, h, ctx) {
    this.x = x;
    this.y = y;
    this.y0 = y0
    this.h = h
    this.ctx = ctx
    this.r = 3; //<-- bullet size
    this.vx = 10;
    this.vy = 10;

    this.gravity = 0.25;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.y -= this.vy + 3;

    //this.vy += this.gravity;
    //this.y -= this.vy;
    /*
    if (this.y > this.y0 + this.h) {
      this.vy *= -1;
    }*/
  }
}












/*
class Bullet {
  constructor(x, y, y0, h, ctx) {
    this.x = x;
    this.y = y;
    this.y0 = y0
    this.h = h
    this.ctx = ctx
    this.r = 5;
    this.vx = 10;
    this.vy = 1;

    this.gravity = 0.25;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.x += this.vx;

    this.vy += this.gravity;
    this.y += this.vy;

    if (this.y > this.y0 + this.h) {
      this.vy *= -1;
    }
  }
}
*/