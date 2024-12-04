import { useEffect, useState } from "react";
import "./EauMain.css";
import CardInfo from "./CardInfo";

type CardProps = {
  id: number;
  main_cat: string;
  nom: string;
  description: string;
  materiel_necessaire: string;
  etapes: string[];
  duree: string;
};

const fetchAPI = async (
  setDataAPI: React.Dispatch<React.SetStateAction<CardProps[]>>,
) => {
  try {
    const response = await fetch("http://localhost:3310/api");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setDataAPI(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

function EauMain() {
  const [dataAPI, setDataAPI] = useState<CardProps[]>([]);

  useEffect(() => {
    fetchAPI(setDataAPI);
  }, []);

  return (
    <section className="EauMain">
      <div className="PageEau">
        <h2>Eau</h2>
      </div>
      <div className="SeparateurEauPage" />

      <div className="ContainerCardEauMain">
        {/* MAP + filtre */}
        {dataAPI
          .filter((data) => data.main_cat === "Eau")
          .map((data) => (
            <CardInfo
              key={data.id}
              nom={data.nom}
              description={data.description}
              materiel_necessaire={data.materiel_necessaire}
              etapes={data.etapes}
              duree={data.duree}
            />
          ))}
      </div>
    </section>
  );
}

export default EauMain;
