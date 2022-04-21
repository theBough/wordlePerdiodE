function Box(x,y,w,h,letter){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.letter = letter
  
  this.display = function(){
    //bottom  
    fill("black")
    rect(this.x, this.y, this.w, this.h);
    textSize(50)
    fill("white")
    text(this.letter, this.x+10, this.y+35)
  }//end display
  
}//end Box
