import { fetchChronicleById, deleteChronicle } from "@/lib/chronicles";
import LinkButton from "@/components/LinkButton";
import {
  useLoaderData,
  useNavigate,
  useNavigationType,
  useParams,
} from "react-router";
import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";

async function clientLoader({ params }) {
  return await fetchChronicleById(params.id);
}

export default function ChronicleDetailRoute() {
  const params = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  const removeChronicle = async () => {
    if (confirm("Soll ich die Chronik wirklisch gelöscht werden?")) {
      try {
        await deleteChronicle(params.id);
        navigate("/");
      } catch (error) {
        console.error(error);
        alert("Ein Fehler ist aufgetreten.");
      }
    }
  };

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <br />
      <ButtonGroup>
        <LinkButton to={"/"} children={"Zurück"} secondary={true} />
        <LinkButton
          to={`/chronicles/${params.id}/edit`}
          children={"Bearbeiten"}
          secondary={true}
        />
        <Button danger={true} onClick={removeChronicle}>
          Löschen
        </Button>
      </ButtonGroup>
    </>
  );
}

ChronicleDetailRoute.loader = clientLoader;
