import "../Recommended/Recommended.css";
import coffeeImg from "../../assets/coffee-img.jpg";

const Recommended = () => {
  return (
    <div className="recommended">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2 className="recommended-title">Our Best</h2>
            <div className="d-flex flex-wrap justify-content-center wrapper">
              <a href="#">
                <div className="coffee-card">
                  <img
                    src={coffeeImg}
                    alt="coffee img"
                    className="coffee-card__img"
                  />
                  <div className="coffee-card__body">
                    <h5 className="coffee-card__title">
                      Solimo Coffee Beans 2 kg
                    </h5>
                    <p className="coffee-card__country">Brazil</p>
                    <p className="coffee-card__price">10.73$</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="coffee-card">
                  <img
                    src={coffeeImg}
                    alt="coffee img"
                    className="coffee-card__img"
                  />
                  <div className="coffee-card__body">
                    <h5 className="coffee-card__title">
                      Solimo Coffee Beans 2 kg
                    </h5>
                    <p className="coffee-card__country">Brazil</p>
                    <p className="coffee-card__price">10.73$</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="coffee-card">
                  <img
                    src={coffeeImg}
                    alt="coffee img"
                    className="coffee-card__img"
                  />
                  <div className="coffee-card__body">
                    <h5 className="coffee-card__title">
                      Solimo Coffee Beans 2 kg
                    </h5>
                    <p className="coffee-card__country">Brazil</p>
                    <p className="coffee-card__price">10.73$</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommended;
