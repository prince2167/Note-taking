import classes from "./Label.module.css";
import { useNotes } from "../../contexts/note-context";
import { NoteCard } from "../../components/index";
import { filterNotes } from "../../utils";
const Label = () => {
  const { state, searchTerm } = useNotes();
  const { notes } = state;

  const labeledNotes = notes?.filter((note) => note.tag);
  const tags = [
    ...new Set(labeledNotes?.map((note) => note?.tag?.toUpperCase())),
  ];
  const updatedlabeledNotes = filterNotes(labeledNotes, searchTerm);
  return (
    <div className={classes.labelPage}>
      <div className={classes.labelContainer}>
        {tags?.map((tag, index) => (
          <div key={index}>
            <h2> {tag} </h2>
            <div className={classes.labelNotesList}>
              {updatedlabeledNotes
                ?.filter((note) => note?.tag?.toUpperCase() === tag)
                .map((note) => (
                  <>
                    <NoteCard note={note} key={note.id} />
                  </>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Label;
