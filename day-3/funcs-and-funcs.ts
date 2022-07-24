// funcs and callback type

export function printToFile(str: string, callback: () => void): void {
  console.log(str);
  callback();
}

export type MutationFunct = (v: number) => number;

export function mutateArr(
  nums: Array<number>,
  mutate: MutationFunct
): number[] {
  return nums.map(mutate);
}

const myNewMutate: MutationFunct = (v) => v;

// console.log(mutateArr([1, 2, 3, 4], (v) => v ** 2));

//closure with Ts, function returning function

export type AdderFunct = (val: number) => number;

const createAdder =
  (num: number): AdderFunct =>
  (val: number) =>
    num + val;

// console.log(createAdder(21)(22));

const add1 = createAdder(2);

console.log(add1(5));
