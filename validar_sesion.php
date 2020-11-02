<?php
session_start();

if(!isset($_SESSION["sesion"]) || $_SESSION["sesion"] == false){
    
    header("location: inicio_sesion.html");
}


?>