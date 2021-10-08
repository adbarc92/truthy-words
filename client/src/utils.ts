// CREDIT: https://www.freecodecamp.org/news/javascript-debounce-example/

export const createDebounceFn = (fn, delay = 500): (() => void) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
};

export const getWordValidity = (data): boolean => {
  if (
    !data.fl ||
    !['adverb', 'adjective', 'noun', 'verb'].includes(data.fl)
  ) {
    return false;
  }
  return true;
};
