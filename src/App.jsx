import { Outlet } from "react-router";
import styles from "./App.module.css";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Outlet />
      </main>
    </>
  );
}
