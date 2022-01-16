import React, { useState, useEffect } from "react";
import "./index.css";
export const Select = ({ item, dispatch }) => {
  console.log(item);
  return (
    <select
      // value={item.value}
      onChange={(e) =>
        dispatch({
          type: `FORM_CHANGE`,
          payload: {
            formtype: `SELECT`,
            id: `${item.id}`,
            value: e.target.value,
          },
        })
      }
      className="select"
    >
      <option value="">Select Topics</option>
      <option value="politics">Politcs</option>
      <option value="entertainment">Entertainment</option>
      <option value="sports">Sports</option>
      <option value="business">Business</option>
      <option value="national">National</option>
      <option value="international">International</option>
      <option value="scienceandtech">Science and Technology</option>
      <option value="miscellaneous">Miscellaneous</option>
    </select>
  );
};
