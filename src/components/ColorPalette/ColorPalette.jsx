import classes from "./ColorPalette.module.css";
import { colors } from "../../utils/color";
import { useNotes } from "../../contexts/note-context";
import { toast } from "react-toastify";
const ColorPalette = ({ noteId, setShowPalette }) => {
  const { state, dispatch } = useNotes();
  const { notes, archive, trash } = state;

  const changeBgColor = (noteId, color) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, bgColor: color } : note
    );
    const updatedArchive = archive.map((note) =>
      note.id === noteId ? { ...note, bgColor: color } : note
    );
    const updatedTrash = trash.map((note) =>
      note.id === noteId ? { ...note, bgColor: color } : note
    );

    dispatch({
      type: "CHANGE_BGCOLOR",
      payload: { updatedNotes, updatedArchive, updatedTrash },
    });
    toast.success("Background color change successfull !!");
    setShowPalette(false)
  };
  return (
    <>
      <div
        className={classes.paletteOverlay}
        onClick={() => setShowPalette(false)}
      ></div>
      <div className={classes.colorPalette}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => changeBgColor(noteId, color)}
            className={classes.palette}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ColorPalette;
