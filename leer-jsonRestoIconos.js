fetch("js/restaurantes.json")

.then(response => {
    return response.json()
})



.then(data =>{
    let link = location.href;
    let resto =link.split("=");
   for (let i = 0; i < data.length; i++) {
      if(resto[1] == data[i].truck_id){
    document.querySelector('.mainResto').innerHTML += ` <section class="linkResto">
<div class="picResto">
<img src="${data[i].avatar.src}"></div>
<div class="nameResto">
    <div>
        <h2>${data[i].name}</h2>
        <h6>${data[i].direccion}</h6>
    </div>

   
</div>
<div class="puntuResto">${data[i].puntuacion}</div>
<div class="datos_iconos">
    <div>
        <i class="iconos f50">schedule</i>
        <h5>${data[i].horario}</h5>
    </div>
    <div>
        <i class="iconos f50">location_on</i>
        <h5>${data[i].rango}KM</h5>
    </div>
    <div>
        <i class="iconos f50">two_wheeler</i>
        <h5>DELIVERY</h5>
    </div>
    
</div>    
<div class="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione veniam accusantium! Tempore vel laborum in alias assumenda itaque obcaecati rerum reprehenderit quae, iure cum culpa repellat non quo pariatur. </div class="texto">
</section>`
   } }})
