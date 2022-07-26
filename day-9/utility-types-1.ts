// utility types

interface MyUser {
  name: string;
  id: number;
  email?: string;
}

// the Partial utility will make all field optional

const merge = (user: MyUser, overRides: Partial<MyUser>): MyUser => {
  return {
    ...user,
    ...overRides,
  };
};

console.log(merge({ name: "bazaar", id: 1 }, { name: "bizarre", id: 0 }));

// the Required utility will make all field required

type requiredField = Required<MyUser>;

// the Pick utility will allow you to specify the field you want

type selectField = Pick<MyUser, "name" | "email">;

// the Omit utility will allow you to specify the field you don't want

type removeField = Omit<MyUser, "id">;

// the Specifying key => this utility will allow you to specify the field you want

type chooseField = MyUser["id"];

const justMailandName = (users: MyUser[]): Record<chooseField, removeField> => {
  return users.reduce((a, c) => {
    const { id, ...other } = c;
    return { ...a, [id]: other };
  }, {});
};

console.log(
  justMailandName([
    { id: 1, name: "soft" },
    { id: 2, name: "softy" },
  ])
);
