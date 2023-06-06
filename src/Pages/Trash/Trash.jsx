import { NoteCard } from "../../components/index";
import { useNotes } from "../../contexts/note-context";
import classes from "./Trash.module.css";

const Trash = () => {
  const { state } = useNotes();
  const { trash } = state;
  return (
    <div className={classes.trashPage}>
      <div className={classes.trashNoteList}>
        {trash?.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default Trash;
