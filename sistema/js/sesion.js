const usuario = document.getElementById("usuario")
const clave = document.getElementById("clave")
const bnt1 = document.getElementById("btn1")

bnt1.addEventListener("click", validar)

function validar(){

   
    let datos = new FormData()
    datos.append('usuario', usuario.value)
    datos.append('clave', clave.value)
    let url = "serv/login.php"

    fetch(url, {
        method: 'POST',
        body: datos
      })
    .then(res => res.json())
    .then(respuesta => {

        if(respuesta.validacion == true){

            alert("ok")

            window.location.href = "formulariocartas.html";

        }else{

            alert("no ok")

        }



    })
    .catch(error => console.error('Error:', error))


}