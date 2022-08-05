//TODO 공이 가져야 할 상태는? 랜덤한 내부속도? 이걸 외부에서 넣어줄까?
// 속도 , 좌표,

export class Ball {
  ctx: CanvasRenderingContext2D;
  radius: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  speed: number;
  an: number;
  delta: number;
  static canvasW = 1000;
  static canvasH = 500;

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
    this.dx = 0;
    this.dy = 0;
    this.delta = 0;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.closePath();
  }

  //초당 움직이는 픽셀은 frame * 프레임당 움직일 픽셀= 초당 픽셀
  move(delta: number) {
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
  acc(delta: number) {
    if (delta.toFixed(5) !== this.delta.toFixed(5)) {
      this.dx = 200 * (delta / 1000) * Math.cos(this.an);
      this.dy = 200 * (delta / 1000) * Math.sin(this.an);
      console.log(
        "델타타임 차이 발생",
        delta.toFixed(5),
        this.delta.toFixed(5)
      );
      this.delta = delta;
    }
    const posX = this.x + this.dx;
    const posY = this.y + this.dy;

    if (posX > Ball.canvasW - this.radius || posX < this.radius) {
      this.dx = -this.dx;
    }

    if (posY > Ball.canvasH - this.radius || posY < this.radius) {
      this.dy = -this.dy;
    }

    this.move(delta);
  }
}
//delta 값에 의한 수정은 계속해서 발생한다.
