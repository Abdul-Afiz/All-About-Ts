import houses from "./houses.json";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

//if stringify data
// function findHouses(houses: string): HouseWithID[];

// //if stringify data with filter
// function findHouses(
//   houses: string,
//   filter: (house: House) => boolean
// ): HouseWithID[];

// if array of data
// function findHouses(houses: string | House[]): HouseWithID[];

//if array of data with filter
function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => ({
    ...house,
    id: houses.indexOf(house),
  }));
}

// function findHouses(
//   arg1: unknown,
//   arg2?: (filter: House) => boolean
// ): HouseWithID[] {
//   if (typeof arg1 === "string") {
//     const stringToArr = arg1.split("");
//     return stringToArr.map((house, i) => ({ ...house, id: i }));
//   } else {
//   }
// }

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
