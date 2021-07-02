import { inputs, textarea, select } from "./items";
import { onChangeHandler, onChangeHandlerInput } from "./handlers";

export const inputFormHandler = (state, action) => {
  return {
    ...state,
    message: "",
    formItems: {
      ...state.formItems,
      inputs: onChangeHandler(state.formItems.inputs, action.payload),
    },
  };
};

export const inputChange = (state, action) => {
  return {
    ...state,
    message: "",
    edited: true,
    formItems: {
      ...state.formItems,
      inputs: onChangeHandlerInput(state.formItems.inputs, action.payload),
    },
  };
};
export const textareaChange = (state, action) => {
  return {
    ...state,
    message: "",
    edited: true,
    formItems: {
      ...state.formItems,
      textarea: onChangeHandler(state.formItems.textarea, action.payload),
    },
  };
};
export const selectChange = (state, action) => {
  return {
    ...state,
    message: "",
    edited: true,
    formItems: {
      ...state.formItems,
      select: onChangeHandler(state.formItems.select, action.payload),
    },
  };
};
export const imageChange = (state, action) => {
  return {
    ...state,
    message: "",
    edited: true,
    formItems: {
      ...state.formItems,
      image: onChangeHandler(state.formItems.image, action.payload),
    },
  };
};

export const formChangeHandler = (state, action) => {
  switch (action.payload.formtype) {
    case "INPUT":
      return inputChange(state, action);
    case "TEXTAREA":
      return textareaChange(state, action);
    case "SELECT":
      return selectChange(state, action);
    case "FILE":
      return imageChange(state, action);
    default:
      throw new Error();
  }
};
