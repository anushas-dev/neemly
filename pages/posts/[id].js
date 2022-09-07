import { useRouter } from "next/router";
export default function ViewPost() {
  const router = useRouter();
  const { id } = router.query;
  const pid = id.toUpperCase()
  return <h1 class="text-center">{pid}</h1>;
}
