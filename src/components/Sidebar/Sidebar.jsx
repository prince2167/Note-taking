import { NavLink, useNavigate } from "react-router-dom";
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
import { SignUp } from "../../Pages/index";
import { useAuth } from "../../contexts/auth-context";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const getActiveStyle = ({ isActive }) => ({
    borderRight: isActive ? "4px solid red" : "",
  });
  return (
    <>
      <div className={classes.sidebarContainer}>
        <div className={classes.linksContainer}>
          <NavLink to="/" style={getActiveStyle}>
            <GrHomeRounded size="25" />
            <p>Home</p>
          </NavLink>

          <NavLink to="/label" style={getActiveStyle}>
            <MdLabelOutline size="30" />
            <p>Label</p>
          </NavLink>

          <NavLink to="/archive" style={getActiveStyle}>
            <BsArchive size="25" />
            <p>Archive</p>
          </NavLink>

          <NavLink to="/trash" style={getActiveStyle}>
            <CiTrash size="25" />
            <p>Trash</p>
          </NavLink>

          <NavLink to="/profile" style={getActiveStyle}>
            <CgProfile size="25" />
            <p>Profile</p>
          </NavLink>
          <button
            onClick={() => (user ? setShowModal(true) : navigate("/login"))}
          >
            Create a new note
          </button>
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NoteForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default Sidebar;
