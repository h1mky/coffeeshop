import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import { Suspense, lazy } from "react";
// import store from "../../redux/store";

// ленивый импорт страниц
const MainPage = lazy(() => import("../pages/MainPage"));
const OurCoffee = lazy(() => import("../pages/OurCoffee"));
const Goods = lazy(() => import("../pages/Goods"));
const CoffeePage = lazy(() => import("../pages/CoffeePage"));

const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/coffee" element={<OurCoffee />} />
          <Route path="goods" element={<Goods />} />
          <Route path="/coffee/:id" element={<CoffeePage />} />
        </Routes>
      </Suspense>
    </Router>
    // </Provider>
  );
};

export default App;
