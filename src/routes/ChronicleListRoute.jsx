import { Link } from "react-router";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Chronicle from "../components/Chronicle";
import LinkButton from "../components/LinkButton";
import TextArea from "../components/TextArea";
import Input from "../components/Input";

export default function ChronicleListRoute() {
  const testdata = [
    {
      id: 1,
      title: "Geheimnisvolle Nebel von Zeta Orionis",
      text: " Im Zeta Orionis Nebel wurden glühende Gase entdeckt, die einen neuen Stern formen könnten.",
      url: "/chronicles/1",
    },
    {
      id: 2,
      title: "Fortschrittliches Leben auf Galaxia Prime",
      text: "Galaxia Prime nutzt umweltfreundliche Technologie, mit Städten, die über der Oberfläche schweben",
      url: "/chronicles/2",
    },
    {
      id: 3,
      title: "Entdeckungen rund um Quasar 9",
      text: "Quasar 9 ist umgeben von Licht und Geheimnissen einer alten Zivilisation",
      url: "/chronicles/3",
    },
  ];
  return (
    <div>
      {testdata.map((chronicle) => (
        <Chronicle
          key={chronicle.id}
          title={chronicle.title}
          text={chronicle.text}
          url={chronicle.url}
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
