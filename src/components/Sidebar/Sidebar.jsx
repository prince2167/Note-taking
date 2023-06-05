import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import {
  GrHomeRounded,
  MdLabelOutline,
  BsArchive,
  CiTrash,
  CgProfile,
} from "../../assets/icons";
import { useState } from "react";
import { Modal, NoteForm } from "../../components/index";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.linksContainer}>
        <NavLink to="/">
          <GrHomeRounded size="25" />
          <p>Home</p>
        </NavLink>

        <NavLink to="/label">
          <MdLabelOutline size="30" />
          <p>Label</p>
        </NavLink>

        <NavLink to="/archive">
          <BsArchive size="25" />
          <p>Archive</p>
        </NavLink>

        <NavLink to="/trash">
          <CiTrash size="25" />
          <p>Trash</p>
        </NavLink>

        <NavLink to="/profile">
          <CgProfile size="25" />
          <p>Profile</p>
        </NavLink>

        <button onClick={() => setShowModal(true)}>Create a new note</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NoteForm setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default Sidebar;
