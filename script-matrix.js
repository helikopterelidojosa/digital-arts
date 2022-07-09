function randomText() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 2000; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

//reload paragraph every random seconds
setInterval(function() {
    text = randomText();
    document.getElementById("matrix").innerHTML = text;
}, 1000);






