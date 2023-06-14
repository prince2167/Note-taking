export const initialState = {
  notes: [],
  archive: [],
  trash: [],
  sortBy: "",
  filters: [],
};

export const noteReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_NEW_NOTE": {
      return {
        ...state,
        notes: [payload, ...state?.notes],
      };
    }
    case "ADD_TO_ARCHIVE": {
      return {
        ...state,
        notes: payload.updatedNotes,
        archive: [payload.archive, ...state.archive],
        trash: payload.updatedTrash,
      };
    }
    case "REMOVE_FROM_ARCHIVE": {
      return {
        ...state,
        notes: [payload.note, ...state.notes],
        archive: payload.updatedArchive,
      };
    }
    case "CLEAR_ARCHIVE": {
      return {
        ...state,
        archive: [],
      };
    }
    case "ADD_TO_TRASH": {
      return {
        ...state,
        notes: payload.updatedNotes,
        trash: [payload.trash, ...state.trash],
        archive: payload.updatedArchive,
      };
    }
    case "REMOVE_FROM_TRASH": {
      return {
        ...state,
        notes: [payload.note, ...state.notes],
        trash: payload.updatedTrash,
      };
    }
    case "CLEAR_TRASH": {
      return {
        ...state,
        trash: [],
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
    case "SORT_BY": {
      return {
        ...state,
        sortBy: payload,
      };
    }
    case "FILTERS": {
      return {
        ...state,
        filters: payload,
      };
    }
    case "CLEAR_FILTERS": {
      return {
        ...state,
        sortBy: initialState.sortBy,
        filters: initialState.filters,
      };
    }
    default: {
      return state;
    }
  }
};
