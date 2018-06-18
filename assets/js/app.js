
const btn = document.querySelector('button');
const containerImg = document.getElementById('elemento');

btn.addEventListener ("click", function() { 
  let gifText = document.getElementById("gif-text").value;// guardo el valor ingresado en el input
  console.log(gifText); //para ver si funciona


  fetch()
  .then(response => response.json())
  .then(giphy => {
    console.log(giphy);
    renderGif(giphy);
  })
});

const renderGif = giphy =>{