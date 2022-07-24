// creating a function with type

export default function addNum(a: number, b: number) {
  return a + b;
}

export const addStr = (a: string, b: string = "b") => `${a} ${b}`;

//defining union ==>

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;
export const printFormat = (title: string, param: string | number): void =>
  console.log(format(title, param));

export const fetchData = (url: string) => Promise.resolve(`Data from ${url}`);
// if there's an issue where my promise is telling me undefined, go to tsconfig, then target and change to esnext

// using for spread operators

function introduction(salutation: string, ...names: Array<string>): string {
  return `${salutation} ${names.join(" ")}`;
}

//misconception on TypeScript

//Ts only enforces types at compile time not runtime sample below

export const getName = (user: { first: string; last: string }): string =>
  `${user?.first ?? "first"} ${user?.last ?? "last"}`;
