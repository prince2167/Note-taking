import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Searchbar,
  Sidebar,
  MobileSidebar,
} from "../../components/index";
import { useState } from "react";

const Layout = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className={classes.layout}>
        <Sidebar />
        {showLinks && <MobileSidebar />}
        <main className={classes.main}>
          <Searchbar />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
