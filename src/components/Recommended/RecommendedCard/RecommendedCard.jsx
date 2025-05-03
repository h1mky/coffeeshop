const RecommendedCard = ({ item }) => {
  return (
    <a href="#">
      <div className="coffee-card">
        <img src={item.src} alt={item.name} className="coffee-card__img" />
        <div className="coffee-card__body">
          <h5 className="coffee-card__title">{item.name}</h5>
          <p className="coffee-card__country">{item.country}</p>
          <p className="coffee-card__price">{item.price}$</p>
        </div>
      </div>
    </a>
  );
};

export default RecommendedCard;
