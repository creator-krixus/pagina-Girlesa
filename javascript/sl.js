var imagenes = [
    "IMAGENES/j1.jpeg",
    "IMAGENES/j2.jpeg",
    "IMAGENES/j3.jpeg",
    "IMAGENES/j4.jpeg",
    "IMAGENES/j5.jpeg",
    "IMAGENES/j6.jpeg",
    "IMAGENES/j7.jpeg",
    "IMAGENES/j8.jpeg",
    "IMAGENES/j9.jpeg",
    "IMAGENES/j10.jpeg",
    "IMAGENES/j11.jpeg",
    "IMAGENES/j12.jpeg",
    "IMAGENES/j13.jpeg",
    "IMAGENES/j14.jpeg",
    "IMAGENES/j15.jpeg",
    "IMAGENES/j16.jpeg",
    "IMAGENES/j17.jpeg",
    "IMAGENES/j18.jpeg",
    "IMAGENES/j19.jpeg",
    "IMAGENES/j20.jpeg",
    "IMAGENES/j21.jpeg",
    "IMAGENES/j22.jpeg",
    "IMAGENES/j23.jpeg",
    "IMAGENES/j24.jpeg",
    "IMAGENES/j25.jpeg",
    "IMAGENES/j26.jpeg",
    "IMAGENES/j27.jpeg",
];
var num = 0;

function siguiente(){
    var slider =
    document.getElementById("slider");
    num++;
    if( num >= imagenes.length){
        num = 0;
    }
    slider.src = imagenes[num];
};
var num = 0;

function anterior(){
    var slider =
    document.getElementById("slider")
    num--;
    if(num < 0) {num = imagenes.length-1};
    slider.src = imagenes[num];
};