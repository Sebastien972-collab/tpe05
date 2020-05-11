$(document).ready(()=>{ 
    console.log("ok")
    $.getJSON("./js/film.json",(data)=>{

	for(let i = 0; i < data.film.length; i++){
        $("section").append(`<div><img src="../asset/images/${data.film[i].image}" alt=""><ul>
              <li>${data.film[i].titre}</li>
              <li>Date: ${data.film[i].date}</li>
              <li>Réalisateur: ${data.film[i].real}</li>
              <li>Genre: ${data.film[i].genre}</li>
              <li>Sortie dvd: ${data.film[i].sortie_dvd}</li></ul></div>
            `)

        }
    })
})
