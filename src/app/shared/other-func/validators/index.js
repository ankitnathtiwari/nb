export const emailValidate = (str) => {
  return str.split("@")[1] === "gmail.com";
};

export const validateStr = (str) => {
  //  const pattern = /[a-z" "0-9().,']+/i;

  if (str.length === 0) {
    return false;
  } else {
    // const result = str.match(pattern);
    // return result[0] === result.input;
    return true;
  }
};
