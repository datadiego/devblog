function setup() {
  lienzo = createCanvas(400, 400);
  lienzo.parent('sketch')
  noStroke()
  fill(0)
}

let i = 0
function draw() {
  background(220);
  fill(0)
  rect(i, 0, 100)
  i++
  if(i > width){
    i = 0
  }
  
  fill(0,0,255)
  rect(frameCount, height-100, 50)
  
  fill(255, 0, 0)
  rect(frameCount%width, height-50, 50)
}