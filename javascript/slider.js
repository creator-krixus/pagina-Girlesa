var imagenes = [ 
     "IMAGENES/c1.jpg" ,
     "IMAGENES/c2.jpg" ,
     "IMAGENES/c3.jpg" ,
     "IMAGENES/c4.jpg" ,
     "IMAGENES/c5.jpg" ,
     "IMAGENES/c6.jpg" ,
];
var num = 0;

function siguiente() {
    
    var slider = 
    document.getElementById("slider");
    num++;
    if( num >= imagenes.length) {
        num = 0;
    }
    slider.src = imagenes[num];
}
var num = 0;

function anterior() {
   
    var slider =
    document.getElementById("slider");
    num--;
    if( num < 0) {num = imagenes.length-1};
    slider.src = imagenes[num];
};