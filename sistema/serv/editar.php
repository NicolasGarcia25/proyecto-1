<?php

$con = mysqli_connect("localhost","root","","basededatosgral");

$var_nombre = $_POST["nombrecarta"];

$var_expansion = $_POST["expansion"];

$id_carta= $_POST["id_carta"];


$var_nombre = mysqli_real_escape_string($con, $var_nombre);
$var_expansion = mysqli_real_escape_string($con, $var_expansion);


if (empty($_FILES["imagen"]["tmp_name"])){


   $mensaje = "UPDATE nombrescartas SET nombrecarta = '".$var_nombre."', expansion = '".$var_expansion."' WHERE id = ".$id_carta."";

   if($ejec = mysqli_query($con,$mensaje)){
   
      $validacion = true;
      $act_imagen = false;
   
   }else{
   
      $validacion = false;
      $act_imagen = false;
   }



}else{

   // algortmo subida de archivos

$carpeta_imagenes = '../../carpeta_imagenes/';

$nombre_imagen = basename($_FILES["imagen"]["name"]);

$direccion_servidor = $carpeta_imagenes . $nombre_imagen;


//if(extencion == "jpg" || extencion == "png" || extencion == "jpeg")

if(move_uploaded_file($_FILES["imagen"]["tmp_name"], $direccion_servidor))
{
   $validacion = true;
   $act_imagen = true;

}else{
   $validacion = false;
   $act_imagen = false;

}
//fin


$mensaje = "UPDATE nombrescartas SET nombrecarta = '".$var_nombre."', expansion = '".$var_expansion."' , imagen = '".$nombre_imagen."' WHERE id = ".$id_carta."";

if($ejec = mysqli_query($con,$mensaje)){

   $validacion = true;
   $act_imagen = true;
}else{

   $validacion = false;
   $act_imagen = false;
   
}


}

echo json_encode(array('validacion' => $validacion, 'act_imagen' => $act_imagen ));

//echo $var_nombre."<br>";
//echo $var_expansion."<br>";
//echo $var_imagen."<br>";
?>