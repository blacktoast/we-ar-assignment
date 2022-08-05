//TODO 공이 가져야 할 상태는? 랜덤한 내부속도? 이걸 외부에서 넣어줄까?
// 속도 , 좌표,

export class Ball {
  ctx: CanvasRenderingContext2D;
  radius: number;
  x: number;
  y: number;
  speed: number;
  an: number;
  constructor(
    ctx: CanvasRenderingContext2D,
    radius: number,
    x: number,
    y: number,
    speed: number
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.an = Math.random() * (Math.PI * 2);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.closePath();
  }

  //초당 움직이는 픽셀은 frame * 프레임당 움직일 픽셀= 초당 픽셀
  move(dx: number, dy: number, delta: number) {
    this.x += 200 * (delta / 1000) * Math.cos(this.an);
    this.y += 200 * (delta / 1000) * Math.sin(this.an);

    this.draw();
  }
}
