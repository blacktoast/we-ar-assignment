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
  acc(delta: number, isColision = false) {
    if (
      (delta.toFixed(5) !== this.delta.toFixed(5) && Math.ceil(delta) < 1000) ||
      isColision
    ) {
      if (this.dx < 0) {
        this.dx = this.speed * (1 / 60) * Math.cos(this.an) * -1;
      } else {
        this.dx = this.speed * (1 / 60) * Math.cos(this.an);
      }

      if (this.dy < 0) {
        this.dy = this.speed * (1 / 60) * Math.sin(this.an) * -1;
      } else {
        this.dy = this.speed * (1 / 60) * Math.sin(this.an);
      }

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

  // 새로 잡은 좌표가 겹쳐서 계속 콜리전이 발생
  collision(ball: Ball, delta) {
    const [posX, posY] = [this.x + this.dx, this.y + this.dy];
    const [targetX, targetY] = [ball.x + ball.dx, ball.y + ball.dy];

    const xx = Math.ceil(targetX - posX);
    const yy = Math.ceil(targetY - posY);
    const sumRadius = Math.ceil(this.radius + ball.radius);
    // console.log(xx, yy, sumRadius);
    if (xx ** 2 + yy ** 2 <= sumRadius ** 2) {
      const tmp = ball.an;
      ball.an = -this.an;
      this.an = -tmp;
      this.acc(delta, true);
      ball.acc(delta, true);
    }
  }
}
//delta 값에 의한 수정은 계속해서 발생한다.
