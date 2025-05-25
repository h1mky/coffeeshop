import CoffeeCard from "../CoffeeCard/CoffeeCard";

interface IFilters {
  withFilters?: boolean;
}

const CoffeeList: React.FC<IFilters> = ({ withFilters = true }) => {
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
                      id="search-input"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-7 col-lg-6 filter-group">
                  <label htmlFor="filter-button">Or filter</label>
                  <button
                    className="btn btn-light filter-btn"
                    id="filter-brazil"
                  >
                    Brazil
                  </button>
                  <button
                    className="btn btn-light filter-btn"
                    id="filter-kenya"
                  >
                    Kenya
                  </button>
                  <button
                    className="btn btn-light filter-btn"
                    id="filter-columbia"
                  >
                    Columbia
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="d-flex flex-wrap justify-content-center wrapper">
          <CoffeeCard name={""} country={""} price={0} img={""} id={0} />
          <CoffeeCard name={""} country={""} price={0} img={""} id={0} />
          <CoffeeCard name={""} country={""} price={0} img={""} id={0} />
        </div>
      </div>
    </div>
  );
};

export default CoffeeList;
