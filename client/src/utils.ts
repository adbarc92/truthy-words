// CREDIT: https://www.freecodecamp.org/news/javascript-debounce-example/

export const createDebounceFn = (fn, delay): (() => void) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
};
