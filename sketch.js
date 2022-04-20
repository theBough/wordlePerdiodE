let count;
let b = []
function setup() {
  createCanvas(400, 400);
  count = 1;
  for(i=0; i<5; i++){
     b.push(new Box(200,200, 50,50,"x","#2196F3"));
  }//end loop
}//end setup

function draw() {
  background(220);
  for(i=0; i<5; i++){
    b[i].display()
  }//end loop
}//end draw
