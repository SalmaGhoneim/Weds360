import languageReducer from "./language";
import loggedReducer from "./isLogged";
import searchReducer from "./search";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  currLanguage: languageReducer,
  isLogged: loggedReducer,
  search: searchReducer
});

export default allReducers;
