//TODO 공이 가져야 할 상태는? 랜덤한 내부속도? 이걸 외부에서 넣어줄까?
// 속도 , 좌표,

export class Ball {
  ctx: CanvasRenderingContext2D;

  constructor(
    ctx: CanvasRenderingContext2D,
    radius: number,
    x: number,
    y: number
  ) {
    this.ctx = ctx;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {}
}
