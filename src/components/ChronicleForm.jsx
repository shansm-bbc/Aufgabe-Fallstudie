import { Form, redirect } from "react-router";

import Input from "./Input";
import Textarea from "./TextArea";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function ChronicleForm({
  chronicle = {},
  errors = {},
  onCancel,
}) {
  return (
    <Form method="post" noValidate>
      <Input
        label="Titel: *"
        type="text"
        name="title"
        placeholder="Bitte einen Titel eingeben"
        error={errors.title}
        defaultValue={chronicle.title}
      />
      <Textarea
        label="Text: *"
        name="text"
        placeholder="Bitte einen Text eingeben"
        error={errors.text}
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
