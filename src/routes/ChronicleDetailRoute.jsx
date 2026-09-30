import { fetchChronicleById } from "@/lib/chronicles";
import LinkButton from "@/components/LinkButton";
import { useLoaderData } from "react-router";

async function clientLoader({ params }) {
  return await fetchChronicleById(params.id);
}

export default function ChronicleDetailRoute() {
  const data = useLoaderData();
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <br />
      <LinkButton to={"/"} children={"Zurück"} secondary={true} />
    </>
  );
}

ChronicleDetailRoute.loader = clientLoader;
