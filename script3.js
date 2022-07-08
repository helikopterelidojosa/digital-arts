const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

//global variables
//connect line to the canvas center
//random x and y coordinates
let x0 = Math.floor(Math.random() * 400);
let y0 = Math.floor(Math.random() * 400);


//call the draw function
draw();



//function to draw everithing on the canvas
//insert here the function you want to call

function draw() {
//call the drawRectangle function
drawRectangle();
//call the drawCircle function
drawCircle();
//call the drawLine function
drawLine();
}


//function
function drawRectangle() {
//color light green for background
ctx.fillStyle = 'lightgreen';
//background rectangle
ctx.fillRect(0, 0, 400, 400);
}

//function to save the canvas as an image
function saveCanvas() {
    var link = document.createElement('a');
    link.download = 'myCanvas.png';
    link.href = canvas.toDataURL();
    link.click();
}

//refresh the canvas
function refresh() {
    location.reload();
}


//random color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


//function draw a circle
function drawCircle() {
    ctx.fillStyle = '#FF0000';//red
    ctx.beginPath();

     //random radius
    let radius = Math.floor(Math.random() * 100);
    ctx.arc(x0, y0, radius, 0, 2 * Math.PI);

    //random color
    ctx.fillStyle = randomColor();

    ctx.fill();

    //random stroke color
    ctx.strokeStyle = randomColor();
    //random stroke width
    ctx.lineWidth = Math.floor(Math.random() * 10);
    ctx.stroke();
    ctx.closePath();
}


//function to draw a line 
function drawLine() {
    ctx.beginPath();
    //center of the canvas
    let x = 200;
    let y = 200;
    ctx.moveTo(x, x);
    //center of the circle
    let x2 = x0;
    let y2 = y0;
    ctx.lineTo(x2, y2);
    //random color
    ctx.strokeStyle = randomColor();
    //constant stroke width
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

//copilot made it much easier to draw this canvas

