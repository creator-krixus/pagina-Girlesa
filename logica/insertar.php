<?php
    include ("conexion.php");

    $nombre= $_POST['nombre'];
    $correo= $_POST['correo'];
    $telefono= $_POST['telefono'];

    $insertar = "INSERT INTO datos VALUES ('$nombre','$correo','$telefono')";

    $query = mysqli_query($conectar, $insertar);

    if ($query){
        echo "<script>  
        location.href= '../index.html';
        </script>";
    }else{
        echo "<script>
        location.href= '../index.html';
        </script>";
    }
?>