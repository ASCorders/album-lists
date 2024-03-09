import { Link } from "react-router-dom";
import Favorites from "../components/Favorites";

function Dashboard() {
  return (
    <>
      <Link to="/list" className="btn btn-primary  px-5">Go to list page </Link>
      <Favorites />
    </>
  );
}

export default Dashboard;
