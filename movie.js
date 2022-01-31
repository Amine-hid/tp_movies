const PARENT = document.querySelector(".parent")
const IMAGES_URL = "https://image.tmdb.org/t/p/w500/"
 
fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=be427b06573b967d5ac51ee84f1d0479`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        for(result of data.results){
            console.log(result.overview);
        // let currentPosterPath = IMAGES_URL + result.poster_path;    
            PARENT.innerHTML +=
            `<section class="block" >
                 <img src="${IMAGES_URL}${result.poster_path}" alt="" />

                <h1 class="titre"> ${result.title}</h1>
                <div class="Description">
                    <p class="text"> Description <br></br> ${result.overview}</p>
                    <span class="note">${result.vote_average}</span>
                    </div>
                
            </section>`
        }


        });
    

    
