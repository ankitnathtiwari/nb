import React, { useState, useEffect } from "react";
import "./index.css";

export const ReactPlayerControlls = ({
  volume,
  setVolume,
  seekValue,
  handleSeek,
  playValue,
}) => {
  const handleSliderChange = (e) => {
    setVolume(Number(e.target.value) / 100);
  };
  const handleSeekChange = (e) => {
    handleSeek(e);
  };
  return (
    <div className="react-player-controller">
      <input
        type="range"
        min="1"
        max="100"
        style={{ width: "90vw" }}
        value={seekValue}
        onChange={handleSeekChange}
      />
      <div className="react-player-controller-volume">
        <div>
          {volume <= 1 ? (
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000pt"
              height="20.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2912 4957 c-17 -7 -418 -288 -891 -624 l-858 -612 -460 -3 -460 -3
-49 -30 c-30 -19 -60 -49 -79 -79 l-30 -49 0 -997 0 -997 30 -49 c19 -30 49
-60 79 -79 l49 -30 460 -3 460 -3 846 -603 c465 -331 859 -611 876 -622 23
-15 47 -19 111 -19 75 0 86 3 125 30 59 42 97 99 109 165 7 37 9 796 8 2245
-3 1997 -4 2193 -19 2226 -24 52 -78 110 -124 130 -46 21 -133 24 -183 6z"
                />
                <path
                  d="M3772 3234 c-84 -42 -132 -121 -132 -216 1 -88 26 -126 197 -299
l156 -159 -160 -162 c-181 -185 -199 -214 -191 -317 11 -152 155 -252 306
-211 41 12 69 35 217 181 l170 168 160 -158 c88 -87 176 -167 195 -177 46 -25
171 -26 216 -2 76 42 134 134 134 216 0 85 -16 109 -194 290 l-170 173 161
162 c171 171 202 216 203 293 0 87 -55 179 -134 222 -45 24 -170 23 -216 -2
-19 -10 -107 -90 -195 -177 l-160 -158 -170 168 c-136 133 -178 170 -211 179
-66 19 -125 15 -182 -14z"
                />
              </g>
            </svg>
          ) : (
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="19.000000pt"
              height="19.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M3224 5106 c-18 -8 -434 -336 -926 -730 l-894 -715 -465 -3 c-458 -3
-465 -3 -521 -26 -109 -44 -198 -147 -224 -261 -18 -75 -20 -1531 -3 -1613 30
-140 139 -252 278 -284 42 -10 165 -14 495 -14 l439 0 895 -716 c492 -394 910
-722 928 -730 87 -36 200 12 233 99 15 40 15 4854 0 4894 -33 87 -149 136
-235 99z"
                />
                <path
                  d="M4255 3905 c-5 -2 -22 -6 -37 -9 -37 -8 -98 -63 -114 -103 -19 -44
-18 -107 2 -146 9 -18 42 -59 73 -92 206 -222 332 -486 377 -789 20 -132 15
-354 -11 -484 -50 -257 -180 -515 -353 -702 -81 -88 -102 -125 -102 -179 0
-139 143 -226 267 -162 23 11 74 58 118 108 307 350 458 749 458 1213 0 385
-102 721 -314 1030 -78 115 -216 269 -259 291 -37 18 -88 30 -105 24z"
                />
              </g>
            </svg>
          )}
        </div>
        <div>
          <input
            type="range"
            min="1"
            max="100"
            style={{ width: "15vw" }}
            value={volume}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>
      </div>
      {!playValue ? (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="30.000000pt"
          height="30.000000pt"
          viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
          className="play-button"
        >
          <g
            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M126 558 c-23 -33 -23 -443 0 -476 8 -12 21 -22 27 -22 7 1 91 51
187 113 171 110 175 114 175 147 0 33 -4 37 -175 147 -96 62 -180 112 -187
113 -6 0 -19 -10 -27 -22z m195 -110 c176 -112 187 -121 170 -141 -15 -19
-326 -217 -340 -217 -8 0 -11 65 -11 230 0 165 3 230 11 230 7 0 83 -46 170
-102z"
            />
          </g>
        </svg>
      ) : null}
    </div>
  );
};
