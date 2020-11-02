<?php

require_once("validar_sesion.php");


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="estilos_formulario_cartas.css">
</head>

<body>

<div id="envo">    
    <div>
        <h1>Carga de carta </h1>  
    </div>

    <div>
    <form action="consulta.php" method="POST" enctype="multipart/form-data">
        <div class="caja">
            <div class="texto">
                <p>Nombre de la carta</p>
            </div>
            <div class="control">
                <input name="nombrecarta" type="text" />
            </div>
        </div>

        <div class="caja">
            <div class="texto" >
                <p>Expansion</p>
            </div>
            <div class="control">
                <input name="expansion" type="text" />
            </div>
        </div>

        <div class="caja">
            <div class="texto">
                <p>Imagen</p>
            </div>
            <div class="control">
                <input name="imagen" type="file" />

            </div>
        </div>
            <div>
                <input type="submit" />
            </div>
        
    </form>
    </div>

    <?php
    
    $con = mysqli_connect("localhost","root","","basededatosgral");

    $mensaje = "SELECT * FROM nombrescartas";

    $ejecutar = mysqli_query($con,$mensaje);

    while($dataset = mysqli_fetch_array($ejecutar, MYSQLI_NUM)){

        echo '<div class="caja2">
        <div class="col1">
        <div class="item">
            <p>'.$dataset[1].'</p>
        </div>
        <div class="desc">
            <a href="www.google.com">'.$dataset[2].' </a>
        </div>
        <div class="desc">
            <p>
                [Dual Attack] (Once per turn, when this card attacks, switch this card to Active Mode after the battle.)
                [Activate:Main] Choose 2 black Battle Cards in your Drop Area with energy costs between 3 and 7, and place them at the bottom of your deck in any order : Play this card from your hand.
                [Activate:Battle] [Once per turn] Choose 1 card in your hand and place it in your Drop Area : This card gets +5000 power for the duration of the turn.</p>
        </div>
        </div>
        <div class="col2">
        <div class="item2">
            <img src="carpeta_imagenes/'.$dataset[3].'"/>
        </div>
        </div>

        <div class="col3">
            <div class="col3_items">
            <a href="editar_carta.php?id_carta='.$dataset[0].'">Editar</a>
            </div>
            <div class="col3_items">
            <a href="eliminar_carta.php?id_carta='.$dataset[0].'">Eliminar</a>
            </div>
        </div
    </div>';

    }

    ?>

</div>
</body>
</html>