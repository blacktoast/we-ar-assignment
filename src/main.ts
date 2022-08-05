import { Ball } from "./ball";
import "./style.css";
import { getRandom10to20, getRandomXY } from "./utils";

const canvas = document.querySelector<HTMLCanvasElement>("#app");
const ctx = canvas?.getContext("2d");

const run = () => {
  const ballNumber = getRandom10to20();
  if (ctx) {
    Array(ballNumber)
      .fill(0)
      .forEach(() => {
        const radaius = getRandom10to20();
        const [x, y] = getRandomXY();
        new Ball(ctx, radaius, x, y);
      });
  }
};

run();
