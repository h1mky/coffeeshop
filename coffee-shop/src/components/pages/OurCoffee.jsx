import HeaderSecond from "../HeaderSecond/HeaderSecond";
import AboutSecond from "../AboutSecond/AboutSecond";
import CoffeeList from "../CoffeeList/CoffeeList";
import Footer from "../Footer/Footer";

import { Helmet } from "react-helmet";

const OurCoffee = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content={`page with our coffee in stock`} />
        <title>Our coffee</title>
      </Helmet>
      <HeaderSecond page="about" />
      <AboutSecond />
      <CoffeeList />
      <Footer />
    </>
  );
};
export default OurCoffee;
