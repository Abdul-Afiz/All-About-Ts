//Readonly & immutability in typescript

//by adding readonly to a field or interface, u can make it immutable

/*

readOnly || ReadOnly<Interface>

*/

interface Cat {
  name: string;
  breed: string;
}

type readOnlyCat = Readonly<Cat>;

const makeCat = (name: string, breed: string): readOnlyCat => {
  return {
    name,
    breed,
  };
};

const kusol = makeCat("kusool", "tebi");

// kusol.name = "meaddl"; error

const makeCoor = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => [x, y, z];

const readOnlyNum = makeCoor(2, 3, 1);
// readOnlyNum[0] = 0; Cannot assign to '0' because it is a read-only property.

const trueConst = [7, 8, 9] as const;

// trueConst[0] = 90; Cannot assign to '0' because it is a read-only property
