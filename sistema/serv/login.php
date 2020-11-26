<?php
session_start();
$_SESSION["sesion"] = false;
$validacion = false;

$con = mysqli_connect("localhost","root","","basededatosgral");

$var_nombre = $_POST["usuario"];

$var_contrasenia = $_POST["clave"];


//$mensaje = "INSERT INTO basededatosuser (nombre_usuario,contrasenia_usuario) values ('".$var_nombre."', '".$var_contrasenia."')";

$mensaje = "SELECT * FROM basededatosuser WHERE nombre_usuario = '".$var_nombre."' AND contrasenia_usuario = '".$var_contrasenia."'  ";



if($ejec = mysqli_query($con,$mensaje)){

    $registros = mysqli_num_rows($ejec);

    if($registros >= 1){
        $_SESSION["sesion"] = true;
        $validacion = true;

    }
}

echo json_encode(array('validacion' => $validacion));

//session_destroy();


?>