export const inputs = (placeholders) => {
  return placeholders.map((item) => {
    return { id: item, value: "", placeholder: item };
  });
};
export const inputFormItems = (placeholders) => {
  return {
    inputs: inputs(placeholders),
  };
};

export const formItems = {
  inputs: [{ id: "title", value: "", placeholder: "title" }],
  textarea: {
    id: "textarea",
    value: "",
    placeholder: "type your content here",
  },
  select: { id: "select", value: "select options" },
  image: { id: "image", value: "" },
};
