var imagenes = [
    "IMAGENES/n1.jpg",
    "IMAGENES/n2.jpg",
    "IMAGENES/n3.jpg",
    "IMAGENES/n4.jpg",
    "IMAGENES/n5.jpg",
];

var num = 0;
var slider = document.getElementById("slider");

function siguiente(){
    
    num++;
   if (num >= imagenes.length){
   num = 0;}
    slider.src = imagenes[num];
};

function anterior(){
  
    num--;
    if(num < 0){num = imagenes.length-1}
    slider.src =imagenes[num];  
};
