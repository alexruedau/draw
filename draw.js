var text = document.getElementById("nLines");
var myBoton = document.getElementById("boton");
boton.addEventListener("click", drawByClick);

var draw = document.getElementById("my_draw");
var myCanvasWidth = draw.width;
var myCanvas = draw.getContext("2d");

function drawingLine(color, xinitial, yinitial, xfinal, yfinal) {
  myCanvas.beginPath();
  myCanvas.strokeStyle = color;
  myCanvas.moveTo(xinitial, yinitial);
  myCanvas.lineTo(xfinal, yfinal);
  myCanvas.stroke();
  myCanvas.closePath();
}

function drawByClick() {

  var lines = parseInt(text.value);
  var l = 0;
  var yi, xf, xf_2;
  var myColor = "green";
  var space = myCanvasWidth / lines;

  //while (l < lines) {
  //  yi = 10 * l;
  //  xf = 10 * (l + 1);
  //  drawingLine(myColor, 0, yi, xf, 300);
  //  console.log("Line " + l)
  //  l++;
  //}

  for (l = 0; l < lines; l++) {
    yi = space * l;
    xf = space * (l + 1);
    xf_2 = 300 - (l * space);
    drawingLine(myColor, 0, yi, xf, 300);
    drawingLine(myColor, 300, yi, xf_2, 300);
    console.log("Line " + l);
  }

  drawingLine(myColor, 1, 1, 1, 300);
  drawingLine(myColor, 1, 299, 299, 299);
}
