// type MyFlexibleDogInfo = {
//   name: string;
// } & Record<string, string>;

type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: "LG",
  breed: "Mutt",
  age: 22,
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Listeners<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (
    newValue: T[Property]
  ) => void;
} & {
  [Property in keyof T as `on${Capitalize<string & Property>}Delete`]?: (
    newValue: T[Property]
  ) => void;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

function listenToObj<T>(obj: T, listeners: Listeners<T>): void {}

const lg: DogInfo = { name: "LG", age: 12 };

type DogInfoListeners = Listeners<DogInfo>;

listenToObj(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
  onNameDelete: () => {},
});
