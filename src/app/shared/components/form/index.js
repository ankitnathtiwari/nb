import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { Input } from "../input/index";
import { MultiSelectWithCheckbox } from "../select-with-checkbox/Index";
import { Select } from "../select/index";
import { Textarea } from "../textarea/index";
import { UploadInput } from "../upload-img/index";
import { UploadVideo } from "../upload-video/index";

export const Form = ({ formItems, btnVal, dispatch, submitDispatch }) => {
  const handleSubmit = () => {
    return submitDispatch({ type: "handleSubmit", payload: formItems });
  };

  console.log({ formItems });
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {formItems.inputs.map((item) => {
        return <Input key={item.id} item={item} dispatch={dispatch} />;
      })}
      {formItems.textarea ? (
        <Textarea item={formItems.textarea} dispatch={dispatch} />
      ) : null}
      {formItems.multiSelect ? (
        <MultiSelectWithCheckbox
          item={formItems.multiSelect}
          dispatch={dispatch}
        />
      ) : null}
      {formItems.select ? (
        <Select item={formItems.select} dispatch={dispatch} />
      ) : null}
      {formItems.image ? (
        <UploadInput item={formItems.image} dispatch={dispatch} />
      ) : null}
      {formItems.video ? (
        <UploadVideo item={formItems.video} dispatch={dispatch} />
      ) : null}

      <Button onClick={handleSubmit}>{btnVal}</Button>
    </form>
  );
};
