import { useState } from "react";
import { useNotes } from "../../contexts/note-context";
import classes from "./LabelDialouge.module.css";
import { toast } from "react-toastify";

const LabelDialouge = ({ note, setShowLabel }) => {
  const { state, dispatch } = useNotes();
  const { notes, archive, trash } = state;

  const { tag, id } = note;
  const [labelInput, setLabelInput] = useState(tag);

  const labelHandler = (event) => {
    event.preventDefault();
    if (labelInput) {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, tag: labelInput.trim() } : note
      );
      const updatedArchive = archive.map((note) =>
        note.id === id ? { ...note, tag: labelInput.trim() } : note
      );
      const updatedTrash = trash.map((note) =>
        note.id === id ? { ...note, tag: labelInput.trim() } : note
      );
      dispatch({
        type: "ADD_LABEL",
        payload: { updatedNotes, updatedArchive, updatedTrash },
      });
      setShowLabel(false);
      toast.success("Label added!!");
    } else {
      toast.error("Label can not be empty!!");
    }
  };
  return (
    <>
      <div
        className={classes.labelOverlay}
        onClick={() => setShowLabel(false)}
      ></div>
      <form className={classes.labelDialog} onSubmit={labelHandler}>
        <input
          type="text"
          value={labelInput}
          onChange={(event) => setLabelInput(event.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </>
  );
};

export default LabelDialouge;
