<?php

$con = mysqli_connect("localhost","root","","basededatosgral");

$id_carta = $_POST["id_carta"];

$mensaje = "DELETE FROM nombrescartas WHERE id = ".$id_carta."";

if($ejec = mysqli_query($con,$mensaje)){

   $respuesta = true ;
 
    }else{
 
    $respuesta = false ;
 
 }
 
 echo json_encode(array('respuesta' => $respuesta , 'mensaje' => $mensaje))


?>


