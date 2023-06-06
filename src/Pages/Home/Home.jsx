import classes from "./Home.module.css";
import { NoteList } from "../../components/index";
const Home = () => {
  return (
    <div className={classes.homePage}>
      <NoteList />
    </div>
  );
};

export default Home;
