import { useEffect, useState } from 'react';
import getPokemons, { PokemonList, PokemonListQuery } from '../api/pokemons';

export default function Pokemon() {
  const [pokemons, setPokemons] = useState({ pokemons: [] as PokemonList[] });
  const [isLoading, setLoading] = useState(false);
  const query: PokemonListQuery = { type: `pokemon`, limit: 20, offset: 0 };
  useEffect(() => {
    setLoading(true);
    getPokemons(query).then(
      res => {
        console.log(res);
        
//         pokemons.pokemons = [...pokemons.pokemons, ...res.list];
//         setPokemons(pokemons);
        setPokemons( (prev) => [...prev, ...res.list] )
        setLoading(false);
      },
      err => {
        console.error(err);
        setLoading(false);
      }
    );
  }, []);
  return (
    <div className="wrapper">
      <h1>Hi from pokemon page</h1>
      
      <PokemonListWrapper data={pokemons} />
    </div>
  );
}
// href={pathname: /pokemon/${pokemon.id}, query: {name: 'lll'}}
