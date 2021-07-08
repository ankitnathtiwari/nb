import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { Input } from "../input/index";
import { Select } from "../select";
import { Textarea } from "../textarea";
import { UploadInput } from "../upload-img";

export const Form = ({ inputs, btnVal, handleSubmit }) => {
  console.log(inputs);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        key={inputs[0]}
        value={inputs[1]}
        onChange={inputs[2]}
        placeholder={inputs[3]}
      />

      <Button onClick={handleSubmit}>{btnVal}</Button>
    </form>
  );
};
