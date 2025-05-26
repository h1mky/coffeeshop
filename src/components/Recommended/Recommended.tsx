import CoffeeCard from "../CoffeeCard/CoffeeCard";

import "./Recommended.css";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { fetchArticle } from "../../redux/arcticleSlice/slice";
import { selectArticles } from "../../redux/selectors";

const Recommended = () => {
  const dispatch = useDispatch<AppDispatch>();

  const article = useSelector(selectArticles);

  useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  const recommendedArticles = article?.filter(
    (item) => item.recommended === true
  );

  return (
    <div className="recommended">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2 className="recommended-title">Our Best</h2>
            <div className="d-flex flex-wrap justify-content-center wrapper">
              {recommendedArticles?.map((item) => (
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
      </div>
    </div>
  );
};

export default Recommended;
