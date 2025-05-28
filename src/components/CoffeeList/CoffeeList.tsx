import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchArticle } from "../../redux/arcticleSlice/slice";
import {
  setSearchValue,
  setCurrentFilter,
} from "../../redux/filterSlice/filterSlice";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import "../CoffeeList/CoffeeList.css";

import type { AppDispatch } from "../../redux/store";
import {
  selectArticles,
  selectArticlesLoading,
  selectSearchValue,
  selectCurrentFilter,
} from "../../redux/selectors";

import SyncLoader from "react-spinners/SyncLoader";

const CoffeeList = ({ withFilters = true }) => {
  const dispatch = useDispatch<AppDispatch>();

  const articles = useSelector(selectArticles);
  const loading = useSelector(selectArticlesLoading);
  const searchValue = useSelector(selectSearchValue);
  const currentFilter = useSelector(selectCurrentFilter);

  useEffect(() => {
    dispatch(fetchArticle());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentFilter(""));
    dispatch(setSearchValue(""));
  }, []);

  const getFilteredArticles = () => {
    if (!articles) return [];

    let filtered = [...articles];

    if (searchValue) {
      filtered = filtered.filter(
        (article) =>
          article.coffeeName.toLowerCase().includes(searchValue) ||
          article.country.toLowerCase().includes(searchValue)
      );
    }

    if (currentFilter) {
      filtered = filtered.filter(
        (article) =>
          article.country.toLowerCase() === currentFilter.toLowerCase()
      );
    }

    return filtered;
  };

  const handleSearchChange = (e: any) => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleFilterClick = (country: string) => {
    dispatch(setCurrentFilter(country));
  };

  const filteredArticles = getFilteredArticles();

  return (
    <div className="container text-center pt-3">
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-lg-10">
          {withFilters && (
            <div className="container text-center filters">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 search">
                  <div className="d-flex justify-content-center align-items-center search-group">
                    <label htmlFor="search-input" className="search-label mr-2">
                      Looking for
                    </label>
                    <input
                      type="text"
                      className="form-control search-input"
                      placeholder="start typing here..."
                      id="search-input"
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-7 col-lg-6 filter-group ">
                  <label htmlFor="filter-button" className="mx-4">
                    Or filter
                  </label>
                  <button
                    className={`btn filter-btn ${
                      currentFilter === "Brazil"
                        ? "btn-fillter_active"
                        : "btn-light"
                    }`}
                    id="filter-brazil"
                    onClick={() => handleFilterClick("Brazil")}
                  >
                    Brazil
                  </button>
                  <button
                    className={`btn filter-btn ${
                      currentFilter === "Kenya"
                        ? "btn-fillter_active"
                        : "btn-light"
                    }`}
                    id="filter-kenya"
                    onClick={() => handleFilterClick("Kenya")}
                  >
                    Kenya
                  </button>
                  <button
                    className={`btn filter-btn ${
                      currentFilter === "Columbia"
                        ? "btn-fillter_active"
                        : "btn-light"
                    }`}
                    id="filter-columbia"
                    onClick={() => handleFilterClick("Columbia")}
                  >
                    Columbia
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="d-flex flex-wrap justify-content-center wrapper">
          {loading && <SyncLoader color="#6f4e37" />}
          {!loading && filteredArticles.length === 0 && !loading && (
            <div className="no-results">
              <p>No coffee found matching your criteria</p>
            </div>
          )}
          {!loading &&
            filteredArticles.map((item) => (
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
