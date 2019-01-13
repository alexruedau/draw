var draw = document.getElementById("my_draw");
var my_canvas = draw.getContext("2d");

my_canvas.beginPath();
my_canvas.strokeStrike = "red";
my_canvas.moveTo(100, 100);
my_canvas.lineTo(200, 200);
my_canvas.stroke();
my_canvas.closePath();
