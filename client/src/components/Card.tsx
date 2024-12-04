import "./Card.css";
import { Link } from "react-router-dom";

interface CardProps {
  src: string;
  title: string;
  key: number;
  link: string;
}

export default function Card(Props: CardProps) {
  const { src, title, key, link } = Props;
  return (
    <div className="cardContainer" key={key}>
      <Link to={link}>
        <figure>
          <img src={src} alt={title} />
        </figure>
        <div>
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
}
