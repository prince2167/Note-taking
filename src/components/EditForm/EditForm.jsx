import { useState } from "react";
import classes from "./EditForm.module.css";
import { useNotes } from "../../contexts/note-context";
import { toast } from "react-toastify";

const EditForm = ({ note, setShowModal }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedDescription, setEditedDescription] = useState(note.description);

  const { state, dispatch } = useNotes();
  const { notes, archive, trash } = state;
  const editNote = (noteId) => {
    const updatedNotes = notes?.map((note) =>
      note.id === noteId
        ? { ...note, title: editedTitle, description: editedDescription }
        : note
    );
    const updatedArchive = archive?.map((note) =>
      note.id === noteId
        ? { ...note, title: editedTitle, description: editedDescription }
        : note
    );
    const updatedTrash = trash?.map((note) =>
      note.id === noteId
        ? { ...note, title: editedTitle, description: editedDescription }
        : note
    );

    dispatch({
      type: "EDITED_NOTE",
      payload: { updatedNotes, updatedArchive, updatedTrash },
    });
  };

  const EditFormHandler = (event) => {
    event.preventDefault();
    editNote(note.id);
    setShowModal(false);
    toast.success("Note successfull edited!!");
  };
  return (
    <div className={classes.formContainer}>
      <h2>Edit note</h2>

      <form onSubmit={EditFormHandler}>
        <div className={classes.title}>
          <p>Title</p>
          <input
            value={editedTitle}
            placeholder="Title"
            onChange={(event) => setEditedTitle(event.target.value)}
          />
        </div>

        <div className={classes.description}>
          <p>Description</p>
          <textarea
            value={editedDescription}
            placeholder="Description"
            onChange={(event) => setEditedDescription(event.target.value)}
          />
        </div>

        <div className={classes.buttonGroup}>
          <button
            className={classes.cancelButton}
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button className={classes.addButton} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
