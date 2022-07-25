//using keyof with generics

/*
DataType represent a data type which is an object in this aspect {}

KeyType represent a data which is one of the key in DataType object

using "extends keyof" indicate KeyType should be one of the DataType key
*/

const plucvk = <DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] => {
  return items.map((item) => item[key]);
};

const dogs = [
  { name: "bingo", age: 10 },
  { name: "taya", age: 20 },
];

console.log(plucvk(dogs, "age"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

const sendEvent = <Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void => {
  console.log([name, data]);
};

sendEvent("addToCart", {
  productId: "dse",
  quantity: 1,
  time: 10,
  user: "checked",
});
sendEvent("checkout", {
  time: 20,
  user: "hecked",
});
