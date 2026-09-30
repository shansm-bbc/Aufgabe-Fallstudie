import { Form, redirect } from "react-router";

import Input from "./Input";
import Textarea from "./TextArea";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function ChronicleForm({ chronicle = {}, onCancel }) {
  return (
    <Form method="post">
      <Input
        label="Titel: *"
        type="text"
        name="title"
        placeholder="Bitte einen Titel eingeben"
        defaultValue={chronicle.title}
      />
      <Textarea
        label="Text: *"
        name="text"
        placeholder="Bitte einen Text eingeben"
        defaultValue={chronicle.text}
      />
      <ButtonGroup>
        <Button type="submit">Speichern</Button>
        <Button type="button" secondary={true} onClick={onCancel}>
          Abbrechen
        </Button>
      </ButtonGroup>
    </Form>
  );
}
