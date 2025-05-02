import { Link } from "react-router-dom";

import BeansFooter from "../../assets/Beans-footer.png";
import BeansHeader from "../../assets/coffee-beans-header.png";

import "./nav.css";

const Nav = ({ color = "white" }) => {
  const imgSrc = color === "black" ? BeansFooter : BeansHeader;
  const textClass = color === "black" ? "text-dark" : "text-light";

  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={imgSrc} alt="Coffee beans" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${textClass}`} to="/">
                Coffee house
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${textClass}`} to="/coffee">
                Our coffee
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${textClass}`} to="/goods">
                For your pleasure
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
