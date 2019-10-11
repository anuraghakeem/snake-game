import React, {useReducer} from 'react';

import initState from './initState';
import {Keys, move } from './Keys';

const App=()=> {
  const [state, dispatch] = useReducer(null,initState()); // todo: write the reducer
  console.log("state: ", state);
  // Set the style for the cells in the grid.
  // More info on top of the program page.
  const cellStyle = (cell) => {
    const { snake, food, showGrid } = state;
    let style = `cell `;
    if (snake.head.row == cell.row && snake.head.col == cell.col) {
      style= `cell head head-up`;
      if (move == Keys.Left) {
        style= `cell head head-left`;
      } else if (move == Keys.Up) {
        style= `cell head head-up`;
      } else if (move == Keys.Right) {
        style= `cell head head-right`;
      } else if (move == Keys.Down) {
        style= `cell head head-down`;
      }
    } else if (food.row == cell.row && food.col == cell.col)  {
      style= `cell food`;
    } else if (snake.tail.find(t => t.row === cell.row && t.col === cell.col)) {
      style = `cell tail`;
    }
    
    style = showGrid ? style + ' cell-border' : style;
    return style;
  }
    // Generate grid based on row X col
    const drawGrid = () => {
      const {grid} = state;
      return (
       grid.map((row, i) => {
         return row.map(cell => {
          let actorStyle = cellStyle(cell);
          return <div key={cell.row+cell.col} className={actorStyle}  />
         });
       })
      );
    }
    return (
      <div className="game">
         <div className="grid-container">
          <div className="grid">
            {drawGrid()}
          </div>
        </div>
      </div>
    )
  }

  export default App;