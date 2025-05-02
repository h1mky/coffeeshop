import AboutSecond from "../AboutSecond/AboutSecond";
import CoffeeList from "../CofeeList/CoffeeList";
import Footer from "../Footer/Footer";
import HeaderSecond from "../HeaderSecond/HeaderSecond";

const Goods = () => {
  return (
    <>
      <HeaderSecond page="goods" text="goods" />
      <AboutSecond photo="goods" />
      <CoffeeList withFilters={false} />
      <Footer />
    </>
  );
};
export default Goods;
