import { useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Modal, NoteForm } from "../index";
import { RxHamburgerMenu, CgProfile, AiOutlinePlus } from "../../assets/icons";
const Navbar = ({ showLinks, setShowLinks }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <nav>
        <div className={classes.logoContainer}>
          <button onClick={() => setShowLinks(!showLinks)}>
            <RxHamburgerMenu size="18" />
          </button>
          <NavLink to="/" className={classes.logo}>
            Note-Taking
          </NavLink>
        </div>

        <div className={classes.links}>
          <button
            className={classes.createNote}
            onClick={() => setShowModal(true)}
          >
            <AiOutlinePlus size="20" />
          </button>

          <NavLink to="profile">
            <CgProfile size="18" />
          </NavLink>
        </div>
      </nav>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NoteForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default Navbar;
