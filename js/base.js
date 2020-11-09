var logo_a = document.getElementById("logo_a")

var menu = document.getElementById("menu")

try{

var tabla1 = document.getElementById("tabla1")

tabla1.classList.add = "fondo-color-azul"
tabla1.classList.remove = "flex-column"
tabla1.classList.add = "flex-row"

}catch{


}



generar_encabezado()

generar_menu()



//swal("Good job!", "You clicked the button!", "success");


function generar_encabezado(){

  logo_a.innerHTML = `<div id="img1">
<img src="carpeta_imagenes/lithium_store_logo_transparente.png" />
</div>
<div style="position: relative" id="cajainput_grande">
<div style="position: absolute; z-index: 2" id="cajainput">
  <input id="input" type="text" />
</div>
<div
  style="position: absolute; right: 18.1%; z-index: 3"
  id="boton_busqueda"
>
  <img src="carpeta_imagenes/Search-button.jpg" />
</div>
<div
  style="position: absolute; z-index: 1"
  id="cajainput_transparencia"
>
  <div id="transparencia1"></div>
  <div id="transparencia15"></div>
  <div id="transparencia2"></div>
  <div id="transparencia25"></div>
  <div id="transparencia3"></div>
  <div id="transparencia35"></div>
  <div id="transparencia4"></div>
  <div id="transparencia45"></div>
  <div id="transparencia5"></div>
  <div id="transparencia55"></div>
  <div id="transparencia6"></div>
  <div id="transparencia65"></div>
  <div id="transparencia7"></div>
  <div id="transparencia75"></div>
  <div id="transparencia8"></div>
  <div id="transparencia85"></div>
  <div id="transparencia9"></div>
  <div id="transparencia10"></div>
  <div id="transparencia11"></div>
  <div id="transparencia12"></div>
</div>
</div>`


}




function generar_menu(){

  menu.innerHTML= ` <div class="item">
<p>Magic</p>
<p class="flecha_item">&darr;</p>
</div>
<div class="item">
<p>Pokémon</p>
<p class="flecha_item">&darr;</p>
</div>
<div class="item">
<p>Yu-Gi-Oh!</p>
<p class="flecha_item">&darr;</p>
</div>
<div class="item">
<p>Vanguard</p>
<p class="flecha_item">&darr;</p>
</div>
<div class="item">
<p>Accesorios</p>
<p class="flecha_item">&darr;</p>
</div>
<div class="item">
<p>Gift Card</p>
<p class="flecha_item">&darr;</p>
</div>`


}










var caja_pie =document.getElementById("caja_pie")

caja_pie.innerHTML =  `<div id="divisor_pie">
<div id="caja_texto_pie">
  <p>Pie de pagina</p>
</div>
<div class="columna flex-row-center">
  <div class="columna_pie flex-column-center">
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asdasd</p>
    </div>
    <div class="pie_columna_item">
      <p>asdasda</p>
    </div>
  </div>

  <div class="columna_pie flex-column-center">
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
  </div>

  <div class="columna_pie flex-column-center">
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
  </div>

  <div class="columna_pie flex-column-center">
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
  </div>

  <div class="columna_pie flex-column-center">
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
    <div class="pie_columna_item">
      <p>asd</p>
    </div>
  </div>
</div>
</div>`