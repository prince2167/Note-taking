import { toast } from "react-toastify";
import { NoteCard } from "../../components/index";
import { useNotes } from "../../contexts/note-context";
import { filterNotes } from "../../utils";
import classes from "./Archive.module.css";

const Archive = () => {
  const { state, searchTerm, dispatch } = useNotes();
  const { archive } = state;
  const updatedArchiveNotes = filterNotes(archive, searchTerm);

  const clearArchiveHandler = () => {
    dispatch({ type: "CLEAR_ARCHIVE" });
    toast.success("Clear archive notes!!");
  };
  return (
    <div className={classes.archivePage}>
      {updatedArchiveNotes.length > 0 && (
        <button onClick={clearArchiveHandler}>Clear</button>
      )}
      <div className={classes.archiveNotesList}>
        {updatedArchiveNotes?.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
