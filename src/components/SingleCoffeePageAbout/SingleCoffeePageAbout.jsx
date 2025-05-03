import { useParams } from "react-router-dom";
import beansLogo from "../../assets/Beans-logo-footer.svg";
import { useSelector } from "react-redux";

const SingleCoffeePageAbout = () => {
  const { id } = useParams();
  const coffeeId = Number(id);

  const coffeeData = useSelector((state) =>
    state.articles.articles.find((item) => item.id === coffeeId)
  );

  if (!coffeeData) return <div className="text-center py-5">Not found</div>;

  return (
    <div className="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 about-content text-center">
                <img
                  src={coffeeData.src}
                  alt={coffeeData.name}
                  className="img-fluid"
                />
              </div>

              <div className="col-12 col-md-6 about-content text-left">
                <h2 className="about-title">About it</h2>
                <div className="image-coffee">
                  <img src={beansLogo} alt="beans logo" />
                  <p className="about-text pb-3">
                    country: {coffeeData.country}
                  </p>
                  <p className="about-text">
                    description: {coffeeData.description}
                  </p>
                  <p className="mt-3 about-text ">
                    Price:{" "}
                    <span className="fw-bold fs-3">{coffeeData.price}$</span>
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

export default SingleCoffeePageAbout;
