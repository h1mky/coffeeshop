import { Link } from "react-router-dom";
import "../../pages/NotFound404/NotFound404.css";

const NotFound404 = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Brew not found ☕</h2>
      <p className="not-found__text">
        The page you're looking for got roasted or just never brewed. Let’s get
        you back to something aromatic.
      </p>
      <Link to="/" className="not-found__button">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound404;
