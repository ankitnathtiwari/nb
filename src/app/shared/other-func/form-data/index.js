export const formData = (state) => {
  const formItem = new FormData();
  formItem.append("title", state.formItems.inputs[0].value);
  formItem.append("content", state.formItems.textarea.value);
  formItem.append("topic", state.formItems.select.value);
  formItem.append("image", state.formItems.image.value);

  return formItem;
};
export const editFormData = (state) => {
  const formItem = new FormData();
  formItem.append("title", state.formItems.inputs[0].value);
  formItem.append("content", state.formItems.textarea.value);
  formItem.append("topic", state.formItems.select.value);
  formItem.append("image", state.formItems.image.value);
  formItem.append("_id", state.post._id);

  return formItem;
};
