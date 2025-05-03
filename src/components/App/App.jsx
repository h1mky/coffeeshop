import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import MainPage from "../pages/MainPage";
import OurCoffee from "../pages/OurCoffee";
import Goods from "../pages/Goods";
import CoffeePage from "../pages/CofeePage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/coffee" element={<OurCoffee />} />
          <Route path="goods" element={<Goods />} />
          <Route path="/coffee/:id" element={<CoffeePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
