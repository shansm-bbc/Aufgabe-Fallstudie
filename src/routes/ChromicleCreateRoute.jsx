import { redirect, useActionData, useNavigate } from "react-router";
import ChronicleForm from "@/components/ChronicleForm";
import { createChronicle } from "@/lib/chronicles";
import { validateChronicle } from "@/lib/validateChronicle";

async function clientAction({ request, params }) {
  const formData = await request.formData();
  const chronicle = Object.fromEntries(formData);

  const { errors, isValid } = validateChronicle(chronicle);
  if (!isValid) {
    return errors;
  }

  await createChronicle(chronicle);
  return redirect("/");
}

export default function ChronicleCreateRoute() {
  const errors = useActionData();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <h2>Neue Chronik erstellen</h2>
      <ChronicleForm onCancel={goBack} errors={errors} />
    </>
  );
}

ChronicleCreateRoute.action = clientAction;
