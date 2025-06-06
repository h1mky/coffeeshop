import girlAbout from "../../assets/2pageAbout.jpg";
import beansLogo from "../../assets/Beans-logo-footer.svg";
import cupOfCoffee from "../../assets/cup-of-coffee.jpg";

import "../AboutSecond/AboutSecond.css";

interface AboutSecondProps {
  photo?: "about" | "coffee";
}

const AboutSecond: React.FC<AboutSecondProps> = ({ photo = "about" }) => {
  const photoProps = photo === "about" ? girlAbout : cupOfCoffee;

  return (
    <div className="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 about-content text-center">
                <img
                  src={photoProps}
                  alt="2 girl 1 cup"
                  className="img-fluid"
                  style={{
                    width: "272px",
                    height: "355px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="col-12 col-md-6 about-content text-center">
                <h2 className="about-title">About our beans</h2>
                <div className="image-coffee">
                  <img src={beansLogo} alt="beans logo" />
                  <p className="about-text">
                    Extremity sweetness difficult behaviour he of. On disposal
                    of as landlord horrible.
                  </p>
                  <p className="about-text">
                    Afraid at highly months do things on at. Situation recommend
                    objection do intention so questions. As greatly removed
                    calling pleased improve an. Last ask him cold feel met spot
                    shy want. Children me laughing we prospect answered
                    followed. At it went is song that held help face.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecond;
