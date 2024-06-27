// script.js

  // const productCard = document.createElement("div");
//Conectamos con el json

let nomComida = "get";
fetch("js/platos_argentinos.json")

.then(response => {
    return response.json()
})

.then(data =>{
    if(nomComida = data[i].comida){
  document.querySelector(".mainResto").innerHTML = ""; // Limpiar la lista de productos
      platos.forEach((plato) => {
        productCard.innerHTML += `<a href="plato.html?id=${encodeURIComponent(plato.id)}" class="plato" target="_blank">
        
            <div class="img_plato">
                <img src="${data[i].image}" alt="" height="100">
                <div class="precio_plato">${data[i].price}</div>
            </div>
            <div class="datos_plato">
                <h3>${data[i].plato}</h3>
                <h5>${data[i].description}</h5>
            </div>
        </a>`;
        productList.appendChild(productCard);
    });
  }
  


})