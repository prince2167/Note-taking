import { useNotes } from "../../contexts/note-context";
import { NoteCard } from "../index";
import classes from "./NoteList.module.css";

const NoteList = () => {
  const { state, dispatch } = useNotes();
  const { notes } = state;

  const pinnedNotes = notes?.filter((note) => note?.isPinned);
  const otherNotes = notes?.filter((note) => !note?.isPinned);

  return (
    <div className={classes.noteList}>
      {pinnedNotes?.length > 0 && <h3> Pinned Notes</h3>}
      {pinnedNotes.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}

      {pinnedNotes?.length > 0 && otherNotes?.length > 0 && (
        <h3> Other Notes</h3>
      )}
      {otherNotes?.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
