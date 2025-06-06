import { Helmet } from "react-helmet";

import beansLogo from "../../assets/Beans-logo-footer.svg";

import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../redux/arcticleSlice/slice";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import {
  selectArticlesLoading,
  selectSelectedArticle,
} from "../../redux/selectors";
import { useEffect } from "react";

import NotFound404 from "../pages/NotFound404/NotFound404";

import { SyncLoader } from "react-spinners";

const SingleCoffeePageAbout = () => {
  const { id } = useParams();

  const numericId = Number(id);

  const dispatch = useDispatch<AppDispatch>();
  const singleArticle = useSelector(selectSelectedArticle);
  const loading = useSelector(selectArticlesLoading);

  useEffect(() => {
    if (!isNaN(numericId)) {
      dispatch(fetchArticleById(numericId));
    }
  }, [numericId]);

  if (!singleArticle && !loading) {
    return <NotFound404 />;
  }

  if (loading || !singleArticle) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        <SyncLoader color="#6f4e37" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`${singleArticle?.coffeeName} coffee page`}
        />
        <title>{singleArticle?.coffeeName}</title>
      </Helmet>
      <div className="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 about-content text-center">
                  <img
                    src={singleArticle?.img}
                    alt={singleArticle?.coffeeName}
                    className="img-fluid"
                  />
                </div>

                <div className="col-12 col-md-6 about-content text-left">
                  <h2 className="about-title">About it</h2>
                  <div className="image-coffee">
                    <img src={beansLogo} alt="beans logo" />
                    <p className="about-text pb-3">
                      country: {singleArticle?.country}
                    </p>
                    <p className="about-text">
                      description: {singleArticle?.description}
                    </p>
                    <p className="mt-3 about-text ">
                      Price: {}
                      <span className="fw-bold fs-3">
                        {singleArticle?.price}$
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCoffeePageAbout;
