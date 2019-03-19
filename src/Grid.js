import React from "react";
import Box from "./Box";

const Grid = ({ rows, cols, gridFull, selectBox }) => {
  const width = cols * 14;
  let rowsArr = [];

  let boxClass = "";
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let boxId = row + "_" + col;

      boxClass = gridFull[row][col] ? "box on" : "box off";

      rowsArr.push(
        <Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={row}
          col={col}
          selectBox={selectBox}
        />
      );
    }
  }
  return (
    <div className="grid" style={{ width: width }}>
      {rowsArr}
    </div>
  );
};

export default Grid;
