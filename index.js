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


const watchlist = JSON.parse(localStorage.getItem("myWatchlist")) || []
const html = document.documentElement
const apikey = '74fc7f86'
//const apikey = '9018b1f4'
//const apiKey = "17b90317"
//const apiKey = "d7164f26"
const movieFeedEl = document.getElementById("movie-feed")
const feedPlaceHolderStartEl = document.getElementById("feed-placeholder-start")
const feedPlaceHolderNotFoundEl = document.getElementById("feed-placeholder-not-found")
const notFoundMsgEl = document.getElementById("not-found-msg")
const searchFormEl = document.getElementById("search-form")
const headerH1El = document.querySelector('.header-h1')
const watchlistLinkEl = document.getElementById('watchlist-link')
const feedPlaceHolderWatchlistEmptyEl = document.getElementById('feed-placeholder-watchlist-empty')
const themeToggleEl = document.getElementById('theme-toggle')
const numResultsDivEl = document.getElementById('num-results-div')
const numResultsPEl = document.getElementById('num-results-p')
const moreResultsBtnEl = document.getElementById('more-results-btn')


let isWatchList = false
let searchResults = []
let searchTerm = ""
let totalSearchResults = 0
let page=1

searchFormEl.addEventListener("submit", e => {
  e.preventDefault()
  const formData = new FormData(searchFormEl)
  const searchTerm = formData.get("search-term")
  searchForMovies(searchTerm)
})

document.addEventListener("click", event=>{
  if(event.target.dataset.fulltext) {
   handleReadMoreclick(event.target)
  }

  if(event.target.matches('#watchlist-link') || event.target.closest('.placeholder-link')) {
    event.preventDefault()
    handleWatchlistLinkClick()
  }

  if(event.target.closest('.card-button')) {
    handleCardButtonClick(event.target.closest('.card-button'))
  }
  if(event.target.matches('#theme-toggle')) {
    handleThemeToggleClick()
  }
  if(event.target.matches('#more-results-btn')) {
    handleMoreResultsBtnClick()
  }

})

function handleMoreResultsBtnClick() {
  nextPage(searchTerm)
}

function handleThemeToggleClick() {
    html.classList.toggle("dark")
    if(html.classList.contains("dark"))
      themeToggleEl.textContent = '🌓'
    else
      themeToggleEl.textContent = '🌗'

}

function handleCardButtonClick(cardButtonEl) {
  const articleEl = cardButtonEl.closest('article')
  const movieId = cardButtonEl.dataset.movieId
  const bookmarkEl = articleEl.querySelector('.bookmark')

  if(isWatchList) {
    articleEl.remove()
    const index = watchlist.findIndex(movie=>movie.imdbID == movieId)
    watchlist.splice(index,1)
  } else {
    if(watchlist.find(movie=>movie.imdbID == movieId)) {
      const index = watchlist.findIndex(movie=>movie.imdbID == movieId)
      watchlist.splice(index,1)
      cardButtonEl.innerHTML = `
        <svg class="add-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="add-icon-path" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="#111827"/>
        </svg>
        Watchlist
      `
      bookmarkEl.textContent = ''
    }
    else {
      const index = searchResults.findIndex(movie=>movie.imdbID == movieId)
      const movieObj = searchResults[index]
      watchlist.push(movieObj)
      cardButtonEl.innerHTML = `
        <svg class="add-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="add-icon-path" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H11C11.5523 9 12 8.55229 12 8C12 7.44772 11.5523 7 11 7H5Z" fill="#111827"/>
        </svg>
        Remove
        `
      bookmarkEl.textContent = '🍿'
    }
  }

  localStorage.setItem("myWatchlist", JSON.stringify(watchlist))
} 

function handleWatchlistLinkClick() {
  if(headerH1El.textContent === "Find your film") {
    isWatchList = true
    headerH1El.textContent = "My Watchlist"
    watchlistLinkEl.textContent = "Search for movies"
    searchFormEl.style.display = 'none'
    numResultsPEl.hidden = true
    moreResultsBtnEl.hidden = true
    displaySearchResults(watchlist)

  } else {
    isWatchList = false
    headerH1El.textContent = "Find your film"
    watchlistLinkEl.textContent = "My Watchlist"
    searchFormEl.style.display = 'flex'
    displaySearchResults(searchResults)
  }
}

function handleReadMoreclick(btn) {
  const cardPlotEl = btn.closest('.card-plot')
  const plotTextEl = cardPlotEl.querySelector('.plot-text')

  const fullText = btn.dataset.fulltext
  btn.dataset.fulltext = plotTextEl.textContent
  plotTextEl.textContent = fullText

  if(btn.textContent === "Read more") {
    btn.textContent = "Less"
  } else {
    btn.textContent = "Read more"
  }

}

/* appends the next page of searchTerm to the search results and displays it */
function nextPage(searchTerm) {
  page++
  fetchMovies(searchTerm, page)
    .then(movies => {
      searchResults.push(...movies)
      displaySearchResults(searchResults)
    })
}

/* This function is called when the user presses the search button.*/
function searchForMovies(newSearchTerm) {
  // show a loading spinner, etc.
  updateUIForLoading()

  searchTerm = newSearchTerm
  page=1

  fetchMovies(searchTerm)
    .then(movies => {
      searchResults = movies
      if(movies.length === 0) {
        updateUIForNoResults(searchTerm)
      } else {
        displaySearchResults(movies)
      }

    })

}

function updateUIforEmptyMovieList() {
  if(isWatchList) {
    feedPlaceHolderNotFoundEl.hidden = true
    feedPlaceHolderStartEl.hidden = true
    feedPlaceHolderWatchlistEmptyEl.hidden = false
  } else {
    feedPlaceHolderNotFoundEl.hidden = true
    feedPlaceHolderStartEl.hidden = false
    feedPlaceHolderWatchlistEmptyEl.hidden = true
  }
}

function updateUIForLoading() {
  console.log("Loading...")
}

function updateUIForNoResults(searchTerm) {
  movieFeedEl.innerHTML = ""
  notFoundMsgEl.textContent = `Unable to find any movie with the term "${searchTerm}" in the title.`
  feedPlaceHolderStartEl.hidden = true
  feedPlaceHolderNotFoundEl.hidden = false
  numResultsPEl.hidden = true
  moreResultsBtnEl.hidden = true
}

/* This function calls the omdb api with 'searchTerm' as a search Term and returns a promise that resolves to an array with the search results
 * and sets totalSearchResults to totalResults. 
 * If no results were found an empty array is returned.
 * An entry of that array has the keys
 * Title , Poster, Ratings, imdbID, Runtime, Genre, Plot
 */
function fetchMovies(searchTerm, page=1) {
  const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${encodeURIComponent(searchTerm)}&page=${page}`

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data && data.Response === "True") {
        totalSearchResults = data.totalResults;
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
        // if any error occurs or no search results
        totalResults = 0
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


function displaySearchResults(searchResults) {

  if(searchResults.length===0) {
    movieFeedEl.innerHTML = ''
    updateUIforEmptyMovieList()
    return
  }

  const feedHTMLArray = []

  searchResults.forEach(movieItem => {
    const cardButtonDiv = onWatchlist(movieItem) ? 
      `
    <div class="card-button" data-movie-id="${movieItem.imdbID}">
    <svg class="add-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="add-icon-path" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H11C11.5523 9 12 8.55229 12 8C12 7.44772 11.5523 7 11 7H5Z" fill="#111827"/>
    </svg>
    Remove
    </div>
      ` :
      `
    <div class="card-button" data-movie-id="${movieItem.imdbID}">
      <svg class="add-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="add-icon-path" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="#111827"/>
      </svg>
    Watchlist
    </div>
      `

    const bookmark =  onWatchlist(movieItem) ? '<div class="bookmark">🍿</div>' : '<div class="bookmark"></div>'

    const movieCardHTML = `
      <article class="movie-card" aria-labelledby="t-${movieItem.imdbID}">
        ${bookmark}  
      <img class="poster" src="${movieItem.Poster}" onerror="this.onerror=null; this.src='./images/missing_poster.webp';" alt="Poster: ${movieItem.Title}">
      <div class="card-description-cnt">
          <div class="card-header">
              <h2 id="t-${movieItem.imdbID}" class="title">${movieItem.Title}</h2>
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
              ${cardButtonDiv}
          </div>
          <p class="card-plot">
          <span class="plot-text">${movieItem.Plot}</span>
          <button class="read-more-btn" data-fulltext='${escapeAttr(movieItem.Plot)}'>Read more</button>
          </p>
    </div>
  </article>`
    feedHTMLArray.push(movieCardHTML)
  })
  // hide placeholder
  feedPlaceHolderStartEl.hidden = true
  feedPlaceHolderNotFoundEl.hidden = true
  feedPlaceHolderWatchlistEmptyEl.hidden = true

  renderFeed(feedHTMLArray)
  // show total search results and show more button
  if(!isWatchList)  {
    numResultsPEl.textContent=`${searchResults.length} of ${totalSearchResults}`
    numResultsPEl.hidden = false 
    if(searchResults.length < totalSearchResults)
      moreResultsBtnEl.hidden = false
    else {
      moreResultsBtnEl.hidden = true
    }
   } else {
    numResultsPEl.hidden = true
    moreResultsBtnEl.hidden = true
    }
}
// wait until the next paint (double rAF to be extra safe)
const nextPaint = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))

async function renderFeed(feedHTMLArray) {
  movieFeedEl.style.visibility = "hidden";
  movieFeedEl.innerHTML = feedHTMLArray.join(" ")

  // Let DOM & CSS apply
  await nextPaint();

  // If web fonts are in play, wait for them (prevents reflow after text renders)
  if (document.fonts?.status !== "loaded") {
    try { await document.fonts.ready; } catch {}
    await nextPaint();
  }

  // If images can affect layout, wait for their decode (no network block if cached)
  const imgs = movieFeedEl.querySelectorAll("img");
  await Promise.all([...imgs].map(img => img.decode?.().catch(() => {}) ?? Promise.resolve()));
  await nextPaint();

  // Now clamp with stable layout
  movieFeedEl.querySelectorAll(".card-plot")
    .forEach(p => clampParagraphToLines(p));

  movieFeedEl.style.visibility = "visible";
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

/* clamping functions */
function getLineHeightPx(el) {
    const cs = getComputedStyle(el)
    let lh = cs.lineHeight
    return parseFloat(lh) // "48px" -> 48
}

function clampParagraphToLines(p, maxLines = 3) {
  const textSpan = p.querySelector('.plot-text')
  const btn = p.querySelector('.read-more-btn')

  if(!textSpan || !btn) return;

  const original = textSpan.textContent.trim()
  if (!original) {
    btn.style.display = 'none'
    return;
  }

  const lineHeight = getLineHeightPx(p)
  const allowed = lineHeight * maxLines

  btn.style.display = 'none'
  if (p.getBoundingClientRect().height <= allowed) {
    return;
  }
  btn.style.display = 'inline'

  // binary search over the text length
  let lo=0, hi=original.length, best=0
  while(lo <= hi) {
    const mid = (lo + hi) >> 1

    textSpan.textContent = original.slice(0,mid) + '…'

    const h = p.getBoundingClientRect().height

    if (h <= allowed) {
      best = mid
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }

  textSpan.textContent = original.slice(0,best) + '…'
}

function clampAll() {
  const plotsArray = movieFeedEl.querySelectorAll('.card-plot')
  plotsArray.forEach(p=>clampParagraphToLines(p))
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;') 
    .replace(/'/g, '&#39;')  
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function onWatchlist(movie) {
  return watchlist.find(item=>item.imdbID == movie.imdbID)
}
