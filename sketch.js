let count;
let b;
function setup() {
  createCanvas(400, 400);
  count = 1;
  b= new Box(200,200, 50,50,"x","#2196F3");
}

function draw() {
  background(220);
  b.display()
}
