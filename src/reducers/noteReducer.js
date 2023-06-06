export const initialState = { notes: [], archive: [], trash: [] };

export const noteReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_NEW_NOTE": {
      return {
        ...state,
        notes: [payload, ...state.notes],
      };
    }
    case "ADD_TO_ARCHIVE": {
      return {
        ...state,
        notes: payload.updatedNotes,
        archive: [payload.archive, ...state.archive],
      };
    }
    case "REMOVE_FROM_ARCHIVE": {
      return {
        ...state,
        notes: [payload.note, ...state.notes],
        archive: payload.updatedArchive,
      };
    }
    case "ADD_TO_TRASH": {
      return {
        ...state,
        notes: payload.updatedNotes,
        trash: [payload.trash, ...state.trash],
      };
    }
    case "REMOVE_FROM_TRASH": {
      return {
        ...state,
        notes: [payload.note, ...state.notes],
        trash: payload.updatedTrash,
      };
    }
    case "PIN_NOTE": {
      return {
        ...state,
        notes: payload.updatedNotes,
        archive: payload.updatedArchive,
        trash: payload.updatedTrash,
      };
    }
    case "UNPIN_NOTE": {
      return {
        ...state,
        notes: payload.updatedNotes,
        archive: payload.updatedArchive,
        trash: payload.updatedTrash,
      };
    }
    case "EDITED_NOTE": {
      return {
        ...state,
        notes: payload.updatedNotes,
        archive: payload.updatedArchive,
        trash: payload.updatedTrash,
      };
    }
    case "CHANGE_BGCOLOR": {
      return {
        ...state,
        notes: payload.updatedNotes,
        archive: payload.updatedArchive,
        trash: payload.updatedTrash,
      };
    }
    case "ADD_LABEL": {
      return {
        ...state,
        notes: payload.updatedNotes,
        archive: payload.updatedArchive,
        trash: payload.updatedTrash,
      };
    }
    default: {
      return state;
    }
  }
};
