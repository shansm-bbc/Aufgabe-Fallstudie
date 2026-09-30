import { useLoaderData } from "react-router";
import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import Chronicle from "@/components/Chronicle";
import LinkButton from "@/components/LinkButton";
import TextArea from "@/components/TextArea";
import Input from "@/components/Input";
import { fetchChronicles } from "@/lib/chronicles";
async function clientLoader() {
  return await fetchChronicles();
}

export default function ChronicleListRoute() {
  const data = useLoaderData();
  return (
    <div>
      {data.map((chronicle) => (
        <Chronicle
          key={chronicle.id}
          title={chronicle.title}
          text={chronicle.text}
          url={`/chronicles/${chronicle.id}`}
        />
      ))}
      <Input label="Titel" placeholder="Gib einen Titel ein" />
      <TextArea label="Text" placeholder="Gib einen Text ein" />
      <ButtonGroup>
        <Button>Speichern</Button>
        <LinkButton to="#" secondary>
          Abbrechen
        </LinkButton>
      </ButtonGroup>
    </div>
  );
}

ChronicleListRoute.loader = clientLoader;
