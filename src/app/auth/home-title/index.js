import React, { useState, useEffect } from "react";
import "./index.css";

export const Hometitle = () => {
  return (
    <div className='home-title'>
      <h1>Hi This is NB Reporter's Page. Please Sign In To Proceed</h1>
      <p>
        If You Are Not A NB Reporter Please
        <a href='https://newsbird.live/'> Click Here</a>
      </p>
    </div>
  );
};
