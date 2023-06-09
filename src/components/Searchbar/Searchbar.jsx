import classes from "./Searchbar.module.css";
import { AiOutlineSearch, TbAdjustmentsHorizontal } from "../../assets/icons";
import { useNotes } from "../../contexts/note-context";
import { Modal, Filter } from "../index";
import { useState } from "react";
const Searchbar = () => {
  const { searchTerm, setSearchTerm } = useNotes();

  const [showModal, setShowModal] = useState(false);
  return (
    <div className={classes.searchbarWrapper}>
      <div className={classes.container}>
        <button>
          <AiOutlineSearch size="22" />
        </button>
        <input
          value={searchTerm}
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          className={classes.filterButton}
          onClick={() => setShowModal(true)}
        >
          <TbAdjustmentsHorizontal size="22" />
        </button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Filter setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default Searchbar;
