const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as String;
export default async function getPokemons(query: PokemonListQuery) {
  const url = `${baseUrl}/${query.type}?offset=${query.offset}&limit=${query.limit}`;
  const res = await fetch(url);
  const data = await res.json();
  let list: PokemonList[] = [];
  if (data && data.results) {
    list = data.results.map(
      (item: any, index: number) => new PokemonList(item, index)
    );
  }
  return { list };
}

export class PokemonListQuery {
  type: string;
  limit: number;
  offset: number;
  constructor(props: any = {}) {
    this.type = props.type || 'pokemon';
    this.limit = props.limit || 20;
    this.offset = props.offset || 0;
  }
}

export class PokemonList {
  id: number;
  name: string;
  image: string;
  constructor(props: any = {}, index: number) {
    this.id = index + 1 || 0;
    this.name = props.name || '';
    this.image = `${process.env.NEXT_PUBLIC_IMAGE_URL}${this.id}.png`;
  }
}
