<?php

$con = mysqli_connect("localhost","root","","basededatosgral");

$id_carta = $_GET["id_carta"];

$mensaje = "DELETE FROM nombrescartas WHERE id = ".$id_carta."";

if($ejec = mysqli_query($con,$mensaje)){

   header("location: formulariocartas.php");
 
    }else{
 
    echo "error <br>";
 
 }



?>


