import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchArticle } from "../../redux/arcticleSlice/slice";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import "../CoffeeList/CoffeeList.css";

import type { AppDispatch } from "../../redux/store";
import { selectArticles, selectArticlesLoading } from "../../redux/selectors";

const CoffeeList = ({ withFilters = true }) => {
  const dispatch = useDispatch<AppDispatch>();

  // Прямое обращение к store без селекторов
  const articles = useSelector(selectArticles);
  const loading = useSelector(selectArticlesLoading);

  useEffect(() => {
    dispatch(fetchArticle());
  }, [dispatch]);

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
          {loading && <div>Loading...</div>}
          {!loading &&
            articles?.map((item) => (
              <CoffeeCard
                key={item.id}
                name={item.coffeeName}
                country={item.country}
                price={item.price}
                img={item.img}
                id={item.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeList;
