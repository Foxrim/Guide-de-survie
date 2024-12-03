import "./HomeMain.css";
import Card from "./Card";

/*Importation des img*/
import abris from "../assets/images/abris.webp";
import eau from "../assets/images/eau.webp";
import nourriture from "../assets/images/nourriture.webp";
import outils from "../assets/images/outils.webp";
import soins from "../assets/images/soins.webp";

function HomeMain() {
  const Category = [
    {
      src: nourriture,
      title: "Nourriture",
      key: 1,
    },
    {
      src: eau,
      title: "Eau",
      key: 2,
    },
    {
      src: abris,
      title: "Abris",
      key: 3,
    },
    {
      src: soins,
      title: "Soins",
      key: 4,
    },
    {
      src: outils,
      title: "Outils",
      key: 4,
    },
  ];

  return (
    <section className="HomeMain">
      <div className="PageHome">
        <h2>Home</h2>
      </div>

      <div className="SeparateurHomeMain" />

      <div className="ContainerHomeMain">
        <div className="ContainerCardHomeMain">
          {Category.map((data) => (
            <Card src={data.src} title={data.title} key={data.key} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeMain;
