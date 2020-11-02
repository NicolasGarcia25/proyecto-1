<?php

$con = mysqli_connect("localhost","root","","basededatosgral");

$var_nombre = $_POST["nombrecarta"];

$var_expansion = $_POST["expansion"];

$id_carta= $_POST["id_carta"];

// algortmo subida de archivos

$carpeta_imagenes = 'carpeta_imagenes/';

$nombre_imagen = basename($_FILES["imagen"]["name"]);

$direccion_servidor = $carpeta_imagenes . $nombre_imagen;

move_uploaded_file($_FILES["imagen"]["tmp_name"], $direccion_servidor);

//fin



$mensaje = "UPDATE nombrescartas SET nombrecarta = '".$var_nombre."', expansion = '".$var_expansion."' , imagen = '".$nombre_imagen."' WHERE id = ".$id_carta."";

if($ejec = mysqli_query($con,$mensaje)){

   header("location: formulariocartas.php");

}else{

   echo "error <br>";

}

//echo $var_nombre."<br>";
//echo $var_expansion."<br>";
//echo $var_imagen."<br>";
?>