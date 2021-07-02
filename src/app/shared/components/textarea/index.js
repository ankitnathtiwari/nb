import React, { useState, useEffect } from "react";
import "./index.css";
export const Textarea = ({ item, dispatch }) => {
  return (
    <textarea
      value={item.value}
      onChange={(e) =>
        dispatch({
          type: `FORM_CHANGE`,
          payload: {
            formtype: `TEXTAREA`,
            id: `${item.id}`,
            value: e.target.value,
          },
        })
      }
      placeholder={item.placeholder}
      rows='10'
      cols='50'
      className='textarea'></textarea>
  );
};
