var caja_contenedora = document.getElementById ("caja_contenedora")
const url ="serv/validar_sesion.php"
const btn2 = document.getElementById ("btn2")
const url3 = "serv/consulta.php"
const urleliminar ="serv/eliminar_carta.php"
var nombre = document.getElementById ("nombre")
var expansion = document.getElementById ("expansion")
var editar = document.getElementsByClassName ("editar")
var imagen = document.querySelector('input[type="file"]')



btn2.addEventListener("click", cargardatos)

function cargardatos (){

    let carta = new FormData()
    carta.append('nombrecarta', nombre.value)
    carta.append('expansion', expansion.value)
    carta.append('imagen', imagen.files[0])

    fetch(url3, {
        method: 'POST',
        body: carta
        })
    .then(res => res.json())
    .then(respuesta => {

        if(respuesta.validacion == true){

            alert('ok')

            caja_contenedora.innerHTML +=`<div class="caja2">
            <div class="col1">
            <div class="item">
                <p>${nombre.value}</p>
            </div>
            <div class="desc">
                <a href="www.google.com"> ${expansion.value} </a>
            </div>
            <div class="desc">
                <p>
                    [Dual Attack] (Once per turn, when this card attacks, switch this card to Active Mode after the battle.)
                    [Activate:Main] Choose 2 black Battle Cards in your Drop Area with energy costs between 3 and 7, and place them at the bottom of your deck in any order : Play this card from your hand.
                    [Activate:Battle] [Once per turn] Choose 1 card in your hand and place it in your Drop Area : This card gets +5000 power for the duration of the turn.</p>
            </div>
            
            <div class="desc">
            <a href=editar_carta.html#${id.value}>Editar</a>
            </div>
            <div class="desc">
            <a class="eliminar" >Eliminar</a>
            </div>
            </div>
            <div class="col2">
            <div class="item2">
                <img src="../carpeta_imagenes/${imagen.files[0].name}"/>
            </div>
            </div>
    

        </div>`
            


             
        }else{

            alert('error')
        }



    })
    .catch(error => console.error('Error:', error))
}
    fetch(url)
    .then(res => res.json())
    .then(validar_sesion => { 
    if (validar_sesion.sesion == "s"){
        alert ("sesion iniciada")
    }
    if (validar_sesion.sesion == "n"){
        alert ("Inicie sesion para ingresar")
    }
})
.catch(error => console.error('Error:', error))

const url2 ="serv/formulario_cartas.php"

fetch(url2)
.then(res => res.json())
.then(datos =>{

    datos.forEach(datos =>{

        caja_contenedora.innerHTML +=`<div class="caja2 bordes">
        <div class="col1">
        <div class="item">
            <p>${datos.nombre}</p>
        </div>
        <div class="item">
            <a href="www.google.com"> ${datos.expansion} </a>
        </div>
        <div class="desc">
            <p>
                [Dual Attack] (Once per turn, when this card attacks, switch this card to Active Mode after the battle.)
                [Activate:Main] Choose 2 black Battle Cards in your Drop Area with energy costs between 3 and 7, and place them at the bottom of your deck in any order : Play this card from your hand.
                [Activate:Battle] [Once per turn] Choose 1 card in your hand and place it in your Drop Area : This card gets +5000 power for the duration of the turn.</p>
        </div>
        <div class="item">
        <a href=editar_carta.html#${datos.id}>Editar</a>
        </div>
        <div class="item">
            <a class="eliminar" href="" data-id="${datos.id}">Eliminar</a>
        </div>

        </div>
        <div class="col2">
        <div class="item2">
            <img src="../carpeta_imagenes/${datos.imagen}"/>
        </div>
        </div>

        

    </div>`

    })

    
    
    var eliminar = document.getElementsByClassName("eliminar")

    for(let i = 0; i < eliminar.length; i++){

        eliminar[i].addEventListener ("click", eliminar_elemento)

    }
        
    
    
})



function eliminar_elemento (){
    if (confirm ("Realmente desea eliminar este elemento?")){


        let carta = new FormData()
        carta.append('id_carta', this.dataset.id)
        fetch(urleliminar,{
            method: 'POST',
            body: carta
        })
        .then(res => res.json())
        .then(respuesta => {
            if (respuesta.respuesta == true){
                alert ("elemento eliminado con exito")
            }else{
                alert ("no se pudo eliminar el elemento")
            }

        })
            .catch(error => console.error('Error:', error))

    }
}


//<a></a>
//pagina.html#texto


//window.location.hash

//#texto

//window.location.hash.substring(1)

//texto

/////

//localStorage.setItem('id', 3)



//localStorage.getItem('id')

//localStorage.removeItem('id')

//localStorage.clear()