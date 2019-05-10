//Scoreboard logic
var ScoreBoard = {
  ctx: undefined,
  init: function(ctx) {
    ctx.font = "25px sans-serif";
    this.ctx = ctx;
  },
  update: function(score) {
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`SCORE ${Math.floor(score)}`, 270, 140);
  }
};
