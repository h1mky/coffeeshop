import { useEffect } from "react";
import AboutSecond from "../AboutSecond/AboutSecond";
import CoffeeList from "../CofeeList/CoffeeList";
import Footer from "../Footer/Footer";
import HeaderSecond from "../HeaderSecond/HeaderSecond";
import {
  setCurrentFilter,
  setSearchValue,
} from "../../redux/filterSlice/filterSlice";
import { useDispatch } from "react-redux";

import { Helmet } from "react-helmet";

const Goods = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentFilter(""));
    dispatch(setSearchValue(""));
  }, []);
  return (
    <>
      <Helmet>
        <meta name="description" content={`page about our goods`} />
        <title>Our goods</title>
      </Helmet>
      <HeaderSecond page="goods" text="goods" />
      <AboutSecond photo="goods" />
      <CoffeeList withFilters={false} />
      <Footer />
    </>
  );
};
export default Goods;
