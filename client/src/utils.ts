// CREDIT: https://www.freecodecamp.org/news/javascript-debounce-example/

const createDebounceFn = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
};
