import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import MainPage from "../pages/MainPage";
import OurCoffee from "../pages/OurCoffee";
import Goods from "../pages/Goods";

const App = () => {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/coffee" element={<OurCoffee />} />
          <Route path="goods" element={<Goods />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
