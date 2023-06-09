import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Navbar, Searchbar, Sidebar } from "../../components/index";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const Layout = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { width } = useWindowSize();
  // if (width < 890) {
  //   setShowLinks(true);
  // }
  return (
    <>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className={classes.layout}>
        <Sidebar />
        <main className={classes.main}>
          <Searchbar />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
