function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let v = [];
  //Conectamos con el json
fetch("js/resenas.json")

.then(response => {
    return response.json()
})



.then(data =>{
    for (let i = 0; i < 3; i++) {
 v.push(getRandomInt(19)) 
    }
    console.log(v);
   for (let i = 0; i < data.length; i++) {
      if(data[i].id_user == v[0] || data[i].id_user == v[1] || data[i].id_user == v[2] ){
    document.querySelector('.menuResto').innerHTML += `<a class="plato">
            <div class="img_plato">
                 <img src="${data[i].img_user}" alt="" height="100">
                <div class="precio_plato">${data[i].puntaje}</div>
            </div>
            <div class="datos_plato">
                <h3>${data[i].name}</h3>
                <h3>${data[i].plato}</h3>
                <h5>${data[i].resena}</h5>
            </div>
        </a>`
    }}})


