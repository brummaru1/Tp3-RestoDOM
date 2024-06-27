// console.log("Probando conexion js");
// let comida = document.getElementById("comida");
// /*muestra el txto del nodo capturado*/
// console.log(comida.innerText);
// /*muestra estructura del nodo capturado */
// console.log(comida.innerHTML);
// /*busca etiqueta, clase o id pero trae solo uno*/
// let titulo=document.querySelector("body");
// console.log(titulo);
// /*# para id, devuleve el primero que encuentra*/
// let titulo2=document.querySelector("#comida");
// console.log(titulo2);
// /*. para clase*/
// let clase=document.querySelector(".iconos");
// console.log(clase);
// /*trae todos etiqueta, clase o id pero debo indicar cual*/
// let lista=document.querySelectorAll("li");
// console.log("by query selector All: "+lista[0].innerText);

// let claselista=document.getElementsByClassName("iconos");
// console.log("by clase name: "+claselista[0].innerText);
// /*getEmentbyId es uno solo, el resto un array */


// const listaElementos = document.querySelectorAll("ul > li ,ul > h2");
// console.log("ForEach:")
// listaElementos.forEach((elemento) => {
//   console.log(elemento);
// });
// // listaElementos[2].innerHTML = `<span>Maria Eugenia</span>`
// //como añadir nuevos elementos:

// let listaDesordenada = document.createElement("ul");
// document.body.appendChild(listaDesordenada);


// let listaElemento1 = document.createElement("li");
// listaElemento1.textContent = "Es gratis";
// listaDesordenada.appendChild(listaElemento1);

// let listaElemento2 = document.createElement("li");
// listaElemento2.textContent = "Es impresionante";
// listaDesordenada.appendChild(listaElemento2);


// //Borrar elementos:
// function borrar(){
// listaDesordenada.removeChild(listaElemento2);
// }

// //archivo 03_Dom
// /*peticiones js>css pero css>js si hay important*/
// let etiqueta = "h1"; 
// let colorLetra = "blue";
// let colorFondo = "aquamarine";
// let tamanioLetra = "50px";

// function editarTextoEtiqueta(etiqueta,colorLetra,colorFondo,tamanioLetra){ 
// let cambioh1 = document.querySelector(`${etiqueta}`);
// cambioh1.style.color = `${colorLetra}`;
// cambioh1.style.backgroundColor = `${colorFondo}`;
// cambioh1.style.fontSize = `${tamanioLetra}`;
// }
// editarTextoEtiqueta(etiqueta,colorLetra,colorFondo,tamanioLetra);

// /*Para eso cambioh1 que esta dentro de la funcion no deberia estar*/ 
//  cambioh1.classList.add("iconos");
//  //si h1 tiene clase "iconos", se la saca, sino se la pone... a la clase
//  cambioh1.classList.toggle("iconos");

let cantidad = document.getElementById("cantidad");
let btnRestar=document.getElementById("cantidad") , btnSumar=document.getElementById("cantidad") , btnPedido=document.getElementById("cantidad");
let cant = 0;
cantidad.innerText=cant;
let subtotal = document.getElementById("subtotal");
let precioUnitaro = document.querySelector(".agregarCarrito");
let unit = 1890;
// precioUnitaro.innerText = `$ ${unit}`



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

// console.log(cant.innerHTML)
// // subtotal.innerText = `$ ${cantidadPedido}`;

// let carrito = document.querySelector(".btnAgregar")

// carrito.addEventListener("click", function () {
//     console.log("BOTON CARRIO AGREGADO")
//     //cartButton.style.backgroundColor = "red";
 
// });












