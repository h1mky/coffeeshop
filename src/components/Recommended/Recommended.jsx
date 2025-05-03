import { useSelector } from "react-redux";
import RecommendedCard from "./RecommendedCard/RecommendedCard";
import "./Recommended.css";

const Recommended = () => {
  const recommendedArticles = useSelector((state) =>
    state.articles.articles.filter((item) => item.recommended === true)
  );

  return (
    <div className="recommended">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2 className="recommended-title">Our Best</h2>
            <div className="d-flex flex-wrap justify-content-center wrapper">
              {recommendedArticles.map((item) => (
                <RecommendedCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
