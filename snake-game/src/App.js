import React, {useReducer} from 'react';
import initState from './initState';

const App=()=> {
    const [state, dispatch] = useReducer(null,initState()); // todo: write the reducer
    console.log("state: ", state);
    // Generate grid based on row X col
    const drawGrid = () => {
      const {grid} = state;
      return (
       grid.map((row, i) => {
         return row.map(cell => {
           return <div key={cell.row+cell.col} className="cell cell-border"  />
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