import Footer from "../Footer/Footer";
import HeaderSecond from "../HeaderSecond/HeaderSecond";

import SingleCoffeePageAbout from "../SingleCoffeePageAbout/SingleCoffeePageAbout";

const CoffeePage = () => {
  return (
    <>
      <HeaderSecond text="our coffee" page="about" />
      <SingleCoffeePageAbout />
      <Footer />
    </>
  );
};
export default CoffeePage;
