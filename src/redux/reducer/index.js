const initialState = {
    example: true
  };

  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case "EXAMPLE":
        return {
          ...state,
          example: action.payload
        };
      default:
        return state;
    }
  };
  
  export default mainReducer;