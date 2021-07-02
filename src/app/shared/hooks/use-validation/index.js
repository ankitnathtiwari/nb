export const useValidation = () => {
  const pattern = /[a-z" "0-9().,]+/i;
  const handleValidation = (str) => {
    if (str.length === 0) {
      return false;
    } else {
      const result = str.match(pattern);
      return result[0] === result.input;
    }
  };
  return [handleValidation];
};

export const validate = () => {
  const pattern = /[a-z" "0-9().,']+/i;
  const handleValidation = (str) => {
    if (str.length === 0) {
      return false;
    } else {
      const result = str.match(pattern);
      return result[0] === result.input;
    }
  };
  return [handleValidation];
};

export const validateStr = (str) => {
  const pattern = /[a-z" "0-9().,']+/i;

  if (str.length === 0) {
    return false;
  } else {
    const result = str.match(pattern);
    console.log(result);
    return result[0] === result.input;
  }
};
