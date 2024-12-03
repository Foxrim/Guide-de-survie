import Header from "../components/Header";
import Soins from "../components/Soins";
import "./Home.css";

export default function SoinsPage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="PageHomeMain">
        <Soins />
      </main>
    </>
  );
}
