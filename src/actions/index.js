export const toggleLanguage = () => {
  return {
    type: "toggleLanguage"
  };
};

export const login = () => {
  return {
    type: "login"
  };
};

export const typeSearchWord = word => {
  return {
    type: "typing",
    payload: word
  };
};
