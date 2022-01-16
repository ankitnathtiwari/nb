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

export const videoChange = (state, action) => {
  console.log({ state, action });
  return {
    ...state,
    message: "",
    edited: true,
    formItems: {
      ...state.formItems,
      video: onChangeHandler(state.formItems.video, action.payload),
    },
  };
};

export const selectChangeMultiple = (state, action) => {
  if (action.payload.checked) {
    console.log("if condition passed");
    return {
      ...state,
      message: "",
      edited: true,
      formItems: {
        ...state.formItems,
        multiSelect: {
          ...state.formItems.multiSelect,
          value: [...state.formItems.multiSelect.value, action.payload.value],
        },
      },
    };
  } else {
    console.log("else not ");
    return {
      ...state,
      message: "",
      edited: true,
      formItems: {
        ...state.formItems,
        multiSelect: {
          ...state.formItems.multiSelect,
          value: state.formItems.multiSelect.value.filter(
            (item) => item !== action.payload.value
          ),
        },
      },
    };
  }
};

export const formChangeHandler = (state, action) => {
  console.log({ state, action }, "forma change handler");
  switch (action.payload.formtype) {
    case "INPUT":
      return inputChange(state, action);
    case "TEXTAREA":
      return textareaChange(state, action);
    case "SELECT":
      return selectChange(state, action);
    case "SELECT_MULTIPLE":
      return selectChangeMultiple(state, action);
    case "FILE":
      return imageChange(state, action);
    case "VIDEO_FILE":
      return videoChange(state, action);
    default:
      throw new Error();
  }
};
