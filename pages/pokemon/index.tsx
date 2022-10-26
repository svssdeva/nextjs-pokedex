import { useRouter } from 'next/router';
export default function Pokemon() {
  const router = useRouter();
  const { id } = router.query;
  return <div> Hi from pokemon page, current id : {id}</div>;
}
