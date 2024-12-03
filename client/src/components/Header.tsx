import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="Header">
      <div className="ContainerLogo">
        <Link to="/home">
          <h3 className="Logo">Home</h3>
        </Link>
      </div>

      <div className="ContainerSlogan">
        <h1>Guide de survie</h1>
      </div>
    </section>
  );
}

export default Header;
