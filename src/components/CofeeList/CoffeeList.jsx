import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setCurrentFilter,
  setSearchValue,
} from "../../redux/filterSlice/filterSlice";
import { setSelectedArticles } from "../../redux/arcticleSlice/slice";
import { selectFilter } from "../../redux/filterSlice/selectors";
import { selectArticles } from "../../redux/arcticleSlice/selectors";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import "../CofeeList/CoffeeList.css";

const CoffeeList = ({ withFilters = true }) => {
  const { searchValue, currentFilter } = useSelector(selectFilter);
  const { articles, selectedArticles } = useSelector(selectArticles);

  const dispatch = useDispatch();

  // Обработка изменения значения поиска
  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  // Обработка фильтрации по кнопке
  const handleFilter = (country) => {
    dispatch(setCurrentFilter(country));
  };

  // Фильтрация данных при изменении фильтров
  useEffect(() => {
    const filtered = articles.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesFilter = currentFilter
        ? item.country === currentFilter
        : true;
      return matchesSearch && matchesFilter;
    });

    dispatch(setSelectedArticles(filtered));
  }, [searchValue, currentFilter, articles, dispatch]);

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
                      onChange={handleChange}
                      value={searchValue}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-7 col-lg-6 filter-group">
                  <label htmlFor="filter-button">Or filter</label>
                  <button
                    className="btn btn-light filter-btn"
                    onClick={() => handleFilter("Brazil")}
                  >
                    Brazil
                  </button>
                  <button
                    className="btn btn-light filter-btn"
                    onClick={() => handleFilter("Kenya")}
                  >
                    Kenya
                  </button>
                  <button
                    className="btn btn-light filter-btn"
                    onClick={() => handleFilter("Columbia")}
                  >
                    Columbia
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="d-flex flex-wrap justify-content-center wrapper">
          {selectedArticles.map((item) => (
            <CoffeeCard
              key={item.id}
              name={item.name}
              country={item.country}
              price={item.price}
              img={item.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeList;
