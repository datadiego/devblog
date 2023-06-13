function createColor(){
  let col_aux = [];
  for(let i = 0; i < 3; i++){
    let val = int(random(4)) * 85;
    col_aux.push(val);
  }
  return color(col_aux);
}

class Particle {
  constructor(x,y){
    this.x = x
    this.y = y
    this.size = 1
    this.alphaColor = 255;
    this.col = createColor()

  }
  show(){
    noStroke()
    fill(this.col)
    ellipse(this.x, this.y, this.size)
  }
}
class Walker extends Particle {
  constructor(x,y){
    super(x,y)
    this.trails = []
    this.options = [this.wait, this.down, this.left,this.left, this.right]
    this.col = (0)
    
  }
  wait(){
    return
  }
  up(){
    this.y-=this.size
  }
  down(){
    this.y += this.size
  }
  left(){
    this.x -= this.size
  }
  right(){
    this.x += this.size
  }
  update(){
    let decision = int(random(this.options.length))
    // this.options[decision].bind(this)() //Ejecuta la decision
    this.x = constrain(this.x, 0, width)
    this.y = constrain(this.y, 0, height)
    this.trails.push(new Trail(this.x, this.y))
    for(let i=0; i<this.trails.length; i++){
      this.trails[i].update()
      if(this.trails[i].finished){
        this.trails.splice(i,1)
      }
    }
  }
  show(){
    noStroke()
    fill(this.col)
    rect(this.x, this.y, this.size)
    for(let i=0; i<this.trails.length; i++){
      this.trails[i].show()
    }
  }
}
class Trail extends Particle {
  constructor(x, y){
    super(x, y)
    this.fadeVelocity = random(2,20);
    this.finished = false;
    this.col = color(random(120,255),random([20,0,40]),random([20,0,40]))
  }
  update(){
    this.col.setAlpha(this.alphaColor)
    this.alphaColor-=this.fadeVelocity;
    if(int(random(2))==1){
      this.x += random(-1,1)*(this.size)
    }
    if(int(random(2))==1){
      this.y += random(-1,1)*(this.size)
    }
    if(this.alphaColor <= 0){
      this.finished = true
    }
    this.y-=this.size
    this.col.setAlpha(this.alphaColor)
  }
}
class Star extends Particle{
  constructor(x,y){
    super(x,y)
    this.col = color(255,255,255)
    this.vel = random(20,100)
    this.size = random(1,3)
  }
  update(){
    this.alphaColor = sin(frameCount/this.vel)*255
    this.col.setAlpha(this.alphaColor)
    this.y-=this.size
    if(this.y<0){
      this.y=height
    }
  }
 
}
let trail;
let walker = [];
let stars = [];
function setup() {
  lienzo = createCanvas(400, 400);
  lienzo.parent('sketch');
  let ancho = 50
  for(let i = 0; i<20; i++){
    stars.push(new Star(random(width), random(height)))
  }
  for(let i = 0; i<PI*2; i+=0.04){
      let x = (width/2)+(sin(i)*70)
      let y = (height/2)+(cos(i)*70)
      walker.push(new Walker(x, y))
  }
}

function draw() {
    background(0)
   for(let i = 0; i < stars.length; i++){
    stars[i].update()
    stars[i].show()
  }
 fill(0)
  ellipse(width/2, height/2, 140,140)
  for(let i = 0; i<walker.length; i++){
      walker[i].update()
    walker[i].show()

  }
  
 
   ellipseMode(CENTER)
  noFill()
  stroke('#FF5000')

}