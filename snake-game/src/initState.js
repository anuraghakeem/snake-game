import initGrid from './initGrid'

const initState= ()=> {
    const grid = initGrid();
    return {
      grid,
      snake: {
        head: {
          row: 5,
          col: 9,
        },
        tail:[],
      },
      food: {
        row: Math.floor(Math.random() * 5),
        col: Math.floor(Math.random() * 5),
      },
      score: 0,
      showGrid: true,
      lost: false,
      message: 'Press <space> or touch/click to start the game',
      inprogress: false,
    }
  }

  export default initState;