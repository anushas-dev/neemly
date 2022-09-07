import { useRouter } from "next/router";
export default function ViewTask() {
  const router = useRouter();
  const { id } = router.query
  const tid = id.toUpperCase()
  return <h1 class="text-center">{tid}</h1>;
}
