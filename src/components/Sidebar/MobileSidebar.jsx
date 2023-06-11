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
const MobileSidebar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={classes.responsiveSidebarContainer}>
        <div className={classes.linksContainer}>
          <NavLink to="/">
            <GrHomeRounded size="20" />
            <p>Home</p>
          </NavLink>

          <NavLink to="/label">
            <MdLabelOutline size="25" />
            <p>Label</p>
          </NavLink>

          <NavLink to="/archive">
            <BsArchive size="20" />
            <p>Archive</p>
          </NavLink>

          <NavLink to="/trash">
            <CiTrash size="20" />
            <p>Trash</p>
          </NavLink>

          <NavLink to="/profile">
            <CgProfile size="20" />
            <p>Profile</p>
          </NavLink>

          <button onClick={() => setShowModal(true)}>Create a new note</button>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NoteForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default MobileSidebar;
