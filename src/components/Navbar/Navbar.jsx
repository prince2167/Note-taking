import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={classes.logo}>
        Note-Taking
      </NavLink>
    </nav>
  );
};

export default Navbar;
