
const contenido = document.getElementById("contenido")


let url = `https://swapi.dev/api/people/1/`

fetch(url)
.then(res => res.json())
.then(respuesta => {

    contenido.innerHTML = `<p>Nombre: ${respuesta.name}</p>`

})
.catch(error => console.error('error', error))








