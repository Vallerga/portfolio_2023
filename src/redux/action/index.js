export const THEME_SET = "THEME_SET";
export const LANGUAGE_SET = "LANGUAGE_SET";

export const setTheme = (arg) => {
  console.log("theme payload is: ", arg);
  return {
    type: THEME_SET,
    payload: !arg,
  };
};

export const setLanguage = (arg) => {
  console.log("language payload is: ", arg);
  return {
    type: LANGUAGE_SET,
    payload: arg,
  };
};
