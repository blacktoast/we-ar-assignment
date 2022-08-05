import { Ball } from "./ball";
import "./style.css";
import { getRandom10to20, getRandomXY } from "./utils";

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
        const a = new Ball(ctx, radaius, x, y, 100);
        balls.push(a);
        // a.draw();
      });
    const a = (delta: number) => {
      balls.forEach((ball) => {
        ball.move(200, 200, delta);
      });
    };

    let lastTick = performance.now();
    const play = (tick: number) => {
      const delta = tick - lastTick;
      lastTick = tick;
      ctx.clearRect(0, 0, canvas?.width, canvas?.height);
      a(delta);
      requestAnimationFrame(play);
    };

    requestAnimationFrame(play);
  }
};

run();
