
const image = document.getElementById("image")
const inputForm = document.getElementById('form')
let inputInfo = document.getElementById('search')
const display = document.getElementById('display')



const movie = 'https://movie-database-imdb-alternative.p.rapidapi.com/?s='

const link = '&r=json&page=1'


// callAPI(movie)


function callAPI(movie_url) {

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
            alert(error);
        });

}


function displayResults(movieInfo) {
    display.innerHTML = ''

    movieInfo.forEach(movieInfo => {
        const { Poster, Title, Year, Type } = movieInfo

        console.log(Poster);
        const displayMovie = document.createElement('div')
        displayMovie.classList.add('movie')
        displayMovie.innerHTML = ` <div class="movie">
            <img src='${Poster}'>
            
            <div id="title">${Title}</div>
            <div id ="type">${Type}</div>
          
            <div id="year">${Year}</div>
        </div> `

        display.appendChild(displayMovie)

    });
}

inputForm.addEventListener("submit", (e) => {

    e.preventDefault()

    // console.log(inputForm);
    const searchResult = inputInfo.value
    if (searchResult) {
        console.log(searchResult);

        callAPI(movie + searchResult + link)
    } else
        alert('Please enter a  field into search')



})



