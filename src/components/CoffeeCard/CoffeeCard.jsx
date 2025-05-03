import { Link } from "react-router-dom";

const CoffeeCard = ({ name, country, price, img, id }) => {
  return (
    <Link to={`/coffee/${id}`}>
      <div className="coffee-card">
        <img src={img} alt="coffee img" className="coffee-card__img" />
        <div className="coffee-card__body">
          <h5 className="coffee-card__title">{name}</h5>
          <p className="coffee-card__country">{country}</p>
          <p className="coffee-card__price">{price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default CoffeeCard;
