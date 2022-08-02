import fetch from "node-fetch";

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";

function fetchPokemon(url: string, cb: (data: PokemonResults) => void): void;
function fetchPokemon(url: string): Promise<PokemonResults>;
function fetchPokemon(
  url: string,
  cb?: (data: PokemonResults) => void
): unknown {
  if (cb) {
    fetch(url)
      .then((res) => res.json())
      .then(cb as () => void);
    return undefined;
  } else {
    return fetch(url).then((res) => res.json());
  }
}

// fetchPokemon(pokemonUrl, (data) => {
//   data.results.forEach((pok) => console.log(pok.name));
// });

(async function () {
  const data = await fetchPokemon(pokemonUrl);
  data.results.forEach((pok) => console.log(pok.name));
})();
