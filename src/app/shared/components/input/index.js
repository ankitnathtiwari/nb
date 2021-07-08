import React, { useState, useEffect } from "react";
import "./index.css";
export const Input = ({ item, dispatch }) => {
  return (
    <div>
      <input
        className='input'
        value={item.value}
        onChange={(e) =>
          dispatch({
            type: `FORM_CHANGE`,
            payload: {
              id: `${item.id}`,
              value: e.target.value,
              formtype: "INPUT",
            },
          })
        }
        placeholder={item.placeholder}
      />
    </div>
  );
};
