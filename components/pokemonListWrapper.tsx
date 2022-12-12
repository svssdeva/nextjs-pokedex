import { PokemonList } from '../pages/api/pokemons';

export default function PokemonListWrapper({pokemons}: {pokemons: PokemonList[]}) {
  console.log(pokemons);
}
