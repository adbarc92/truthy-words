// CREDIT: https://www.freecodecamp.org/news/javascript-debounce-example/

export const createDebounceFn = (
  fn: (term: string) => void,
  delay = 500
): ((term: string) => void) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(...args);
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
