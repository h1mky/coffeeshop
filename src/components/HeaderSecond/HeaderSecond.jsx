import Nav from "../Nav/Nav";
import aboutBg from "../../assets/bg-second.jpg";
import goodsBg from "../../assets/Goods-bg.png";
import "../HeaderSecond/headerSecond.css";

const HeaderSecond = ({ page = "about", text = "our coffee" }) => {
  const bgSrc = page === "about" ? aboutBg : goodsBg;
  const h1Text = text === "our coffee" ? "Our Coffee" : "For your pleasure";

  return (
    <div
      className="coffee-page__inner"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Nav color="white" />
            <h1 className="coffee-page__title">{h1Text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSecond;
