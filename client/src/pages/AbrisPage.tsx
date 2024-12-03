import Abris from "../components/AbrisMain";
import Header from "../components/Header";
import "./Home.css";

function AbrisPage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="PageAbrisMain">
        <Abris />
      </main>
    </>
  );
}

export default AbrisPage;
