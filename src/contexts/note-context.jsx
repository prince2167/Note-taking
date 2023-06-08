import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, noteReducer } from "../reducers/noteReducer";

const NoteContext = createContext();

const storedNote = (initialState) =>
  JSON.parse(localStorage.getItem("state")) || initialState;

const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState, storedNote);
  const [searchTerm, setSearchTerm] = useState("");
  const [applyFilter, setApplyFilter] = useState(false);

  // local storage
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return (
    <NoteContext.Provider
      value={{
        state,
        dispatch,
        searchTerm,
        setSearchTerm,
        applyFilter,
        setApplyFilter,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);

export { NoteProvider, useNotes };
