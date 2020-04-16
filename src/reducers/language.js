const languageReducer = (state = "en", action) => {
  switch (action.type) {
    case "toggleLanguage":
      if (state === "en") return "ar";
      return "en";
    default:
      return state;
  }
};

export default languageReducer;
