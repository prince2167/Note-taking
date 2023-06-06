import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../../components/index";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={classes.layout}>
        <Sidebar />
        <main className={classes.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
