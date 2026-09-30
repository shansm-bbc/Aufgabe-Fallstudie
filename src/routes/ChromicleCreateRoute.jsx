import { redirect, useNavigate } from "react-router";
import ChronicleForm from "@/components/ChronicleForm";
import { createChronicle } from "@/lib/chronicles";

async function clientAction({ request, params }) {
  const formData = await request.formData();
  const chronicle = Object.fromEntries(formData);
  await createChronicle(chronicle);
  return redirect("/");
}

export default function ChronicleCreateRoute() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <h2>Neue Chronik erstellen</h2>
      <ChronicleForm onCancel={goBack} />
    </>
  );
}

ChronicleCreateRoute.action = clientAction;
