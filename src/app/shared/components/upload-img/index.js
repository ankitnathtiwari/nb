import React, { useState, useEffect } from "react";
import "./index.css";
export const UploadInput = ({ item, dispatch }) => {
  return (
    <div className='upload'>
      <label htmlFor='upload'>Upload </label>
      <input
        id='upload'
        type='file'
        onChange={(e) =>
          dispatch({
            type: `FORM_CHANGE`,
            payload: {
              formtype: `FILE`,
              id: `${item.id}`,
              value: e.target.files[0],
            },
          })
        }
      />
      {item ? <p>{item.value.name}</p> : null}
    </div>
  );
};
