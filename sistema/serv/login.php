<?php
session_start();
$_SESSION["sesion"] = false;

$con = mysqli_connect("localhost","root","","basededatosgral");

$var_nombre = $_POST["nombre_usuario"];

$var_contrasenia = $_POST["contrasenia_usuario"];


//$mensaje = "INSERT INTO basededatosuser (nombre_usuario,contrasenia_usuario) values ('".$var_nombre."', '".$var_contrasenia."')";

$mensaje = "SELECT * FROM basededatosuser WHERE nombre_usuario = '".$var_nombre."' AND contrasenia_usuario = '".$var_contrasenia."'  ";



if($ejec = mysqli_query($con,$mensaje)){

    $registros = mysqli_num_rows($ejec);

    if($registros >= 1){
        $_SESSION["sesion"] = true;
        header("location: formulariocartas.php");
    }else{
        header("location: inicio_sesion.html");
    }
}else{

   echo "error <br>";

}


//session_destroy();


?>