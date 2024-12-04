import AbrisMain from "../components/AbrisMain";
import Header from "../components/Header";
import "./AbrisPage.css";

function AbrisPage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="PageAbrisMain">
        <AbrisMain />
      </main>
    </>
  );
}

export default AbrisPage;
