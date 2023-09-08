import { THEME_SET } from "../action";

const initialState = {
  theme: true,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_SET:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
