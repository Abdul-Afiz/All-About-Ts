const myForEach = <T>(items: T[], func: (v: T) => void): void => {
  items.reduce((a, b) => {
    func(b);
    return undefined;
  }, undefined);
};

const myFilter = <T>(items: T[], filter: (v: T) => boolean): T[] =>
  items.reduce((a, b) => (filter(b) ? [...a, b] : a), [] as T[]);

const myMap = <T, K>(items: T[], func: (v: T) => K): K[] =>
  items.reduce((a, b) => [...a, func(b)], [] as K[]);

const mySome = <T>(items: T[], check: (v: T) => boolean): boolean => {
  return items.reduce((a, b) => (check(b) ? true : a), false);
};

const myFind = <T>(items: T[], func: (v: T) => boolean): T | undefined => {
  return items
    .reverse()
    .reduce((a, b) => (func(b) ? b : a), undefined as T | undefined);
};

myForEach([1, 2, 3, 4, 5], (v) => console.log(v));

console.log(myFilter([1, 2, 3, 4, 5, 6], (v) => v % 2 === 0));

console.log(myMap([1, 2, 3, 4, 5, 6], (v) => v ** 2));

console.log(myFind([1, 2, 3, 4, 5, 6], (v) => v % 2 === 0));

console.log(mySome([1, 2, 3, 4, 5], (v) => v % 2 === 0));
