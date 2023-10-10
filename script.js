
// api key  from TMDB

const api = "api_key=ecb85e38aa857c3762bf99fadc5b6c97";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300"; // You can change "w185" to your preferred size


// requests for movies data

const requests = {

  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
  fetchThriller:`${base_url}/discover/movie?${api}&with_genres=53`,
  fetchMystery:`${base_url}/discover/movie?${api}&with_genres=9648`,
  fetchAnimation:`${base_url}/discover/movie?${api}&with_genres=16`,
  fetchCrime:`${base_url}/discover/movie?${api}&with_genres=80`,
  fetchSciecefiction:`${base_url}/discover/movie?${api}&with_genres=878`

};
// used to truncate the string

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())



  .then((data) => {
    
    // every refresh the movie will be change


    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

   

    var hero = document.getElementById("hero");
    var hero_title = document.getElementById("hero_title");
    var hero_desc = document.getElementById("hero_description");


    hero.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    hero_desc.innerText = truncate(setMovie.overview, 150);
    hero_title.innerText = setMovie.name;
  });

// movies rows
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())


  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);


    const title = document.createElement("h2");


    title.className = "row__title";
    title.innerText = "NETFLIX ORIGINALS";


    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);



    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row__posterLarge";

      var s = movie.name.replace(/\s+/g, "");

      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

//trending
fetch(requests.fetchTrending)
  .then((res) => res.json())


  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);


    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Top Rated";
    row.appendChild(title);


    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie) => {
      
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      var s2 = movie.id;

      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// action
fetch(requests.fetchActionMovies)
  .then((res) => res.json())


  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);


    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Action Movies";
    row.appendChild(title);


    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    
    data.results.forEach((movie) => {
    
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });
// comedy
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);


    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);


    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);


    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });
// Horror
fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });
// Romance
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });
// documentry
fetch(requests.fetchDocumentaries)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Documentaries"
    ;
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });


  // thriller
fetch(requests.fetchThriller)
.then((res) => res.json())

.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";

  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Thriller"
  ;
  row.appendChild(title);

  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  
  data.results.forEach((movie) => {
    const poster = document.createElement("img");
    poster.className = "row__poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);
  });
});


 //Mystery
 fetch(requests.fetchMystery)
 .then((res) => res.json())
 
 .then((data) => {
   const headrow = document.getElementById("headrow");
   const row = document.createElement("div");
   row.className = "row";
 
   headrow.appendChild(row);
   const title = document.createElement("h2");
   title.className = "row__title";
   title.innerText = "Mystery"
   ;
   row.appendChild(title);
 
   const row_posters = document.createElement("div");
   row_posters.className = "row__posters";
   row.appendChild(row_posters);
   
   data.results.forEach((movie) => {
     const poster = document.createElement("img");
     poster.className = "row__poster";
     var s2 = movie.id;
     poster.id = s2;
     poster.src = img_url + movie.backdrop_path;
     row_posters.appendChild(poster);
   });
 });


  //Animation
  fetch(requests.fetchAnimation)
  .then((res) => res.json())
  
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
  
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Animation"
    ;
    row.appendChild(title);
  
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

  //crime
 fetch(requests.fetchCrime)
 .then((res) => res.json())
 
 .then((data) => {
   const headrow = document.getElementById("headrow");
   const row = document.createElement("div");
   row.className = "row";
 
   headrow.appendChild(row);
   const title = document.createElement("h2");
   title.className = "row__title";
   title.innerText = "Crime"
   ;
   row.appendChild(title);
 
   const row_posters = document.createElement("div");
   row_posters.className = "row__posters";
   row.appendChild(row_posters);
   
   data.results.forEach((movie) => {
     const poster = document.createElement("img");
     poster.className = "row__poster";
     var s2 = movie.id;
     poster.id = s2;
     poster.src = img_url + movie.backdrop_path;
     row_posters.appendChild(poster);
   });
 });

  //science fiction
  fetch(requests.fetchSciecefiction)
  .then((res) => res.json())
  
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
  
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Science Fiction"
    ;
    row.appendChild(title);
  
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

  window.addEventListener("scroll",function(){

    var nav = document.querySelector(".nav");
    nav.classList.toggle("active", window.scrollY > 0);
  }) 
  