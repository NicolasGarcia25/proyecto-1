
const contenido = document.getElementById("contenido")


for()

let url = `https://swapi.dev/api/people/${i}/`

fetch(url)
jdhgjh
dushgfhsdsdj
.then(res => res.json())
.then(respuesta => {

    contenido.innerHTML = `<p>Nombre: ${respuesta.name}</p>`

})
.catch(error => console.error('error', error))








