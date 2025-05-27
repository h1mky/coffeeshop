import { selectisAuthorized } from "../redux/selectors";
import AllCardsAdmin from "./AllCardsAdmin/AllCardsAdmin";
import { useSelector } from "react-redux";

const AdminPageWithAcces = () => {
  return (
    <>
      <AllCardsAdmin />
    </>
  );
};
export default AdminPageWithAcces;
