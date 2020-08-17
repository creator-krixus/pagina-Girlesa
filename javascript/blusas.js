var imagenes = [
    "IMAGENES/b1.jpeg",
    "IMAGENES/b2.jpeg",
    "IMAGENES/b3.jpeg",
    "IMAGENES/b4.jpeg",
    "IMAGENES/b5.jpeg",
    "IMAGENES/b6.jpeg",
    "IMAGENES/b7.jpeg",
    "IMAGENES/b8.jpeg",
    "IMAGENES/b9.jpeg",
    "IMAGENES/b10.jpeg",
    "IMAGENES/b11.jpeg",
    "IMAGENES/b12.jpeg",
    "IMAGENES/b13.jpeg",
    "IMAGENES/b14.jpeg",
    "IMAGENES/b15.jpeg",
    "IMAGENES/b16.jpeg",
    "IMAGENES/b17.jpeg",
    "IMAGENES/b18.jpeg",
    "IMAGENES/b19.jpeg",
    "IMAGENES/b20.jpeg",
    "IMAGENES/b21.jpeg",
    "IMAGENES/b22.jpeg",
    "IMAGENES/b23.jpeg",
    "IMAGENES/b24.jpeg",
    "IMAGENES/b25.jpeg",
    "IMAGENES/b26.jpeg",
    "IMAGENES/b27.jpeg",
    "IMAGENES/b28.jpeg",
    "IMAGENES/b29.jpeg",
    "IMAGENES/b30.jpeg",
    "IMAGENES/b31.jpeg",

];

var num = 0;
var slider = document.getElementById("slider");

function siguiente(){

    num++;
    if(num >= imagenes.length){num = 0;};
    
slider.src = imagenes[num];
};


function anterior(){

    num--;
    if(num < 0) {num = imagenes.length-1};
    
slider.src = imagenes[num];

};

