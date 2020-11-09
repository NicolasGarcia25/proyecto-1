//var item_carta = document.getElementById("item_carta")

const columna_cartas = document.getElementsByClassName("columna_cartas")
const contenido_cartas = document.getElementsByClassName("contenido_cartas")

for(let j=0;j <3; j++ ){
    generar_columna()
    for(let i=0;i <5; i++ ){
        generar_carta(j)
    }
}

function generar_columna(){
    contenido_cartas[0].innerHTML += `<div class="columna_cartas  flex-column">
    </div>`
}
function generar_carta(indice){
   columna_cartas[indice].innerHTML +=`<div class="item_carta bordes_cartas flex-row"><div class="imagen_carta">
                                        <img src="carpeta_imagenes/black_lotus.jpg">                     
                                     </div>
                                <div class="texto_carta">
                                    <div class="nombre_juego">
                                        <p>Magic: The Gathering</p>
                                    </div>
                                    <div class="nombre_expansion">
                                        <p>Commander: Zendikar Rising</p>
                                    </div>
                                    <div class="rareza">
                                        <p>Mythic #5</p>
                                    </div>
                                    <div class="nombre_carta">
                                        <p>Black Lotus</p>
                                    </div>
                                    <div class="cantidad_listada">
                                        <p> 41 Listados</p>
                                    </div>
                                    <div class="precio_mas_bajo flex-row">
                                        <div class="precio_descripcion">
                                        <p> Tan bajo como: </p>
                                        </div>
                                        <div class="precio_valor">
                                            <p>0,45$</p>
                                        </div>
                                    </div>
                                    <div class="precio_mercado flex-row">
                                        <div class="precio_mercado_descripcion">
                                            <p>Precio del mercado: </p>
                                        </div>
                                        <div    class="precio_mercado_valor">
                                            <p> 0,60$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                            }
