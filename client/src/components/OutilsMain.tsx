import { useEffect, useState } from "react";
import "./OutilsMain.css";
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

function OutilsMain() {
  const [dataAPI, setDataAPI] = useState<CardProps[]>([]);

  useEffect(() => {
    fetchAPI(setDataAPI);
  }, []);

  return (
    <section className="OutilsMain">
      <div className="PageOutils">
        <h2>Outils</h2>
      </div>
      <div className="SeparateurOutilsPage" />

      <div className="ContainerCardOutilsMain">
        {/* MAP + filtre */}
        {dataAPI
          .filter((data) => data.main_cat === "Outils")
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

export default OutilsMain;
