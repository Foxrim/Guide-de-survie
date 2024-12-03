import Header from "../components/Header";
import OutilsMain from "../components/OutilsMain";
import "./Home.css";

function OutilsPage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="PageOutilsMain">
        <OutilsMain />
      </main>
    </>
  );
}

export default OutilsPage;
