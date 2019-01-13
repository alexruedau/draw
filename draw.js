var draw = document.getElementById("my_draw");
var myCanvas = draw.getContext("2d");

drawingLine("red", 20, 300, 220, 10);
drawingLine("blue", 310, 10, 10, 220);

function drawingLine(color, xinitial, yinitial, xfinal, yfinal) {
  myCanvas.beginPath();
  myCanvas.strokeStyle = color;
  myCanvas.moveTo(xinitial, yinitial);
  myCanvas.lineTo(xfinal, yfinal);
  myCanvas.stroke();
  myCanvas.closePath();
}
