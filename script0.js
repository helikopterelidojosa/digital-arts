const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;



//color light green for background
ctx.fillStyle = 'lightgreen';
//background rectangle
ctx.fillRect(0, 0, 400, 400);

//draw funny face
ctx.fillStyle = '#FF0000';//red
ctx.beginPath();
ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//draw eyes
//left eye
ctx.fillStyle = '#000000';//black
ctx.beginPath();
ctx.arc(150, 150, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//right eye
ctx.fillStyle = '#000000';//black
ctx.beginPath();
ctx.arc(250, 150, 20, 0, 2 * Math.PI);
//ctx.arc(150, 150, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//draw mouth
ctx.fillStyle = '#000000';//black
ctx.beginPath();
//rectangle fill
ctx.fillRect(150, 200, 100, 50);





