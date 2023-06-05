export const initialState = { notes: [] };

export const noteReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_NEW_NOTE": {
      return {
        ...state,
        notes: [payload, ...state.notes],
      };
    }
    default: {
      return state;
    }
  }
};
