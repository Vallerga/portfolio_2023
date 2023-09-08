export const THEME_SET = "THEME_SET";

export const setTheme = (arg) => {
  console.log("theme payload is: ", arg);
  return {
    type: THEME_SET,
    payload: !arg,
  };
};
