import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="Header">
      <nav className="Nav">
        <div className="Logo">
          <Link to="/home">
            <h3>Home</h3>
          </Link>
        </div>

        <div className="SeparateurHeader" />

        <div className="ContainerSlogan">
          <h1>Guide de survie</h1>
        </div>

        <div className="SeparateurHeader" />
      </nav>
    </section>
  );
}

export default Header;
