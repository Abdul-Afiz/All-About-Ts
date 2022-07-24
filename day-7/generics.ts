//setting generic
const simpleState = <T>(init: T): [() => T, (v: T) => void] => {
  let str: T = init;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
};

const [state, setState] = simpleState(9);
console.log(state());
setState(50);
console.log(state());

//Overiding generic by declaring type
const [newState, setNewState] = simpleState<null | string>(null);

console.log(newState());
setNewState("string");
console.log(newState());

//creating a type generic

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
const ranker = <RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] => {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
};

interface PokeMon {
  name: string;
  hp: number;
}

const pokemon: PokeMon[] = [
  {
    name: "bulb",
    hp: 20,
  },
  {
    name: "mulb",
    hp: 5,
  },
];

console.log(ranker(pokemon, ({ hp }) => hp));
