canvas = document.getElementById('gc');
ctx = canvas.getContext('2d');

let cols = 20, rows = 20, w = 20;
canvas.width = cols*w+1;
canvas.height = rows*w+1;


function makeGrid(width, height){
  let arr =  new Array(width)
  for(let i = 0; i < width; i++){
    arr[i] = new Array(height)
  }
  for(let i = 0; i < width; i++){
    for(let j = 0; j < height; j++){
      arr[i][j] = new Cell(i,j, w)
    }
  }
  return arr;
}

function setup(){
  for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++){
      grid[i][j].checkSurrounding();
    }
  }
}

function gameOver(){
  for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++){
      grid[i][j].show(true);
    }
  }
}

let grid = makeGrid(20,20);
setup();

canvas.addEventListener('click', function(event) {
  for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++){
      if(grid[i][j].contains(event.clientX-8, event.clientY-8)){
        if(grid[i][j].bomb){
          gameOver();
          return;
        }
        grid[i][j].show(false);
      }
    }
  }

 }, false);
