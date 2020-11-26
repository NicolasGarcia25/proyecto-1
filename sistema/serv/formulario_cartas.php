<?php
    
    $con = mysqli_connect("localhost","root","","basededatosgral");

    

    $mensaje = "SELECT * FROM nombrescartas";

    $ejecutar = mysqli_query($con,$mensaje);

    while($dataset = mysqli_fetch_array($ejecutar, MYSQLI_NUM)){

        $datos[] = array('id' => $dataset[0], 'nombre' => $dataset[1], 'expansion' => $dataset[2], 'imagen' => $dataset[3]);

    }

    echo json_encode($datos);

    ?>