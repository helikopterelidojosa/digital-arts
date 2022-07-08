const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;



//color light green for background
//random color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//background rectangle with random color
ctx.fillStyle = randomColor();
//background rectangle
ctx.fillRect(0, 0, 400, 400);

//for loop to draw a bunch of circles
for (let i = 0; i < 10; i++) {
    ctx.fillStyle = '#FF0000';//red
    ctx.beginPath();

    //random x and y coordinates
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 400);
//random radius
    let radius = Math.floor(Math.random() * 100);
    ctx.arc(x, y, radius, 0, 2 * Math.PI);

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

function refresh() {
    location.reload();
}

//function to save the canvas as an image
function saveCanvas() {
    var link = document.createElement('a');
    link.download = 'myCanvas.png';
    link.href = canvas.toDataURL();
    link.click();
}


 
    



    