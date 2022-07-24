interface Coordinate {
  x: number;
  y: number;
}

// const parseCoordFromObj = (obj: Coordinate): Coordinate => {
//   return {
//     ...obj,
//   };
// };

// const parseCoordFromNum = (x: number, y: number): Coordinate => {
//   return {
//     x,
//     y,
//   };
// };

// Function overloading

function parseCoord(obj: string): Coordinate;
function parseCoord(obj: Coordinate): Coordinate;
function parseCoord(x: number, y: number): Coordinate;

function parseCoord(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = +value;
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoord(10, 20));
console.log(parseCoord({ x: 1, y: 2 }));
console.log(parseCoord("x: 12,y: 22"));
