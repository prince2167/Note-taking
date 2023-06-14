import { NoteCard } from "../../components/index";
import { useNotes } from "../../contexts/note-context";
import { filterNotes } from "../../utils";
import classes from "./Trash.module.css";

const Trash = () => {
  const { state, searchTerm, dispatch } = useNotes();
  const { trash } = state;
  const updatedTrash = filterNotes(trash, searchTerm);

  const clearTrashHandler = () => {
    dispatch({ type: "CLEAR_TRASH" });
    toast.success("clear trash notes!!");
  };
  return (
    <div className={classes.trashPage}>
      {updatedTrash?.length > 0 && (
        <button onClick={clearTrashHandler}>Clear</button>
      )}
      {updatedTrash?.length ===0 && <h2>Trash is empty...</h2>}
      <div className={classes.trashNoteList}>
        {updatedTrash?.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default Trash;
