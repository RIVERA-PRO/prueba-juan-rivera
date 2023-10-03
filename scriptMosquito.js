document.getElementById("mosquito").style.animation = "crecer 1.5s forwards";


setTimeout(function () {
    var y = 0;
    var x = 0;
    var controlY = 1;
    var controlX = 1;
    var velocidad = 1;

    var intervalo = setInterval(mover, 6);

    function mover() {
        //Eje Y
        if (controlY == 1) {
            y += velocidad;
        } else {
            y -= velocidad;
        }
        if (y <= 0) {
            controlY = 1;
            y = 0;
        } else if (y >= document.getElementById("lienzo").offsetHeight - 200) {
            controlY = 0;
            y = document.getElementById("lienzo").offsetHeight - 200;
        }

        //Eje X
        if (controlX == 1) {
            x += velocidad;
        } else {
            x -= velocidad;
        }
        if (x <= 0) {
            controlX = 1;
            x = 0;
        } else if (x >= document.getElementById("lienzo").offsetWidth - 200) {
            controlX = 0;
            x = document.getElementById("lienzo").offsetWidth - 200;
        }
        document.getElementById("mosquito").style.left = String(x) + "px";
        document.getElementById("mosquito").style.top = String(y) + "px";
    }
}, 2000); // 3000 milisegundos = 3 segundos