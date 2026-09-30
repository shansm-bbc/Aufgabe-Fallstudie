import LinkButton from "./LinkButton";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <main className={styles.main}>
      <LinkButton
        to={"/chronicles/create"}
        children={"Neue Chronik erstellen"}
        secondary={true}
      />
    </main>
  );
}
