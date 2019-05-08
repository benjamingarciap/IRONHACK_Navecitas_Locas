class Background {
    //== BACKGROUND CONSTRUCTOR ==// 
    constructor(w, h, ctx){
         //--basic background image creation--//
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "imgs/background-01.png";
        //--basic background image dimensions--//
        this.h = h;
        this.w = w;
        //--basic background image axis postion--//
        this.x = 0;
        this.y = 0;
        //--movement increment operator--//
        this.dy = 1;
    }
    
    //== DRAW METHOD ==// 
    draw() {

      this.ctx.drawImage(
        this.img,
        this.x,
        this.y - this.h,
        this.w,  
        this.h
        );

      this.ctx.drawImage(
        this.img,
        this.x,
        this.y, 
        this.w,
        this.h
        );

    }

    //== DRAW METHOD ==// 
    move() {
      
        this.y += this.dy;
        if (this.y > this.h) this.y = 0;

    }
}

class Background2 {
  //== BACKGROUND CONSTRUCTOR ==// 
  constructor(w, h, ctx){
       //--basic background image creation--//
      this.ctx = ctx;
      this.img = new Image();
      this.img.src = "imgs/background-stars.png";
      //--basic background image dimensions--//
      this.h = h;
      this.w = w;
      //--basic background image axis postion--//
      this.x = 0;
      this.y = 0;
      //--movement increment operator--//
      this.dy = 0.7;
  }
  
  //== DRAW METHOD ==// 
  draw() {

    this.ctx.drawImage(
      this.img,
      this.x,
      this.y - this.h,
      this.w,  
      this.h
      );

    this.ctx.drawImage(
      this.img,
      this.x,
      this.y, 
      this.w,
      this.h
      );

  }

  //== DRAW METHOD ==// 
  move() {
    
      this.y += this.dy;
      if (this.y > this.h) this.y = 0;

  }
}

class Background3 {
  //== BACKGROUND CONSTRUCTOR ==// 
  constructor(w, h, ctx){
       //--basic background image creation--//
      this.ctx = ctx;
      this.img = new Image();
      this.img.src = "imgs/background-stars 2.png";
      //--basic background image dimensions--//
      this.h = h;
      this.w = w;
      //--basic background image axis postion--//
      this.x = 0;
      this.y = 0;
      //--movement increment operator--//
      this.dy = 0.4;
  }
  
  //== DRAW METHOD ==// 
  draw() {

    this.ctx.drawImage(
      this.img,
      this.x,
      this.y - this.h,
      this.w,  
      this.h
      );

    this.ctx.drawImage(
      this.img,
      this.x,
      this.y, 
      this.w,
      this.h
      );

  }

  //== DRAW METHOD ==// 
  move() {
    
      this.y += this.dy;
      if (this.y > this.h) this.y = 0;

  }
}