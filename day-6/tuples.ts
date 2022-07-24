type threeCoord = [x: number, y: number, z: number];

const add3Cord = (c1: threeCoord, c2: threeCoord): threeCoord => {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
};

console.log(add3Cord([9, 89, 7], [1, 1, 3]));

//using for react state type --- usestate

const simpleStringState = (
  init: string
): [() => string, (v: string) => void] => {
  let str: string = init;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
};

const [str1, setString] = simpleStringState("hello");
console.log(str1());
setString("hello World");
console.log(str1());
