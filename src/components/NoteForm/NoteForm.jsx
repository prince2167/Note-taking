import { useState } from "react";
import classes from "./NoteForm.module.css";
import uuid from "react-uuid";
import { useNote } from "../../contexts/note-context";
import { toast } from "react-toastify";

const NoteForm = ({ setShowModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { state, dispatch } = useNote();

  const addNoteHandler = (event) => {
    event.preventDefault();
    const newNote = {
      id: uuid(),
      title,
      description,
      tag: "",
      bgColor: "",
      isPinned: false,
      createdOn: Date.now(),
    };

    if (title && description) {
      dispatch({ type: "CREATE_NEW_NOTE", payload: newNote });
    } else {
      toast.error("This field can not be empty!!");
    }

    setTitle("");
    setDescription("");
  };

  return (
    <div className={classes.formContainer}>
      <h2>Create new note</h2>

      <form onSubmit={addNoteHandler}>
        <div className={classes.title}>
          <p>Title</p>
          <input
            value={title}
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className={classes.description}>
          <p>Description</p>
          <textarea
            value={description}
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
