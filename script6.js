//canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//refresh the canvas
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







//next line updates changes live as soon as user inputs changes
window.setInterval(()=>{



//next line determines that we take data from the html-Form 
var myForm = document.getElementById('myForm');
//next lines inputs the user's form data such as width and height
canvas.width = myForm.elements['set-width'].value;
canvas.height = myForm.elements['set-height'].value;

let cv = canvas.width;
let ch = canvas.height;


   
//call the drawRectangle function
drawRectangle();

//for loop to draw random circles
for (let i = 0; i < cv; i++) {
//call the randomCircle function
randomCircle();
}




function drawRectangle() {
    //call the changeColor function
    
    ctx.fillRect(0, 0, cv, ch);
}


// function randomCircle 
function randomCircle() {
    //random x and y coordinates
    x0 = Math.floor(Math.random() * cv);
    y0 = Math.floor(Math.random() * ch);
    //call the drawCircle function
    drawCircle();

}

//circle function
function drawCircle() {
    //random color
    ctx.fillStyle = randomColor();
    //circle
    ctx.beginPath();
    ctx.arc(x0, y0, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

//random color function
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}





}, 2000);

 


