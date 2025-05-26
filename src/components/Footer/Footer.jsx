import Nav from "../Nav/Nav";
import BeansLogoFooter from "../../assets/Beans-logo-footer.svg";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Nav color="black" />
      <div className="image-coffee mb-5">
        <img src={BeansLogoFooter} alt="Beans logo" />
      </div>
    </div>
  );
};
export default Footer;
