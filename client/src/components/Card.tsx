import "./Card.css";

interface CardProps {
  src: string;
  title: string;
  key: number;
}

export default function Card(Props: CardProps) {
  const { src, title, key } = Props;
  return (
    <div className="cardContainer" key={key}>
      <figure>
        <img src={src} alt={title} />
      </figure>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
