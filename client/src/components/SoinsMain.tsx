import { useEffect, useState } from "react";
import "./SoinsMain.css";
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

function SoinsMain() {
  const [dataAPI, setDataAPI] = useState<CardProps[]>([]);

  useEffect(() => {
    fetchAPI(setDataAPI);
  }, []);

  return (
    <section className="SoinsMain">
      <div className="PageSoins">
        <h2>Soins</h2>
      </div>
      <div className="SeparateurSoinsPage" />

      <div className="ContainerCardSoinsMain">
        {/* MAP + filtre */}
        {dataAPI
          .filter((data) => data.main_cat === "Soins")
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

export default SoinsMain;
