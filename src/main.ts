import "./style.css";
import typescriptLogo from "./typescript.svg";

const canvas = document.querySelector<HTMLCanvasElement>("#app");
const ctx = canvas?.getContext("2d");

if (ctx) {
  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}
