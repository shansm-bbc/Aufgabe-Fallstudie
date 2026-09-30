import ChronicleForm from "@/components/ChronicleForm";
import { redirect, useLoaderData, useNavigate } from "react-router";
import { fetchChronicleById, updateChronicle } from "@/lib/chronicles";

async function clientLoader({ params }) {
  return await fetchChronicleById(params.id);
}

async function clientAction({ request, params }) {
  const formData = await request.formData();
  const chronicle = Object.fromEntries(formData);
  chronicle.id = params.id;

  try {
    await updateChronicle(chronicle);

    return redirect(`/chronicles/${params.id}`);
  } catch (error) {
    console.log(error);
    throw new Error("Die Chronik konnte nicht gespeichert werden.");
  }
}

export default function ChronicleEditRoute() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/chronicles/${data.id}`);
  };
  return (
    <>
      <h2>Chronik Bearbeiten:</h2>
      <ChronicleForm chronicle={data} onCancel={goBack} />
    </>
  );
}

ChronicleEditRoute.loader = clientLoader;
ChronicleEditRoute.action = clientAction;
