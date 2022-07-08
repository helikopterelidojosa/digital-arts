//canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');







//set interval to call the draw function
setInterval(drawRectangle, 10);
//slider function changeColor fillStyle with hsla color slider
function changeColor() {
    h = document.getElementById("hue").value;
    s = document.getElementById("saturation").value;
    l = document.getElementById("lightness").value;
    ctx.fillStyle = "hsl(" + h + "," + s + "%," + l + "%)";
    //return ctx.fillStyle as a string in html paragraph
    document.getElementById("color-text").innerHTML = ctx.fillStyle;
}


function drawRectangle() {
    //call the changeColor function
    changeColor();
    ctx.fillRect(0, 0, 400, 400);
}

//function to save the canvas as an image
function saveCanvas() {
    var link = document.createElement('a');
    link.download = 'myCanvas.png';
    link.href = canvas.toDataURL();
    link.click();
}

//save the canvas every 3 seconds
setInterval(function() {
    saveCanvas();
}
, 3000);

//refresh the canvas
function refresh() {
    location.reload();
}

//save the canvas every 3 seconds
setInterval(function() {
    saveCanvas();
}
, 3000);


