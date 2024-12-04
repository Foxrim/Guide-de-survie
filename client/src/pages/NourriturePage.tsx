import Header from "../components/Header";
import NourritureMain from "../components/NourritureMain";
import "./NourriturePage.css";

function NourriturePage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="PageNourritureMain">
        <NourritureMain />
      </main>
    </>
  );
}

export default NourriturePage;
