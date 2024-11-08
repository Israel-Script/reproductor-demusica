console.log ("hola mundo")

const crearcancion = (songdata) => {
    const div = document.createElement ('div')
    div.setAttribute("class","song")
    div.innerHTML = `
    <img src="${"https://api.institutoalfa.org/api/songs/image/" + songdata.image.filename}"alt="">
    <p>${songdata.title}</p>
    `

    return div
} 
 

console.log (axios)

axios.get("https://api.institutoalfa.org/api/songs")
.then((res) => {


    const canciones =res.data.songs

    canciones.map((cancion) => {
        document.getElementById ("container")
        .appendChild(crearcancion(cancion))

    })

})