import { useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Modal, NoteForm } from "../index";
import {
  RxHamburgerMenu,
  CgProfile,
  SiMicrosoftonenote,
} from "../../assets/icons";
import { useWindowSize } from "../../hooks/useWindowSize";
const Navbar = ({ showLinks, setShowLinks }) => {
  const [showModal, setShowModal] = useState(false);
  const { width } = useWindowSize();
  return (
    <>
      <nav>
        <div className={classes.logoContainer}>
          <button onClick={() => setShowLinks(!showLinks)}>
            <RxHamburgerMenu size="22" />
          </button>
          <NavLink to="/" className={classes.logo}>
            Note-Taking App
          </NavLink>
        </div>

        <div className={classes.links}>
          <button
            className={classes.createNote}
            onClick={() => setShowModal(true)}
          >
            Create new note
            {/* <SiMicrosoftonenote size="20" /> */}
          </button>
          {width < 890 && (
            <NavLink to="profile">
              <CgProfile size="20" />
            </NavLink>
          )}
        </div>
      </nav>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NoteForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default Navbar;
