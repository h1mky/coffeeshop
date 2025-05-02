import coffeeImg from "../../assets/coffee-img.jpg";
import "../CofeeList/CoffeeList.css";

const CoffeeList = ({ withFilters = true }) => {
  return (
    <div className="container text-center pt-3">
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-lg-10">
          {withFilters && (
            <div className="container text-center filters">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 search">
                  <div className="d-flex justify-content-center align-items-center search-group">
                    <label htmlFor="search-input" className="search-label">
                      Looking for
                    </label>
                    <input
                      type="text"
                      className="form-control search-input"
                      placeholder="start typing here..."
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-7 col-lg-6 filter-group">
                  <label htmlFor="filter-button">Or filter</label>
                  <button className="btn btn-light filter-btn">Brazil</button>
                  <button className="btn btn-light filter-btn">Kenya</button>
                  <button className="btn btn-light filter-btn">Columbia</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="d-flex flex-wrap justify-content-center wrapper">
          <a href="#">
            <div className="coffee-card">
              <img
                src={coffeeImg}
                alt="coffee img"
                className="coffee-card__img"
              />
              <div className="coffee-card__body">
                <h5 className="coffee-card__title">Solimo Coffee Beans 2 kg</h5>
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
                <h5 className="coffee-card__title">Solimo Coffee Beans 2 kg</h5>
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
                <h5 className="coffee-card__title">Solimo Coffee Beans 2 kg</h5>
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
                <h5 className="coffee-card__title">Solimo Coffee Beans 2 kg</h5>
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
                <h5 className="coffee-card__title">Solimo Coffee Beans 2 kg</h5>
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
                <h5 className="coffee-card__title">Solimo Coffee Beans 2 kg</h5>
                <p className="coffee-card__country">Brazil</p>
                <p className="coffee-card__price">10.73$</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoffeeList;
