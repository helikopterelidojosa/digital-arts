//canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 300;

//background
ctx.fillRect(0, 0, 400, 300);


//frame
//strokestyle
// ctx.strokeStyle = "cyan";
//stoke rectangle
// ctx.strokeRect(10, 10, 380, 280);

//text
// ctx.fillStyle = "cyan";
// ctx.font = "15px Arial";
// ctx.fillText("camera rec", 30, 25);

// blinking effect
var i = 0;
setInterval(function() {
    if (i % 2 == 0) {
        ctx.fillStyle = "red";
        ctx.fillRect(15, 15, 10, 10);
        
    

    } else {

        ctx.fillStyle = "grey";
        ctx.fillRect(15, 15, 10, 10);
    }
    i++;
} , 500);

//function to save the canvas as an image
function saveCanvas() {
  var link = document.createElement('a');
  link.download = 'myCanvas.png';
  link.href = canvas.toDataURL();
  link.click();
}


//function random circle
function randomCircle() {
  function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
    ctx.fillStyle = '#FF0000';//red
    ctx.beginPath();

    //random x and y coordinates
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 300);
    //random radius
    let radius = Math.floor(Math.random() * 100);
    ctx.arc(x, y, radius, 0, 2 * Math.PI);

    //random color
    ctx.fillStyle = randomColor();

    ctx.fill();

    //random stroke color
    ctx.strokeStyle = "red";
    
    ctx.stroke();
    ctx.closePath();
}



    //draw 10 random lines
setInterval(function() {

  
//redraw the background
      //black
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 400, 300);


      randomCircle();
      //text
ctx.fillStyle = "cyan";
ctx.font = "15px Arial";
ctx.fillText("camera rec", 30, 25);

//frame
//strokestyle
ctx.strokeStyle = "cyan";
//stoke rectangle
ctx.strokeRect(10, 10, 380, 280);




    for (let i = 0; i < 5; i++) {
      x=Math.floor(Math.random() * 400);
        y=Math.floor(Math.random() * 300);

        xx=Math.floor(Math.random() * 400);
        yy=Math.floor(Math.random() * 300);
        
        //random number withing the range of 0 to 5
        function rNr() {
            return Math.floor(Math.random() * 10);
        }
      rNr();
        
//for loop 3 times for each line
      for (let j = 0; j < 3; j++) {

        ctx.beginPath();
        
        ctx.moveTo(x + rNr(),y + rNr());

        
        ctx.lineTo(xx + rNr(),yy + rNr());
        ctx.stroke();
       
        //random color
        ctx.strokeStyle = "cyan"
        ctx.stroke();


      }


    }

} , 4000);

//function to save the canvas as an image
function saveCanvas() {
  var link = document.createElement('a');
  link.download = 'myCanvas.png';
  link.href = canvas.toDataURL();
  link.click();
}











