import EauMain from "../components/EauMain";
import Header from "../components/Header";
import "./EauPage.css";

function EauPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="PageEauMain">
        <EauMain />
      </main>
    </>
  );
}

export default EauPage;
