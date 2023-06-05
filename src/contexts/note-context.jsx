import { createContext, useContext, useReducer } from "react";
import { initialState, noteReducer } from "../reducers/noteReducer";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
