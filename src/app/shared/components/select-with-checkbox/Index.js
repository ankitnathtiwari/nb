import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { selectTopics } from "../../../base-url";

export const MultiSelectWithCheckbox = ({ item, dispatch }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const selectItemBox = useRef();

  useEffect(() => {
    const closeModel = (e) => {
      if (!selectItemBox.current.contains(e.target)) {
        setOpenSelect(false);
      }
    };
    if (openSelect) {
      document.addEventListener("click", closeModel);
    }
    return () => {
      document.removeEventListener("click", closeModel);
    };
  });

  return (
    <div className="multi-select-with-checkbox">
      <div
        className="multi-select-with-checkbox-dropdown"
        onClick={() => setOpenSelect(!openSelect)}
      >
        <div>Select Topics</div>
        <div>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="15pt"
            height="15pt"
            viewBox="0 0 100.000000 100.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M75 720 c-19 -21 -18 -22 203 -243 l222 -222 222 222 c221 221 222
222 203 243 l-19 21 -203 -203 -203 -203 -203 203 -203 203 -19 -21z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        ref={selectItemBox}
        style={openSelect ? { display: "block" } : { display: "none" }}
      >
        <div className="multi-select-with-checkbox-dropdown-box">
          {selectTopics.map((selectItem) => {
            return (
              <div
                className="multi-select-checkbox-items"
                key={selectItem.value}
              >
                <label htmlFor="vehicle1">{selectItem.labelName}</label>
                <input
                  type="checkbox"
                  className="multi-select-checkbox-items-input"
                  id={selectItem.value}
                  name={selectItem.value}
                  value={selectItem.value}
                  onChange={(e) =>
                    dispatch({
                      type: `FORM_CHANGE`,
                      payload: {
                        formtype: `SELECT_MULTIPLE`,
                        //   id: `${item.id}`,
                        value: e.target.value,
                        checked: e.target.checked,
                      },
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
