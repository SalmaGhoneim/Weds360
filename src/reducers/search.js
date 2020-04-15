const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "typing":
      return action.payload;
    // case "search":
    // search;
    default:
      return state;
  }
};

export default searchReducer;
