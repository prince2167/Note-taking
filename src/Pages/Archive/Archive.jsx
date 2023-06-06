import { NoteCard } from "../../components/index";
import { useNotes } from "../../contexts/note-context";
import classes from "./Archive.module.css";

const Archive = () => {
  const { state, dispatch } = useNotes();
  const { archive } = state;
  return (
    <div className={classes.archivePage}>
      <div className={classes.archiveNotesList}>
        {archive?.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
