import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import OurCoffee from "../pages/OurCoffee";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/coffee" element={<OurCoffee />} />
      </Routes>
    </Router>
  );
};

export default App;
