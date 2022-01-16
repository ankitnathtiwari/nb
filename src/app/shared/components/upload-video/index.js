import React, { useState, useEffect } from "react";
import "./index.css";

export const UploadVideo = ({ item, dispatch }) => {
  const [message, setMessage] = useState("");
  const handleVideoChange = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].type.split("/")[0] === "video") {
        setMessage("");
        dispatch({
          type: `FORM_CHANGE`,
          payload: {
            formtype: `VIDEO_FILE`,
            id: `${item.id}`,
            value: e.target.files[0],
          },
        });
      } else {
        setMessage("Please Upload Video File");
        dispatch({
          type: `FORM_CHANGE`,
          payload: {
            formtype: `VIDEO_FILE`,
            id: `${item.id}`,
            value: "",
          },
        });
      }
    }
  };

  return (
    <div className="upload">
      <label htmlFor={item.id}>{item.labelName}</label>
      <input id={item.id} type="file" onChange={handleVideoChange} />
      {item ? <p>{item.value.name}</p> : null}
      {message.length > 0 ? <p style={{ color: "red" }}>{message}</p> : null}
    </div>
  );
};
