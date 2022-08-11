const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandom10to20 = () => {
  return random(10, 20);
};

export const getRandomXY = () => {
  return [random(20, 980), random(20, 480)];
};

export const getRandomSpeed = () => {
  return random(200, 400);
};
