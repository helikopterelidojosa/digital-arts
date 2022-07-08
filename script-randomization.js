function randomColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById("random-colors").style.background = bgColor;
    document.getElementById("demo").innerHTML = " "+ bgColor;
}

function randomDigit(){
    var x = Math.floor(Math.random() * 10);
    document.getElementById("demo2").innerHTML = " "+ x;
}
