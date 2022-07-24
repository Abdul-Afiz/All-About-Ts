//declaring variable types

let userName: string = "jack";

let isLoggedIn: boolean = true;

console.log(isLoggedIn);

let myNo: number = 10;

const myRegex = /foo/;

// Pressing cmd K + i, will show you each variable type

const names: string[] = userName.split(" ");

const myValues: Array<number> = [1, 2, 3];

// using interface

interface Person {
  first: string;
  last: string;
  cool?: boolean;
}

const myPerson: Person = {
  first: "Jack",
  last: "Harin",
  cool: true,
};

// using Record (TypeScript Utility) helps to define the type of object key and value

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

if (ids[30] === "ab") {
  ids[30] === "ab";
}

// using forloop ts will infer data type automatically
for (let i = 0; i < 20; i++) {
  console.log(i);
}
