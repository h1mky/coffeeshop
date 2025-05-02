import Nav from "../Nav/Nav";
import BeansLogoFooter from "../../assets/Beans-logo-footer.svg";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Nav color="black" />
      <div className="image-coffee">
        <img src={BeansLogoFooter} alt="Beans logo" />
      </div>
    </div>
  );
};
export default Footer;
