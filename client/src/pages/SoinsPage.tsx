import Header from "../components/Header";
import SoinsMain from "../components/SoinsMain";
import "./Home.css";

function SoinsPage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="PageSoinsMain">
        <SoinsMain />
      </main>
    </>
  );
}

export default SoinsPage;
