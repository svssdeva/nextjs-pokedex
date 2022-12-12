import { PokemonList } from '../pages/api/pokemons';
import s from '../styles/pokemonListWrapper.module.scss';
import cn from 'clsx'

export default function PokemonListWrapper({
  pokemons
}: {
  pokemons: PokemonList[];
}) {

  return (
    <>
      <div className={cn(s.mainGrid)}>
        {
          pokemons.map((item: PokemonList) => (
            <div key={item.id} className={cn(s.box)}>
              {item.name}
            </div>
          ))
        }
      </div>


    </>
  );
}
