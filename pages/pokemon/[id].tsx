import { useRouter } from 'next/router';
export default function PokemonDetails() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Detail Page, current id : {id}</div>;
}
