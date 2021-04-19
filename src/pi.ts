// approximated by Leibniz formula
// https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80

export const f = (num: number): number => {
  return (-1) ** num / (2 * num + 1);
};
export const g = (num: number): number => {
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += f(i);
  }
  return result * 4;
};

// console.log(g(5));
// console.log(g(10));
// console.log(g(20));

// approximated by Mandelbrot set
// https://www.youtube.com/watch?v=d0vY0CKYhPY&list=PL4870492ACBDC2E7C&index=3
// export const h = (num) => {};

// spigot algorithm
// https://en.wikipedia.org/wiki/Spigot_algorithm
// https://www.youtube.com/watch?v=K305Vu7hFg0
