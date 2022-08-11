import { Ball } from "./ball";
import "./style.css";
import { getRandom10to20, getRandomSpeed, getRandomXY } from "./utils";

const canvas = document.querySelector<HTMLCanvasElement>("#app");
const ctx = canvas?.getContext("2d");

const run = () => {
  const ballNumber = getRandom10to20();

  const balls: Ball[] = [];
  if (ctx) {
    Array(ballNumber)
      .fill(0)
      .forEach(() => {
        const radaius = getRandom10to20();
        const [x, y] = getRandomXY();
        const a = new Ball(ctx, radaius, x, y, getRandomSpeed());
        balls.push(a);
        a.draw();
      });

    const a = (delta: number) => {
      balls.forEach((ball, i) => {
        for (let j = 0; j < balls.length; j++) {
          if (i !== j) {
            ball.collision(balls[j], delta);
          }
        }
        ball.acc(delta);
      });
    };

    let lastTick = performance.now();
    const play = (tick: number) => {
      const delta = tick - lastTick;
      lastTick = tick;
      ctx.clearRect(0, 0, canvas?.width as number, canvas?.height as number);
      a(delta);
      requestAnimationFrame(play);
    };

    requestAnimationFrame(play);
  }
};

run();
