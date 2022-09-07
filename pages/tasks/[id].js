import { useRouter } from "next/router";
export default function ViewTask() {
  const router = useRouter();
  const { id } = router.query
  return <h1 class="text-center">{id}</h1>;
}
