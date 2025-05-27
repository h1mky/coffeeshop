import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Suspense, lazy } from "react";
import { store } from "../../redux/store";

import NotFound404 from "../pages/NotFound404/NotFound404";

const MainPage = lazy(() => import("../pages/MainPage"));
const OurCoffee = lazy(() => import("../pages/OurCoffee"));
const Goods = lazy(() => import("../pages/Goods"));
const CoffeePage = lazy(() => import("../pages/CoffeePage"));
const AdminPage = lazy(() => import("../../adminPage/AdminPage"));

import { SyncLoader } from "react-spinners";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SyncLoader color="#6f4e37" size={40} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/coffee" element={<OurCoffee />} />
            <Route path="goods" element={<Goods />} />
            <Route path="/coffee/:id" element={<CoffeePage />} />
            <Route path="*" element={<NotFound404 />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
