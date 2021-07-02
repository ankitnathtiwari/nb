export const emailValidate = (str) => {
  return str.split("@")[1] === "gmail.com";
};
