<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilos.css">
    <title>Documento con php</title>
</head>
<body>
    
<div class="form">

<form action="./logica/insertar.php" method="POST">
   
     <label for="nom">Nombre:</label>
     <br>			
     <input type="text" name="nombre" placeholder="nombre" required>
     <br><br>

     <label for="correo">Correo:</label>
     <br>
     <input type="text" name="correo" placeholder="correo" required>
     <br<br><br><br>

     <label for="tel">Telefono:</label>
     <br>
     <input type="text" name="telefono" placeholder="telefono" required>
     <br><br>

     <input type="submit"  value="enviar">

</form>

</div>
<br><br>
    <?php
        echo "Hola mundo desde Medellin";
        ?>

<br><br>

    <?php 
    function test(){
        $a=7;
        echo "$a";// variable local solo puede ser vista en la funcion test
    }
    test();
    ?>

<?php 
    $dia = 23;  //Se declara una variable de tipo entera (integer). 
    $sueldo = 877.802; //Se declara una variable de tipo decimal (doublé). 
    $nombre = "juan"; //Se declara una variable de tipo texto (string).  
    $exite = true; //Se declara una variable lógica (boolean). 
 
  echo  "<p>Variable entera:</p>";   
  echo $dia; 
  echo "<br><br>"; 
  echo "Variable double: "; 
  echo $sueldo; 
  echo "<br><br>"; 
  echo "Variable string: "; 
  echo $nombre; 
  echo "<br><br>"; 
  echo "Variable boolean: "; 
  echo $exite; 
  ?>

</body>

</html>