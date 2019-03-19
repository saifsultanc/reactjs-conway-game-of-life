import React from "react";

const Box = ({ boxClass, id, selectBox, row, col }) => {
  return (
    <div className={boxClass} id={id} onClick={() => selectBox(row, col)} />
  );
};

export default Box;
