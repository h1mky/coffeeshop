import MainPage from "../pages/MainPage";
import { BrowserRouter as Router } from "react-router-dom";
import OurCoffee from "../pages/OurCoffee";

const App = () => {
  return (
    <Router>
      <MainPage />
      <OurCoffee />
    </Router>
  );
};

export default App;
