export const isEmptyString = string => {
  if (string && !string.trim()) {
    return false;
  }
  return true;
};
