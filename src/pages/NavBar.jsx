import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const NavBar = () => {
  return (
    <div className="screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default NavBar;
