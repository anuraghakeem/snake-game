const initGrid= () =>{
    const grid = [];
    for (let row = 0; row <20; row++) {
      const cols = [];
      for (let col = 0; col < 20; col ++) {  
        cols.push({
          row,
          col
        });
      }
      grid.push(cols);  
    }
    return grid;
  }

  export default initGrid;