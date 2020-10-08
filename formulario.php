<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/fomulario.css">
    <title>Formulario</title>
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

            <input type="submit" value="enviar">

        </form>

    </div>

</body>

</html>