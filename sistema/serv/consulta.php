<?php

require_once("conectar_db.php");

$var_nombre = $_POST["nombrecarta"];

$var_expansion = $_POST["expansion"];



// algortmo subida de archivos

$carpeta_imagenes = '../../carpeta_imagenes/';

$nombre_imagen = basename($_FILES["imagen"]["name"]);

$direccion_servidor = $carpeta_imagenes . $nombre_imagen;

move_uploaded_file($_FILES["imagen"]["tmp_name"], $direccion_servidor);

//fin


$mensaje = "INSERT INTO nombrescartas (nombrecarta,expansion, imagen) values ('".$var_nombre."', '".$var_expansion."','".$nombre_imagen."' )";


if($ejec = mysqli_query($con,$mensaje)){

   $validacion = true;

}else{

   $validacion = false;

}

echo json_encode(array('validacion' => $validacion));

//echo $var_nombre."<br>";
//echo $var_expansion."<br>";
//echo $var_imagen."<br>";
?>