

//x and y are row and colomn num
function Cell(col, row, w){
  if(Math.random() < 0.2){
      this.bomb = true;
  } else {
      this.bomb = false;
  }

  this.w = w;
  this.col = col;
  this.row = row;
  this.x = this.col*this.w;
  this.y = this.row*this.w
  this.count = 0;

  ctx.fillStyle = "#000000";
  ctx.fillRect(this.x, this.y, this.w+1, this.w+1);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(this.x+1, this.y+1, this.w-1, this.w-1);
}

// Cell.prototype.floodFill = function(x, y){
//
// }

Cell.prototype.show = function(game){
  if(!game){
    ctx.fillStyle = "#BABABA";
    ctx.fillRect(this.x+1, this.y+1, this.w-1, this.w-1);
  }

  // if(this.count == 0 && !this.bomb && !game){
  //   floodFill(col, row);
  // }

    if(this.bomb){
      ctx.fillStyle = "#FF0000";
      ctx.beginPath();
      ctx.arc(this.x+this.w/2, this.y+this.w/2,5,0,2*Math.PI);
      ctx.fill();
      ctx.stroke();
    } else if(this.count !=0) {
      ctx.font = "12px Arial";
      ctx.fillStyle = "black";
      console.log('test');
      ctx.fillText(this.count,this.x+ this.w/2.6, this.y + this.w/1.3);
  }

}

Cell.prototype.contains = function(x, y){
  return ( x>this.x && x<this.x+this.w && y>this.y && y<this.y+this.w)
}

Cell.prototype.checkSurrounding = function(){
  for(let xoff = -1; xoff <=1; xoff++){
    for(let yoff = -1; yoff <=1; yoff++){
      let i = this.col + xoff;
      let j = this.row + yoff;
      if(i>=0 && i<cols && j>=0 && j<rows){
        if (grid[i][j].bomb){
          this.count++;
        }
      }
    }
  }
}
