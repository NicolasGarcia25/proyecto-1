<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body{
        background-color:darkgrey ;  
    }

#envo{
    width: 700px;
    margin-left: auto;
    margin-right: auto;
}

    form{
        background-color: black;
        color:blanchedalmond;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
        float: left;
        width: 700px;
    
    }
    h1{
        text-align: center;
        color:blue;
        background-color: darkslategrey;
        margin-bottom: 0px;
    }
    p{
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .caja{
        width: 100%;
        margin-bottom: 10px;
        float: left;
    }
    .caja img{
        width: 150px ;
    }

    .texto{
        width: 30%;
        float: left;
        text-align: right;
    }
    .control{
        width: 69%;
        text-align: left;
        margin-left: 1%;
        float: left;
    }
    .control input{
        width: 80%;
    }
    .caja2{
        width: 700px;
        float: left;
        background-color: burlywood;
        margin-bottom: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .col1{
       width: 450px;
       float: left;
   }

   
   .item{
        width: 450px;
        float: left;
        font-weight: bold;
        margin-bottom: 10px;
   }


   .desc{
       width: 450px;
       float: left;
       font-size: 12px;
       margin-bottom: 10px;
   }

   .col2{
       width: 250px;
       float: left;
   }

   .item2{
    width: 250px;
    float: left;
   }

   .item2 img{
        width: 50%;
        float: right;
   }
   .col3{
        width: 700px;
        float: left;

   }
   .col3_items{
    float: left;
    margin-right: 10px;
   }
   a {
    background-color:blanchedalmond;
   }
</style>
<body>

<div id="envo">    
    <div>
        <h1>Editar carta </h1>  
    </div>
   
<?php

require_once("conectar_db.php");

$id_carta = $_GET["id_carta"];

$mensaje = "SELECT * FROM nombrescartas WHERE id = ".$id_carta."";

$ejecutar = mysqli_query($con,$mensaje);

while($dataset = mysqli_fetch_array($ejecutar, MYSQLI_NUM)){

    echo '<div>
    <form action="editar.php" method="POST" enctype="multipart/form-data">
        <div class="caja">
            <div class="texto">
                <p>Nombre de la carta</p>
            </div>
            <div class="control">

                <input name="id_carta" type="hidden" readonly="readonly" value="'.$dataset[0].'"> 

                <input name="nombrecarta" type="text" value="'.$dataset[1].'" />
            </div>
        </div>

        <div class="caja">
            <div class="texto" >
                <p>Expansion</p>
            </div>
            <div class="control">
                <input name="expansion" type="text" value="'.$dataset[2].'"/>
            </div>
        </div>

        <div class="caja">
            <div class="texto">
                <p>Imagen</p>
            </div>
            <div class="control">
                <input name="imagen" type="file" />
            <div class="imagen_actual">
            <img src="carpeta_imagenes/'.$dataset[3].'"/>
            </div>
            </div>
        </div>
            <div>
                <input type="submit" value="Modificar S/Foto" />
            </div>


        
    </form>
    </div>';
}
//<div>
//<a href="editar_confoto.php?id_carta='.$dataset[0].'">Editar C/Foto</a>
//</div>
?>

</div>
</body>
</html>