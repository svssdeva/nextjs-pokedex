import { useEffect, useState } from 'react';
import PokemonListWrapper from '../../components/pokemonListWrapper';
import getPokemons, { PokemonList, PokemonListQuery } from '../api/pokemons';

import cn from 'clsx';

export default function Pokemon() {
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const query: PokemonListQuery = { type: `pokemon`, limit: 20, offset: 0 };
  useEffect(() => {
    setLoading(true);
    getDataFromAPI();
  }, []);

  const getDataFromAPI = () => {
    getPokemons(query)
      .then(
        res => {
          // @ts-ignore
          setPokemons(prev => [...prev, ...res.list]);
        },
        err => {
          console.error(err);
        }
      )
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const loadMore = () => {
    query.offset += query.limit;
    getDataFromAPI();
  };
  if (isLoading) {
    return (
      <>
        <h1>Loading Data...</h1>
      </>
    );
  } else {
    return (
      <div className="wrapper">
        <h1 className={cn('mb-4')}>Hi from pokemon page</h1>

        <PokemonListWrapper pokemons={pokemons} />
        <div className={cn('flex justify-center my-4')}>
          <button
            className={cn(
              'bg-red-600 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-red-500 transition-all duration-300 load-more-btn'
            )}
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      </div>
    );
  }
}
// href={pathname: /pokemon/${pokemon.id}, query: {name: 'lll'}}
