import Nav from "../Nav/Nav";

import BeansLogoHeader from "../../assets/Beans-logo.svg";
import BeansLogoFooter from "../../assets/Beans-logo-footer.svg";

import "../HeaderMain/headerMain.css";

const HeaderMain = () => {
  return (
    <>
      <div className="main">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Nav />
              <h1 className="main-title">Everything You Love About Coffee</h1>
              <div className="image-coffee">
                <img src={BeansLogoHeader} alt="Beans Logo" />
                <h2 className="main-subtitle">
                  We makes every day full of energy and taste
                </h2>
                <h2 className="main-subtitle">Want to try our beans?</h2>
                <a href="" className="btn btn-outline-light">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container text-center">
          <div className="row align-items-center justify-content-center">
            <h2 className="about-title">About Us</h2>
            <div className="image-coffee">
              <img src={BeansLogoFooter} alt="Beans logo black" />
              <p className="about-text">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. Afraid at highly months do things on at.
                Situation recommend objection do intention so questions. As
                greatly removed calling pleased improve an. Last ask him cold
                feel met spot shy want. Children me laughing we prospect
                answered followed. At it went is song that held help face.
              </p>
              <p className="about-text">
                Now residence dashwoods she excellent you. Shade being under his
                bed her, Much read on as draw. Blessing for ignorant exercise
                any yourself unpacked. Pleasant horrible but confined day end
                marriage. Eagerness furniture set preserved far recommend. Did
                even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderMain;
