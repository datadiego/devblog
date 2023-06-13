const START = 0 //inicio de caracteres posibles
const END = 15500 //final de caracteres posiles, el maximo es 65536
let fontSize = 50 //Tamaño de la fuente
let anchoCanvas = 400 //Ancho del canvas
let altoCanvas = 400 //Alto del canvas
let vel = 50 //Tiempo de cambio y pausa
let colorBack = [0,0,0] //Color del fondo
let colorFront = [255, 255, 255] //Color de texto
let stringLength = 4 // Longitud del texto

function getBannedChars(){
  let banned = [
  "0378", "0379", "0380", "0381", 
  "0382", "0383", "038B", "038D",
  "03A2", 
  "0530", "0557", "0558",
  "058B", "058C", "0590", "05C8",
  "05C9", "05CA", "05CB", "05CC",
  "05CD", "05CE", "05CF", "05EB",
  "05EC", "05ED", "05EE", "05F5",
  "05F6", "05F7", "05F8", "05F9",
  "05FA", "05FB", "05FC", "05FD",
  "05FE", "05FF", 
  "070E", "074B", "074C", "07B2",
  "07B3", "07B4", "07B5", "07B6",
  "07B7", "07B8", "07B9", "07BA",
  "07BB", "07BC", "07BD", "07BE",
  "07BF", "07FB", "07FC",
  "082E", "082F", "083F", "085D",
  "085F", "086B", "086C", "086D",
  "086E", "086F", "088F", "0892",
  "0893", "0894", "0895", "0896",
  "0897",
  "0984", "098D", "098E", "0991",
  "0992", "09A9", "09B1", "09B3",
  "09B4", "09B5", "09BA", "09BB",
  "09C5", "09C6", "09C9", "09CA",
  "09CF", "09D0", "09D1", "09D2",
  "09D3", "09D4", "09D5", "09D6",
  "09D8", "09D9", "09DA", "09DB",
  "09DE", "09E4", "09E5", "09FF",
  "0A00", "0A04", "0A0B", "0A0C",
  "0A0D", "0A0E", "0A11", "0A12",
  "0A29", "0A31", "0A34", "0A37",
  "0A3A", "0A3B", "0A3D", "0A43",
  "0A44", "0A45", "0A46", "0A49",
  "0A4A", "0A4E", "0A4F", "0A50",
  "0A52", "0A53", "0A54", "0A55",
  "0A56", "0A57", "0A58", "0A5D",
  "0A5F", "0A60", "0A61", "0A62",
  "0A63", "0A64", "0A65", "0A77",
  "0A78", "0A79", "0A7A", "0A7B",
  "0A7C", "0A7D", "0A7E", "0A7F",
  "0A80", "0A84", "0A8E", "0A92",
  "0AA9", "0AB1", "0AB4", "0ABA",
  "0ABB", "0AC6", "0ACA", "0ACE",
  "0AD1", "0AD2", "0AD3", "0AD4",
  "0AD5", "0AD6", "0AD7", "0AD8", 
  "0AD9", "0ADA", "0ADB", "0ADC",
  "0ADD", "0ADE", "0ADF", "0AE4",
  "0AE5", "0AF2", "0AF3", "0AF4",
  "0AF5", "0AF6", "0AF7", "0AF8",
  "0B00", "0B04", "0B0D", "0B0E",
  "0B11", "0B12", "0B29", "0B31",
  "0B34", "0B3A", "0B3B", "0B45",
  "0B46", "0B49", "0B4A", "0B4E",
  "0B4F", "0B50", "0B51", "0B52",
  "0B53", "0B54", "0B58", "0B59",
  "0B5A", "0B59", "0B5A", "0B5B",
  "0B5E", "0B64", "0B65", "0B78",
  "0B79", "0B7A", "0B80", "0B81", "0B84",
  "0B8B", "0B8C", "0B8D", "0B91",
  "0B96", "0B97", "0B98", "0B9B",
  "0B9D", "0BA0", "0BA1", "0BA2",
  "0BA5", "0BA6", "0BA7", "0BAB",
  "0BAC", "0BAD", "0BBA", "0BBB",
  "0BBC", "0BBD", "0BC3", "0BC4",
  "0BC5", "0BC9", "0BCE", "0BCF", 
  "0BD1", "0BD2", "0BD3", "0BD4",
  "0BD5", "0BD6", "0BD8", "0BD9",
  "0BDA", "0BDB", "0BDC", "0BDE",
  "0BDF", "0BE0", "0BE1", "0BE2",
  "0BE3", "0BE4", "0BE5", "0BFB",
  "0BFC", "0BFD", "0BFE", "0BFF",
  "0C0D", "0C11", "0C29", "0C3A",
  "0C3B", "0C45", "0C49", "0C4E",
  "0C4F", "0C50", "0C51", "0C52",
  "0C53", "0C54", "0C57", "0C5C", 
  "0C5E", "0C5F", "0C64", "0C65", 
  "0C70", "0C71", "0C72", "0C73", 
  "0C74", "0C75", "OC76", "0C8D", 
  "0C91", "0CA9", "0CB4"
  ]
  let arr_aux = []
  for (let elem in banned){
    let deci = parseInt(elem, 16)
    let caracter = String.fromCharCode(deci);
    console.log(elem,caracter)
    arr_aux.push(caracter)
  }
  return arr_aux
  
}


if(altoCanvas < fontSize){
  altoCanvas = fontSize*2.5
}
let mood = false
let string = ""
let string2 = ""
let string3 = ""
let string4 = ""

let font;
let banned = []
function preload(){
  font = loadFont("unifont.otf")
}

function stringToArray(string){
  //Este metodo convierte el string a un array con cada caracter.
  return string.split("")
}
function arrayToString(arr){
  //Convierte un array en un string
  let string = ""
  for (let i=0; i<arr.length; i++){
    string+=arr[i]
  }
  return string
}
function getRandomChar() {
  let val = random(START, END);
  let caracter = String.fromCharCode(val);
  // while (caracter === "" || caracter === "" || caracter === " " || banned.includes(caracter)) {
  while (banned.includes(caracter)) {
    console.log("IN")
    val = random(START, END);
    caracter = String.fromCharCode(val);
  }
  
  return caracter;
}
function getRandomString(len){
  let string = ""
  for(let i=0; i<len; i++){
    string += getRandomChar()
  }
  return string
}
function muteRandomChar(string) {
  let arr = stringToArray(string);
  let val = floor(random(arr.length));
  let caracter = getRandomChar();
  arr[val] = caracter;
  let string_aux = arrayToString(arr);
  return string_aux;
}

function setup() {
  createCanvas(anchoCanvas, altoCanvas);
  colorBack = color(colorBack)
  colorFront = color(colorFront)
  background(colorBack);
  fill(colorFront)
  textSize(fontSize)
  textFont(font)
  banned = getBannedChars()
  string = getRandomString(stringLength)
  string2 = getRandomString(stringLength)
  string3 = getRandomString(stringLength)
  string4 = getRandomString(stringLength)
  textAlign(CENTER, TOP)
}

function draw() {
  background(colorBack)
  text(string, width/2, height/9+fontSize)
  text(string2, width/2, height/9+fontSize*2)
  text(string3, width/2, height/9+fontSize*3)
  text(string4, width/2, height/9+fontSize*4)

  
  if(mood){
  if(frameCount%1 == 0){
      string = muteRandomChar(string)
      string2 = muteRandomChar(string2)
      string3 = muteRandomChar(string3)
      string4 = muteRandomChar(string4)
    
  }
  }
  if(frameCount % vel == 0){
    mood = !mood
  }

}