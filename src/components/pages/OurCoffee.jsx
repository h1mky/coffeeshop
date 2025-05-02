import HeaderSecond from "../HeaderSecond/HeaderSecond";
import AboutSecond from "../AboutSecond/AboutSecond";
import CoffeeList from "../CofeeList/CoffeeList";
import Footer from "../Footer/Footer";

const OurCoffee = () => {
  return (
    <>
      <HeaderSecond page="about" />
      <AboutSecond />
      <CoffeeList />
      <Footer />
    </>
  );
};
export default OurCoffee;
