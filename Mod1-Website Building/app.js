

const image = document.getElementById("image")
const inputInfo = document.getElementById("search")
info =searchInfo


const movie = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${info}&r=json&page=1`
function getAPI(movie){
    fetch(movie, {
        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                            "x-rapidapi-key": "825986eacfmshbc25a9323ddf210p13a23ajsnbc487986ec1a"
                        }
    })
        .then((response) => response.json())
        .then((movieInfo) => {
            console.log(movieInfo);

            displayResults(movieInfo.Search)
        })
        .catch(error => {
            console.error(error);
        });


function displayResults(movieInfo){
    movieInfo.forEach(movieInfo => {
        const {title, year, type, poster} = movieInfo
        const displayMovie = document.createElement('div')
        displayMovie.classList.add('movie')
            displayMovie.innerHTML = `<img src=${poster}>

            <div> 
            <h2>${title}</H2>
            <p>${year}</p>
            <p>${type}</p>
            
            </div>
            
            `
        
    });
}
}
inputInfo.addEventListener("submit", (e) =>{
    e.preventfault()
    const searchInfo = search.value
})
