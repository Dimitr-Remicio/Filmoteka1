var apiKey="2e9f8fc9479fa19131d9c8fc8ea7c110",apiUrl="https://api.themoviedb.org/3/movie/2",categories={trending:"/trending/movie/week",querySearch:"/search/movie",genre:"/genre/movie/list",basic:"&language=en-US&page=1&include_adult=false"},url="".concat(apiUrl,"?api_key=").concat(apiKey),baseImageUrl="https://image.tmdb.org/t/p/",tituloPelicula=document.getElementById("titulo-pelicula"),overview=document.getElementById("descripcion-pelicula"),lanzamiento=document.getElementById("ano-lanzamiento"),posterPelicula=document.getElementById("poster-pelicula");fetch(url).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.title,n=e.overview,a=e.release_date,o="".concat(baseImageUrl,"w500").concat(e.poster_path);tituloPelicula.textContent=t,overview.textContent=n,lanzamiento.textContent=a,posterPelicula.src=o})).catch((function(e){console.log("Ha ocurrido un error:",e)}));
//# sourceMappingURL=index.458ea9ba.js.map