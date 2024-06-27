//Conectamos con el json
fetch("js/platos_argentinos.json")

.then(response => {
    return response.json()
})



.then(data =>{
   for (let i = 0; i < data.length; i++) {
      
    document.querySelector('.menuResto').innerHTML += ` <a href="plato.html?nombre=${data[i].plato}" class="plato">
            <div class="img_plato">
                 <img src="${data[i].image}" alt="" height="100">
                <div class="precio_plato">${data[i].price}</div>
            </div>
            <div class="datos_plato">
                <h3>${data[i].plato}</h3>
                <h5>${data[i].description}</h5>
            </div>
        </a>`
    }})