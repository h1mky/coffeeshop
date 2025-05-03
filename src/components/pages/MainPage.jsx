import Footer from "../Footer/Footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import Recommended from "../Recommended/Recommended";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content={`Main page with info about us `} />
        <title>Coffee Shop</title>
      </Helmet>
      <HeaderMain />
      <Recommended />
      <Footer />
    </>
  );
};
export default MainPage;
