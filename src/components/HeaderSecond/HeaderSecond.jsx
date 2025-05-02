import Nav from "../Nav/Nav";

import "../HeaderSecond/headerSecond.css";

const HeaderSecond = () => {
  return (
    <div className="coffee-page__inner">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Nav color="white" />
            <h1 className="coffee-page__title">Our Coffee</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderSecond;
