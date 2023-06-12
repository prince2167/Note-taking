import classes from "./NoteCard.module.css";
import { useNotes } from "../../contexts/note-context";
import {
  BsPin,
  BsPinFill,
  IoIosColorPalette,
  MdLabelOutline,
  BiArchiveIn,
  BiArchiveOut,
  RiEditBoxLine,
  AiOutlineDelete,
  FaTrashRestoreAlt,
} from "../../assets/icons";
import { useState } from "react";
import { Modal, EditForm, LabelDialouge, ColorPalette } from "../index";
import { toast } from "react-toastify";

const NoteCard = ({ note }) => {
  const [showModal, setShowModal] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const { state, dispatch } = useNotes();
  const { notes, trash, archive } = state;
  const { id, title, description, tag, bgColor, isPinned, createdOn } = note;

  const isInArchive =
    archive.length > 0 && archive?.find(({ id }) => id === note.id);
  const isInTrash =
    trash.length > 0 && trash?.find((trashNote) => trashNote?.id === note?.id);

  const archiveHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    const updatedTrash = trash.filter((note) => note.id !== id);
    const archive = notes.includes(notes.find((note) => note.id === id))
      ? notes.find((note) => note.id === id)
      : trash.find((note) => note.id === id);
    dispatch({
      type: "ADD_TO_ARCHIVE",
      payload: { updatedNotes, updatedTrash, archive },
    });
    toast.success("Note add to archive");
  };
  const trashHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    const updatedArchive = archive.filter((note) => note.id !== id);
    const trash = notes.includes(notes.find((note) => note.id === id))
      ? notes.find((note) => note.id === id)
      : archive.find((note) => note.id === id);

    dispatch({
      type: "ADD_TO_TRASH",
      payload: { updatedNotes, updatedArchive, trash },
    });
    toast.success("Note add to trash");
  };

  const unArchiveHandler = (id) => {
    const updatedArchive = archive.filter((note) => note.id !== id);
    const note = archive.find((note) => note.id === id);
    dispatch({
      type: "REMOVE_FROM_ARCHIVE",
      payload: { updatedArchive, note },
    });
    toast.success("Note remove from archive");
  };

  const unTrashHandler = (id) => {
    const updatedTrash = trash.filter((note) => note.id !== id);
    const note = trash.find((note) => note.id === id);
    dispatch({
      type: "REMOVE_FROM_TRASH",
      payload: { updatedTrash, note },
    });
    toast.success("Note remove from trash");
  };

  const pinHandler = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    );

    const updatedArchive = archive.map((note) =>
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    );

    const updatedTrash = trash.map((note) =>
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    );
    dispatch({
      type: "PIN_NOTE",
      payload: { updatedNotes, updatedArchive, updatedTrash },
    });
  };

  const unPinHandler = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    );

    const updatedArchive = archive.map((note) =>
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    );

    const updatedTrash = trash.map((note) =>
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    );
    dispatch({
      type: "UNPIN_NOTE",
      payload: { updatedNotes, updatedArchive, updatedTrash },
    });
  };
  return (
    <>
      <div
        className={classes.notecardContainer}
        style={{ backgroundColor: note.bgColor }}
      >
        <div className={classes.cardHeader}>
          <strong>{title}</strong>
          {note.isPinned ? (
            <button onClick={() => unPinHandler(id)}>
              <BsPinFill size="20" />
            </button>
          ) : (
            <button onClick={() => pinHandler(id)}>
              <BsPin size="20" />
            </button>
          )}
        </div>
        <p>{description}</p>
        {tag && <strong className={classes.label}>{tag}</strong>}

        <div className={classes.cardFooter}>
          <p>Created on {createdOn}</p>
          <div className={classes.iconsGroup}>
            <button onClick={() => setShowPalette(!showPalette)}>
              <IoIosColorPalette size="20" />
            </button>

            <button onClick={() => setShowLabel(!showLabel)}>
              <MdLabelOutline size="20" />
            </button>

            <button onClick={() => setShowModal(true)}>
              <RiEditBoxLine size="20" />
            </button>

            {isInArchive ? (
              <button onClick={() => unArchiveHandler(id)}>
                <BiArchiveOut size="20" />
              </button>
            ) : (
              <button onClick={() => archiveHandler(id)}>
                <BiArchiveIn size="20" />
              </button>
            )}

            {isInTrash ? (
              <button onClick={() => unTrashHandler(id)}>
                <FaTrashRestoreAlt size="20" />
              </button>
            ) : (
              <button onClick={() => trashHandler(id)}>
                <AiOutlineDelete size="20" />
              </button>
            )}
          </div>
        </div>
      </div>

      {showPalette && (
        <ColorPalette noteId={id} setShowPalette={setShowPalette} />
      )}
      {showLabel && <LabelDialouge note={note} setShowLabel={setShowLabel} />}

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EditForm note={note} setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default NoteCard;
