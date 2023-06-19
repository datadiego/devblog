class TextMangler{
  constructor(texto){
    this.original = texto
    this.texto = this.original
    this.texto_arr = this.texto.split("")
    this.target = int(random(this.texto_arr.length))
    this.iter = 0
    this.limit_iter = 2
    this.complete_runs = 0
    this.chrs = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  }
  
obtenerCaracterASCIIAleatorio() {
  let numeroAleatorio = floor(random(33, 200));
  let caracterASCII = String.fromCharCode(numeroAleatorio);
  
  // Devolver el carácter ASCII aleatorio
  return caracterASCII;
}
  reset(){
    this.texto = this.original
    this.texto_arr = this.texto.split("")
    this.iter = 0
    this.complete_runs = 0
    this.target = int(random(this.texto_arr.length))
    this.mood = "mess"
  }
  update(){
    if(this.mood == "mess"){
    this.putRandomChar()
      
    }
    else{
      if(this.texto != this.original){
        this.putOriginalChar()
      }
    }
    this.checkIterations()
  }
  putOriginalChar(){
    if(this.iter < this.limit_iter){
    this.texto_arr[this.target] = random(this.chrs)
    }
    else{
      this.texto_arr[this.target] = this.original[this.target]
    }
    this.recreateText()
  }
  putRandomChar(){
    this.texto_arr[this.target] = random(this.chrs)
    this.recreateText()
  }
  checkIterations(){
    this.iter++
    if(this.iter > this.limit_iter){
      this.target++
      this.iter = 0
      this.limit_iter = 10

    }
    if(this.target > this.texto_arr.length-1){
      this.target = 0
      this.complete_runs++
    }
  }
  recreateText(){
    let new_string = ""
    for(let chr of this.texto_arr){
      new_string += chr
    }
    this.texto = new_string
  }
}

let t
let p
let font

function mess(){
  t.mood = "mess"
}
function tidy(){
  t.mood = "tidy"
}
function preload(){
  // font = loadFont('vera.ttf')
  // console.log(font)
}
let p1, p2, p3
function setup() {
  createCanvas(0, 0);
  noSmooth()
  // console.log(font)
  // textFont(font)
  p1 = select("#animated-link")
  // p2 = select("#animated-link2")
  // p3 = select("#animated-link3")
  console.log(p1)
  t = new TextMangler("cleardatadata")

  p1.mouseOver(mess);
  p1.mouseOut(tidy);
  // p2.mouseOver(mess);
  // p2.mouseOut(tidy);
  // p3.mouseOver(mess);
  // p3.mouseOut(tidy);

}

function draw() {
  background(220);
  t.update()
  p1.html(t.texto)
  // p2.html(t.texto)
  // p3.html(t.texto)
}

