

const image = document.getElementById("image")
const inputInfo = document.getElementById("search")
let info ='endgame'
const movie = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${info}&r=json&page=1`


callAPI(movie)

function callAPI(movie_url){
    fetch(movie_url, {
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

    }



 function displayResults(movieInfo){

   
     movieInfo.forEach(movieInfo => {
        const {Title, Year, Type, Poster} = movieInfo
        const displayMovie = document.createElement('div')
        displayMovie.classList.add('movieInfo')
            displayMovie.innerHTML = `<img src=${Poster}>

                                        <div> 
                                        <h2>${Title}</H2>
                                        <p>${Year}</p>
                                        <p>${Type}</p>
                                        
                                        </div>
                                        
                                        `
        
    });
}

inputInfo.addEventListener("submit", (e) =>{ 
    
    console.log(inputInfo);
    // e.preventfault()
    const searchInfo = search.value
    displayResults(searchInfo)
})
