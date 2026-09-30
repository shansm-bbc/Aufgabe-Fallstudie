import { Link } from "react-router";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Chronicle from "../components/Chronicle";
import LinkButton from "../components/LinkButton";
import TextArea from "../components/TextArea";
import Input from "../components/Input";

export default function ChronicleListRoute() {
  return (
    <div>
      <Chronicle
        title="Ein galaktischer Sterneneintrag"
        text="Hier erscheint der neue Sterneneintrag"
        url="#"
      />
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
