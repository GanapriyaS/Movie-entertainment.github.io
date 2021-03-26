
var slideIndex = [1, 1];
showSlides(1, 0);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var x = document.getElementsByClassName("slides");

  if (n > x.length) {
    slideIndex[no] = 1
  }

  if (n < 1) {
    slideIndex[no] = x.length
  }

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex[no] - 1].style.display = "block";
}

var movieTitle;
var currentGenre = "Genre";

function showNoResultsText(totalcount) {

  if (totalcount == 0) {
    document.getElementById("no-results").style.display = "block";
    console.log('totalcount in showNoResultsText' + totalcount);
  } else {
    document.getElementById("no-results").style.display = "none";
  }

}


function updateResults() {
  var query = document.getElementsByClassName('search-query')[0].value.trim().toLowerCase();
  var counter = 0;

  if (currentGenre == 'All' || currentGenre == 'Genre') {
    movieTitle = document.getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Action') {
    movieTitle = document.getElementsByClassName('movies-action')[0].getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Drama') {
    movieTitle = document.getElementsByClassName('movies-drama')[0].getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Sci-Fi') {
    movieTitle = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName('movie-title');
  }


  for (var name = 0; name < movieTitle.length; name++) {
    var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();

    if (compareMovieTitles.indexOf(query) === -1) {
      movieTitle[name].closest('div.media-carousel').style.display = "none";
    } else {
      movieTitle[name].closest('div.media-carousel').style.display = "block";
      counter++;
    }
  }

  showNoResultsText(counter);
}


function toggleGenreList() {
  // document.getElementsByClassName("dropdown-content").classList.toggle("shows");
  $(".dropdown-content").toggleClass("shows");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {

  if (!e.target.matches('#dropbtn')) {

    $(".dropdown-content").toggleClass("shows");
  }
}

function getMediaPosters(selectedGenre) {
  var mediaCarouselMovies;
  currentGenre = selectedGenre;
  document.getElementById("genreText").innerHTML = selectedGenre;

  if (selectedGenre == 'All') {
    document.getElementsByClassName('movies-action')[0].style.display = "block";
    document.getElementsByClassName('movies-action')[0].style.display = "block";
    document.getElementsByClassName('movies-drama')[0].style.display = "block";
    document.getElementsByClassName('movies-scifi')[0].style.display = "block";
    mediaCarouselMovies = document.getElementsByClassName("media-carousel");
  }
  if (selectedGenre == 'Action') {
    document.getElementsByClassName('movies-action')[0].style.display = "block";
    document.getElementsByClassName('movies-drama')[0].style.display = "none";
    document.getElementsByClassName('movies-scifi')[0].style.display = "none";
    mediaCarouselMovies = document.getElementsByClassName('movies-action')[0].getElementsByClassName("media-carousel");
  }
  if (selectedGenre == 'Drama') {
    document.getElementsByClassName('movies-action')[0].style.display = "none";
    document.getElementsByClassName('movies-drama')[0].style.display = "block";
    document.getElementsByClassName('movies-scifi')[0].style.display = "none";
    mediaCarouselMovies = document.getElementsByClassName('movies-drama')[0].getElementsByClassName("media-carousel");
  }
  if (selectedGenre == 'Sci-Fi') {
    document.getElementsByClassName('movies-action')[0].style.display = "none";
    document.getElementsByClassName('movies-drama')[0].style.display = "none";
    document.getElementsByClassName('movies-scifi')[0].style.display = "block";
    mediaCarouselMovies = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName("media-carousel");
  }

  var mediaCarouselMoviesCount = mediaCarouselMovies.length;
  console.log(mediaCarouselMoviesCount);

  showNoResultsText(mediaCarouselMoviesCount);
}
