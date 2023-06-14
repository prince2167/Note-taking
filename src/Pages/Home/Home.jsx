import classes from "./Home.module.css";
import { NoteList } from "../../components/index";
import { useNotes } from "../../contexts/note-context";
import img1 from "../../assets/images/notes.gif"
const Home = () => {
  const { state } = useNotes();
  const { notes } = state;
  return (
    <div className={classes.homePage}>
      {notes?.length === 0 && (
        <img src={img1} alt="" />
      )}
      <NoteList />
    </div>
  );
};

export default Home;
