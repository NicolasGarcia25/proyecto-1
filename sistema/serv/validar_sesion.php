<?php
session_start();

if(isset($_SESSION["sesion"]) && $_SESSION["sesion"] == true){
    
    $variable = "s" ;
}else{
    $variable = "n" ;
}

echo json_encode(array('sesion' => $variable));

?>