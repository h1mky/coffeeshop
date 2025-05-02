import HeaderBeans from "../../assets/coffee-beans-header.png";

import "../Nav/nav.css";
const Nav = () => {
  return (
    <nav className="navbar navbar-light nav-bar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={HeaderBeans} alt="coffee-beans" />
        </a>
        <div id="navbarNavDropdown" className="collapse navbar-collapse ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Coffee house
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Our coffee
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                for your pleasure
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
