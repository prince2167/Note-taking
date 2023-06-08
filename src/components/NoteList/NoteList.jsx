import { useNotes } from "../../contexts/note-context";
import { filterNotes, getFilteredNotes, getSortedNotes } from "../../utils";
import { NoteCard } from "../index";
import classes from "./NoteList.module.css";

const NoteList = () => {
  const { state, searchTerm, applyFilter } = useNotes();
  const { notes, sortBy, filters } = state;

  const sortedNotes = applyFilter ? getSortedNotes(notes, sortBy) : notes;
  const filteredNotes = applyFilter
    ? getFilteredNotes(sortedNotes, filters)
    : notes;
  const pinnedNotes = filteredNotes?.filter((note) => note?.isPinned);
  const otherNotes = filteredNotes?.filter((note) => !note?.isPinned);

  const filteredOtherNotes = filterNotes(otherNotes, searchTerm);
  const filteredPinnedNotes = filterNotes(pinnedNotes, searchTerm);

  return (
    <div className={classes.noteList}>
      {filteredPinnedNotes?.length > 0 && <h3> Pinned Notes</h3>}
      {filteredPinnedNotes?.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}

      {filteredPinnedNotes?.length > 0 && filteredOtherNotes?.length > 0 && (
        <h3> Other Notes</h3>
      )}
      {filteredOtherNotes?.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
