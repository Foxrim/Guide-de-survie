import Abris from "../components/Abris";
import Header from "../components/Header";
import "./Home.css";

export default function AbrisPage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="PageHomeMain">
        <Abris />
      </main>
    </>
  );
}
