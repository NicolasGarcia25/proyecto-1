const url = 'serv/editar.php'
const url2 = 'serv/formulario_cartas.php'
var form_editar = document.getElementById ("form_editar")
var id =  window.location.hash.substring(1)
var btn = document.getElementById ("btn1")
btn.addEventListener("click",actualizardatos)
var nombre = document.getElementById ("nombre")
var expansion = document.getElementById ("expansion")
var imagen = document.querySelector('input[type="file"]')
var imagen_act =document.getElementById ('imagen_actual')



function actualizardatos (){
    let carta = new FormData()
    carta.append('nombrecarta', nombre.value)
    carta.append('expansion', expansion.value)
    carta.append('imagen', imagen.files[0])
    carta.append('id_carta',id)

    fetch(url, {
        method: 'POST',
        body: carta
        })
    .then(res => res.json())
    .then(respuesta => {

        if(respuesta.validacion == true){

            alert('ok')
            window.location.href ="formulariocartas.html"

        }else{

            alert('error')
            alert(respuesta.mensaje)
            alert(respuesta.act_imagen)
        }

    })
    .catch(error => console.error('Error:', error))
}




fetch (url2)
.then (res => res.json())
.then (datos => {
    datos.forEach(datos => {
        if (datos.id == id){
            
            nombre.value = datos.nombre
            expansion.value = datos.expansion   
            imagen_act.src =`../carpeta_imagenes/${datos.imagen}`           


        }




    });
})
.catch (error => console.error('error', error))


//<div class="col3">
  //            <a href=editar_carta.html#${id.value}>Editar</a>
            //    </div>
          //      <div class="col3_items">
        //</div>        <a href=>Eliminar</a>
      //          </div>
    //        </div>

