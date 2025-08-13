// *** omdb api ***
// base url: https://www.omdbapi.com/

// parameters:
// for searching:
// * s=<search term>
// * apikey=<api-key>
// * page=<page-number>  (10 results per page)
// * y=<year-of-release>
// * type=<movie/series/episode/game>

// for returning details like plot about a movie by id
// * i=<imdbid>
// * plot=<short/full>


// Example: To return all movies, series and games with "Blade Runner" in the title:
// https://www.omdbapi.com/?s=Blade+Runner&apikey=74fc7f86 
//  
// Example Response:
/* 
{
  "Search": [
    {
      "Title": "Blade Runner",
      "Year": "1982",
      "imdbID": "tt0083658",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Blade Runner 2049",
      "Year": "2017",
      "imdbID": "tt1856101",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
    },
    {
      "Title": "Blade Runner: Black Out 2022",
      "Year": "2017",
      "imdbID": "tt7428594",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGNiNmNiMTctMDI4OS00OWYxLWE4ZWEtZjFkZjU4ZmY5YzEyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg"
    },
    {
      "Title": "Blade Runner: Black Lotus",
      "Year": "2021–2022",
      "imdbID": "tt9359796",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDYzYWI2NzYtOWNkMS00YzA4LThlNWEtNmMxNDIwYmVmYTgzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Dangerous Days: Making Blade Runner",
      "Year": "2007",
      "imdbID": "tt1080585",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzI2NjU0MjY4MF5BMl5BanBnXkFtZTgwMjM0NDQzNjE@._V1_SX300.jpg"
    },
    {
      "Title": "Blade Runner",
      "Year": "1997",
      "imdbID": "tt0126817",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWRkYjczZWMtN2Q5NS00YWFmLTk3M2MtNWUwNWRjYzdkMjZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
    },
    {
      "Title": "Oscar Pistorius: Blade Runner Killer",
      "Year": "2017",
      "imdbID": "tt7445510",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjZiMjYwMTMtNjY1Yi00MGI5LTk1MGUtOTdhMDAzMWJjMjBhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "On the Edge of 'Blade Runner'",
      "Year": "2000",
      "imdbID": "tt0281011",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGRhY2RlMWYtOGQ4Yi00NmMxLWJiZDUtZmRkZjYzYWRlNmExXkEyXkFqcGdeQXVyMTQxNzE3ODA3._V1_SX300.jpg"
    },
    {
      "Title": "Phenomenon Blade Runner",
      "Year": "2021",
      "imdbID": "tt14730032",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ1NDA5YWMtMGE5NC00MTU1LTkxNTMtZThkNDg4ZTNjODUzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Phenomenon Blade Runner",
      "Year": "2021",
      "imdbID": "tt14730032",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ1NDA5YWMtMGE5NC00MTU1LTkxNTMtZThkNDg4ZTNjODUzXkEyXkFqcGc@._V1_SX300.jpg"
    }
  ],
  "totalResults": "37",
  "Response": "True"
}

*/

/* Example Response for details
https://www.omdbapi.com/?apikey=74fc7f86&i=tt1856101&plot=full

{
  "Title": "Blade Runner 2049",
  "Year": "2017",
  "Rated": "R",
  "Released": "06 Oct 2017",
  "Runtime": "164 min",
  "Genre": "Action, Drama, Mystery",
  "Director": "Denis Villeneuve",
  "Writer": "Hampton Fancher, Michael Green, Philip K. Dick",
  "Actors": "Harrison Ford, Ryan Gosling, Ana de Armas",
  "Plot": "Thirty years after the events of Blade Runner (1982), a new Blade Runner, L.A.P.D. Officer \"K\" (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former L.A.P.D. Blade Runner, who has been missing for thirty years.",
  "Language": "English",
  "Country": "United States, Canada, Spain",
  "Awards": "Won 2 Oscars. 100 wins & 164 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.0/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "88%"
    },
    {
      "Source": "Metacritic",
      "Value": "81/100"
    }
  ],
  "Metascore": "81",
  "imdbRating": "8.0",
  "imdbVotes": "720,813",
  "imdbID": "tt1856101",
  "Type": "movie",
  "DVD": "N/A",
  "BoxOffice": "$92,071,675",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
*/


/* 
  Search result:
  data.Search[i].

 * Title
  Year
  Type
 * Poster
  imdbID

  Title lookup result:
  data.
  
  Runtime
  Genre7
  Plot
  Ratings[0].Value

*/

const testData = 
[
    {
        "Title": "Blade Runner: Black Out 2022",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGNiNmNiMTctMDI4OS00OWYxLWE4ZWEtZjFkZjU4ZmY5YzEyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg",
        "imdbID": "tt7428594",
        "Runtime": "15 min",
        "Genre": "Animation, Short, Sci-Fi",
        "Plot": "In 2022, a powerful weapon causes a global blackout that has massive implications all over the world.",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            }
        ]
    },
    {
        "Title": "Phenomenon Blade Runner",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ1NDA5YWMtMGE5NC00MTU1LTkxNTMtZThkNDg4ZTNjODUzXkEyXkFqcGc@._V1_SX300.jpg",
        "imdbID": "tt14730032",
        "Runtime": "53 min",
        "Genre": "Documentary",
        "Plot": "In 1982 a film came to the cinema that is set in the near future of Los Angeles in 2019 and itself changed the future of cinema as it is one of the most influential science fiction films ever and achieved cult status among cinema ...",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.5/10"
            }
        ]
    },
    {
        "Title": "Blade Runner",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWRkYjczZWMtN2Q5NS00YWFmLTk3M2MtNWUwNWRjYzdkMjZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
        "imdbID": "tt0126817",
        "Runtime": "N/A",
        "Genre": "Action, Adventure, Crime, Romance, Sci-Fi",
        "Plot": "The Video Game follows the first big case for new Blade Runner cop Ray McCoy. He is assigned to \"retire\" several escaped replicants but he soon finds himself questioning who he is when evidence starts to indicate he himself could be a replicant. It takes place during the same time the film does and involves many of the same characters. The game also has several outcomes all depending on the actions you take whether they be big or small.",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.9/10"
            }
        ]
    },
    {
        "Title": "Dangerous Days: Making Blade Runner",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzI2NjU0MjY4MF5BMl5BanBnXkFtZTgwMjM0NDQzNjE@._V1_SX300.jpg",
        "imdbID": "tt1080585",
        "Runtime": "214 min",
        "Genre": "Documentary",
        "Plot": "The definitive three-and-a-half hour documentary about the troubled creation and enduring legacy of the science fiction classic Blade Runner (1982), culled from 80 interviews and hours of never-before-seen outtakes and lost footage.",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            }
        ]
    },
    {
        "Title": "Oscar Pistorius: Blade Runner Killer",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjZiMjYwMTMtNjY1Yi00MGI5LTk1MGUtOTdhMDAzMWJjMjBhXkEyXkFqcGc@._V1_SX300.jpg",
        "imdbID": "tt7445510",
        "Runtime": "90 min",
        "Genre": "Drama",
        "Plot": "A dramatized account of South African gold-medalist Paralympian Oscar Pistorius' rise to fame and his fairytale romance with model Reeva Steenkamp that ended in her untimely death on Valentine's Day, including an inside look at the events leading up to her death and the courtroom trials that followed.",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "5.1/10"
            }
        ]
    },
    {
        "Title": "Blade Runner 2049",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
        "imdbID": "tt1856101",
        "Runtime": "164 min",
        "Genre": "Action, Drama, Mystery",
        "Plot": "Thirty years after the events of Blade Runner (1982), a new Blade Runner, L.A.P.D. Officer \"K\" (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former L.A.P.D. Blade Runner, who has been missing for thirty years.",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ]
    },
    {
        "Title": "Phenomenon Blade Runner",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ1NDA5YWMtMGE5NC00MTU1LTkxNTMtZThkNDg4ZTNjODUzXkEyXkFqcGc@._V1_SX300.jpg",
        "imdbID": "tt14730032",
        "Runtime": "53 min",
        "Genre": "Documentary",
        "Plot": "In 1982 a film came to the cinema that is set in the near future of Los Angeles in 2019 and itself changed the future of cinema as it is one of the most influential science fiction films ever and achieved cult status among cinema ...",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.5/10"
            }
        ]
    },
    {
        "Title": "On the Edge of 'Blade Runner'",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGRhY2RlMWYtOGQ4Yi00NmMxLWJiZDUtZmRkZjYzYWRlNmExXkEyXkFqcGdeQXVyMTQxNzE3ODA3._V1_SX300.jpg",
        "imdbID": "tt0281011",
        "Runtime": "52 min",
        "Genre": "Documentary",
        "Plot": "About the epic film \"Blade Runner\", giving insights into it's history with interviews of Ridley Scott, the writers and nearly all the cast. Interviews with production staff, giving details into the creative process and turmoil during pre-production.",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            }
        ]
    },
    {
        "Title": "Blade Runner: Black Lotus",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDYzYWI2NzYtOWNkMS00YzA4LThlNWEtNmMxNDIwYmVmYTgzXkEyXkFqcGc@._V1_SX300.jpg",
        "imdbID": "tt9359796",
        "Runtime": "1 min",
        "Genre": "Animation, Action, Drama",
        "Plot": "Los Angeles 2032. A young woman wakes up with no memories, and possessing deadly skills. The only clues to her mystery are a locked data device and a tattoo of a black lotus. Putting together the pieces, she must hunt down the people responsible for her brutal and bloody past to find the truth of her lost identity.",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.3/10"
            }
        ]
    },
    {
        "Title": "Blade Runner",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg",
        "imdbID": "tt0083658",
        "Runtime": "117 min",
        "Genre": "Action, Drama, Sci-Fi",
        "Plot": "In the early twenty-first century, the Tyrell Corporation, during what was called the Nexus phase, developed robots, called \"replicants\", that were supposed to aid society, the replicants which looked and acted like humans. When the superhuman generation Nexus 6 replicants, used for dangerous off-Earth endeavors, began a mutiny on an off-Earth colony, replicants became illegal on Earth. Police units, called \"blade runners\", have the job of destroying - or in their parlance \"retiring\" - any replicant that makes its way back to or created on Earth, with anyone convicted of aiding or assisting a replicant being sentenced to death. It's now November, 2019 in Los Angeles, California. Rick Deckard, a former blade runner, is called out of retirement when four known replicants, most combat models, have made their way back to Earth, with their leader being Roy Batty. One, Leon Kowalski, tried to infiltrate his way into the Tyrell Corporation as an employee, but has since been able to escape. Beyond following Leon's trail in hopes of finding and retiring them all, Deckard believes part of what will help him is figuring out what the replicants wanted with the Tyrell Corporation in trying to infiltrate it. The answer may lie with Tyrell's fail-safe backup mechanism. Beyond tracking the four, Deckard faces a possible dilemma in encountering a fifth replicant: Rachael, who works as Tyrell's assistant. The issue is that Dr. Elden Tyrell is experimenting with her, to provide her with fake memories so as to be able to better control her. With those memories, Rachael has no idea that she is not human. The problem is not only Rachael's assistance to Deckard, but that he is beginning to develop feelings for her.",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ]
    }
]


const html = document.documentElement
const apikey = '74fc7f86'
const lastSearchResults = []
const movieFeed = []
const movieFeedEl = document.getElementById("movie-feed")
const feedPlaceHolderEl = document.getElementById("feed-placeholder")
const searchFormEl = document.getElementById("search-form")
console.log(searchFormEl)

//html.classList.toggle("dark-theme")


searchFormEl.addEventListener("submit", e => {
  e.preventDefault()
  const formData = new FormData(searchFormEl)
  const searchTerm = formData.get("search-term")
  fetchMovies(searchTerm).then(results => {
    console.log("Resultate:", results);
    displaySearchResults(results);
  });
})


/* This function calls the omdb api with 'searchTerm' as a search Term and stores the found entries in the array lastSearchResults 
 * An entry has the keys
 * Title , Poster, Ratings, imdbID, Runtime, Genre, Plot
 */
function fetchMovies(searchTerm) {
  return fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${encodeURIComponent(searchTerm)}`)
    .then(res => res.json())
    .then(data => {
      if (data && data.Response === "True") {
        const detailPromises = data.Search.map(item =>
          fetchMovieDetails(item.imdbID)
            .then(movieDetails => ({
              Title: item.Title,
              Poster: item.Poster,
              imdbID: item.imdbID,
              ...movieDetails
            }))
        );
        return Promise.all(detailPromises);
      } else {
        console.log('Found nothing');
        return [];
      }
    });
}

/* This function looks up the details of a movie with imdbID 'movieId' in the omdb api and returns from those the entries
 * Runtime, Genre, Plot, Ratings
 */
function fetchMovieDetails(movieId) {
  return fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${movieId}&plot=full`)
          .then(res=>res.json())
          .then(data=> { 
            const {Runtime, Genre, Plot, Ratings} = data
            return {Runtime, Genre, Plot, Ratings}
          })   
}

//fetchMovies("Das Boot")


function displaySearchResults(searchResults) {

  const feedHTMLArray = []

  searchResults.forEach(movieItem => {
    const movieCardHTML = `
      <article class="movie-card">
      <img class="poster" src="${movieItem.Poster}">
      
      <div class="card-description-cnt">
          <div class="card-header">
              <h2 class="title">${movieItem.Title}</h2>
              <div class="card-rating">
                  <svg class="star-icon"  viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z" fill="#FEC654"/>
                  </svg>
                  <div class="rating-number">${getRatings(movieItem.Ratings)}</div>
              </div>
          </div>
          <div class="card-moviedata">
              <div class="card-runtime">
                  ${movieItem.Runtime}
              </div>
              <div class="card-genre">
                  ${movieItem.Genre}
              </div>
              
              <div class="card-button">
                  <svg class="add-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="add-icon-path" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="#111827"/>
                  </svg>
                  Watchlist
              </div>
          </div>
          <p class="card-plot">
              ${movieItem.Plot}
          </p>
      </div>
  </article>`
    feedHTMLArray.push(movieCardHTML)
  })
  // hide placeholder
  feedPlaceHolderEl.hidden = true;
  // display movieFeed
  movieFeedEl.innerHTML = feedHTMLArray.join(' ')
}

/* returns the average score from the given array of ratings or N/A if it is empty */
function getRatings(ratings) {
  if (!Array.isArray(ratings) || ratings.length === 0) return "N/A";
  let total = 0;
  let count = 0;

  ratings.forEach(rating => {
    let value = rating.Value;
    if (/^\d+(\.\d+)?\/10$/.test(value)) {
      // e.g. "8.0/10"
      total += parseFloat(value.split('/')[0]);
      count++;
    } else if (/^\d+%$/.test(value)) {
      // e.g. "88%"
      total += parseFloat(value) / 10;
      count++;
    } else if (/^\d+(\.\d+)?\/100$/.test(value)) {
      // e.g. "81/100"
      total += parseFloat(value.split('/')[0]) / 10;
      count++;
    }
  });

  if (count === 0) return "N/A";
  return (total / count).toFixed(1);
}


// fetchMovies("Putin").then(results => {
//   console.log("Resultate:", results);
//   displaySearchResults(results);
// });

// displaySearchResults(testData)