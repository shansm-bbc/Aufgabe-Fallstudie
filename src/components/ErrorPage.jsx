import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Hoppla, da ist etwas scheifgelaufen!</h1>
      <p>Fehler {error.message}</p>
    </>
  );
}
