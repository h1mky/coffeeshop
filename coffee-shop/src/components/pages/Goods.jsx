import { Helmet } from "react-helmet";

import HeaderSecond from "../HeaderSecond/HeaderSecond";
import AboutSecond from "../AboutSecond/AboutSecond";
import CoffeeList from "../CoffeeList/CoffeeList";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";

import { useEffect } from "react";

import {
  setSearchValue,
  setCurrentFilter,
} from "../../redux/filterSlice/filterSlice";

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
