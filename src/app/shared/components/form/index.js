import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { Input } from "../input/index";
import { Select } from "../select/index";
import { Textarea } from "../textarea/index";
import { UploadInput } from "../upload-img/index";

export const Form = ({ formItems, btnVal, dispatch, submitDispatch }) => {
  const handleSubmit = () => {
    return submitDispatch({ type: "handleSubmit", payload: formItems });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {formItems.inputs.map((item) => {
        return <Input key={item.id} item={item} dispatch={dispatch} />;
      })}
      {formItems.textarea ? (
        <Textarea item={formItems.textarea} dispatch={dispatch} />
      ) : null}
      {formItems.select ? (
        <Select item={formItems.select} dispatch={dispatch} />
      ) : null}
      {formItems.image ? (
        <UploadInput item={formItems.image} dispatch={dispatch} />
      ) : null}

      <Button onClick={handleSubmit}>{btnVal}</Button>
    </form>
  );
};
