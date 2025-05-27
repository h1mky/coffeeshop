import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import FormPanel from "../adminPage/FormPanel";
import AdminPageWithAcces from "./AdminPageWithAcces";

import { useSelector } from "react-redux";
import { selectisAuthorized } from "../redux/selectors";
const AdminPage = () => {
  const isAuthorized = useSelector(selectisAuthorized);

  return (
    <>
      <Nav />
      {isAuthorized ? <AdminPageWithAcces /> : <FormPanel />}
      <Footer />
    </>
  );
};

export default AdminPage;
