let cant=0;
//Conectamos con el json
function sumar(){
    if(cant < 15){
      btnsumar.innerText= "add"
       btnrestar.innerText= "remove"
      cant = cant + 1;
      cantidad.innerText=cant;
    }
    else{
      btnsumar.innerText = "block"
      btnsumar.style.color = "gray"
      btnsumar.style.cursor = "default"
      alert("No se puede puede pedir mas de 15 platos, hace mal a la saludo <3");}
  
      cantidadPedido = cant*unit;
      subtotal.innerText = `$ ${cantidadPedido}`;
  
    }
  
  function restar(){
    if(cant > 0){
      btnrestar.innerText= "remove"
      btnsumar.innerText= "add"
      cant = cant - 1;
      cantidad.innerText=cant;
    }
    else{
      btnrestar.innerText = "block"
      btnrestar.style.color = "gray"
      alert("No se puede puede pedir 0 platos");}
       cantidadPedido = cant*unit;
      subtotal.innerText = `$ ${cantidadPedido}`;
    }
  // prompt("Como te llamas");
  function agregarPedido(){
  cantidadPedido = cant*unit;
  console.log(cantidadPedido);
  }
  
;
  
//   let carrito = document.querySelector(".btnAgregar")
  
//   carrito.addEventListener("click", function () {
//       console.log("BOTON CARRIO AGREGADO")
//       //cartButton.style.backgroundColor = "red";
   
//   });




fetch("js/platos_argentinos.json")

.then(response => {
    return response.json()
})




.then(data =>{
    let link = location.href;
    let comida =link.split("=");
    let cantidad = document.getElementById("cantidad");
    let btnRestar=document.getElementById("cantidad") , btnSumar=document.getElementById("cantidad") , btnPedido=document.getElementById("cantidad");
    let cant = 0;
    // cantidad.innerText=cant;
    // let subtotal = document.getElementById("subtotal");
    // let precioUnitaro = document.querySelector(".puntuResto");
    // let unit = 1890
    // precioUnitaro.innerText = `$ ${unit}`

    
    for (let i = 0; i < data.length; i++) {
        if(comida[1] == data[i].plato){
    document.querySelector('.mainResto').innerHTML += `<section class="linkResto">
  
    <div class="picResto">
        <img src="${data[i].image}" >
        <div class="degradado"></div>
    </div>
    <div class="nameResto">
        <div class="vaina">
            <h2>${data[i].plato}</h2>
            <h5 class="gris_txt">${data[i].description}</h5>
        </div>

    </div>
     <div class="puntuResto">${data[i].rate}</div></section>
<br><br>
<section class="descResto gris_txt">
    <p class="p10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum pariatur totam, optio magnam.
    </p>

</section>`}}})

    
