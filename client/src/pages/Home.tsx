import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import "./Home.css";

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="PageHomeMain">
        <HomeMain />
      </main>
    </>
  );
}

export default Home;
