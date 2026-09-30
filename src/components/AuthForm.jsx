import { useNavigate } from "react-router";
import { signin } from "@/lib/signin";
import styles from "./AuthForm.module.css";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function AuthForm() {
  const navigate = useNavigate();
  const goBack = () => {
    return navigate("/");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValues = Object.fromEntries(formData);

    const user = {
      email: inputValues.email,
      password: inputValues.password,
    };

    try {
      const data = await signin(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.authform} onSubmit={onSubmit}>
        <label htmlFor="email">E-Mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Bitte E-Mail Adresse eingeben"
        />
        <label htmlFor="password">Passwort:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Bitte Passwort eingeben"
        />
        <ButtonGroup className={styles.buttons}>
          <Button type="submit" children={"Speichern"}></Button>
          <Button
            type="button"
            children={"Abbrechen"}
            secondary={true}
            onClick={goBack}
          ></Button>
        </ButtonGroup>
      </form>
    </>
  );
}
