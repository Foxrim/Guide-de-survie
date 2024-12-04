import "./CardInfo.css";

interface CardProps {
  nom: string;
  description: string;
  materiel_necessaire: string;
  etapes: string[];
  duree: string;
}

export default function CardInfo(Props: CardProps) {
  const { nom, description, materiel_necessaire, etapes, duree } = Props;
  return (
    <section className="cardBack">
      <div className="cardContainer">
        <h4>{nom}</h4>
        <p>{description}</p>
        <h4>Matériel nécéssaire :</h4>
        <p>{materiel_necessaire}</p>
        <h4>Etapes :</h4>
        <p>{etapes}</p>
        <h4>Durée :</h4>
        <p>{duree}</p>
      </div>
    </section>
  );
}
