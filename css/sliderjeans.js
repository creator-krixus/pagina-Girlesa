var imagenes = [
    "imagenes/j1.jpg",
    "imagenes/j2.jpg",
    "imagenes/j3.jpg",
    "imagenes/j4.jpg",
    "imagenes/j5.jpg",
    "imagenes/j6.jpg",
    "imagenes/j7.jpg",
 ];

 var num = 0;

 function siguiente(){
 
     var slider = 
     document.getElementById("slider");
     num++;
     if(num >= imagenes.length) {
         num = 0;
     }
     slider.src = imagenes[num];
 }
 var num = 0;
 
 function anterior(){
 
     var slider =
     document.getElementById("slider");
     num--;
     if (num < 0) {num = imagenes.length-1};
     slider.src = imagenes[num];
 };
