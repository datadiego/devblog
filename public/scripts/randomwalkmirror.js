let x, y;
let x2, y2;
let opciones = ["UP", "DOWN", "RIGHT", "LEFT", "RIGHT", "LEFT"]
let col1, col2, col3
function createColor(){
  let col_aux = [];
  for(let i = 0; i < 3; i++){
    let val = int(random(4)) * 85;
    col_aux.push(val);
  }
  return color(col_aux);
}
function step(stepSize){
  
  let decision = random(opciones)
  if(decision == "UP"){
    y-=stepSize
    y2-=stepSize
  }
  if(decision == "DOWN"){
    y+=stepSize
    y2+=stepSize
  }
  if(decision == "RIGHT"){
    x+=stepSize
    x2-=stepSize
  }
  if(decision == "LEFT"){
    x-=stepSize
    x2+=stepSize
  }
}

function setup() {
  lienzo = createCanvas(500, 500);
  lienzo.parent("sketch")
  noSmooth()
  background(0)
  noStroke()
  rectMode(CENTER)

  x = width/2
  y = height/2
  x2 = width/2
  y2 = height/2
  colores = []
  for(let i=0; i<2; i++){
    colores.push(createColor())
  }
}
let w = 5
function draw() {
  if(frameCount % 100 == 0){
    colores = []
  for(let i=0; i<int(random(2,4)); i++){
    colores.push(createColor())
  }
  }
    if(frameCount % int(random(50,200)) == 0){
    let alto = int(random((height)/w))*w
    x = width/2
    x2 = width/2
    y = alto
    y2 = alto
  }
  if(y > height-w/2){
        y = height-w/2
        y2 =height -w/2
      }
      if(y < w){
        y = w/2
        y2 = w/2
      }
  fill(random(colores))
  rect(x, y, w, w);
  rect(x2, y2, w, w)
  step(w);
}