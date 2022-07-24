const printIngredient = (qty: string, ingredient: string, extra?: string) =>
  console.log(qty, ingredient, extra ? extra : "");

printIngredient("1C", "Flour", "jara");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

const getEmail = (user: User): string => {
  if (user.info) {
    return user.info.email!;
  }

  return "";
};

const getEmailEasy = (user: User): string => user?.info?.email ?? "";

const addWithCallBack = (a: number, b: number, callback?: () => void) => {
  console.log([a, b]);
  callback?.();
};
