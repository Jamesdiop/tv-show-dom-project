//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// search bar and label
const body = document.querySelector('body');
const searchBar = document.createElement('input');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('placeholder', 'Search episodes ...');
searchBar.setAttribute('size', '50');
searchBar.setAttribute('style', 'height:2rem, font-size:1.4rem');
body.prepend(searchBar);


function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  // create content for each movie card
  episodeList.forEach((element) => {
    //create different tags
    const linkToMovie = document.createElement('a');
    const cardMovie = document.createElement("div");
    const heading = document.createElement("h3");
    const moviePoster = document.createElement("img");
    const summary = document.createElement("p");
    //append them
    rootElem.appendChild(cardMovie);
    cardMovie.appendChild(linkToMovie);
    linkToMovie.appendChild(heading);
    linkToMovie.appendChild(moviePoster);
    cardMovie.appendChild(summary);
    // add class name
    cardMovie.classList.add("card");
    heading.classList.add('heading');
    moviePoster.classList.add('moviePoster');
    // add href attribute to the link
    linkToMovie.href = element.url;
    //url
    moviePoster.setAttribute("src", `${element.image.medium}`);    
    // display text for heading, summary, episode code
      const episodeCode = `S0${element.season}E0${element.number}`;
      heading.innerHTML += `${element.name} - ${episodeCode}`;
      cardMovie.innerHTML += element.summary;
  });
}


searchBar.addEventListener("keyup", function(e){
      //access to the input value
      const textEnter =  e.target.value.toLowerCase();
      const episodeText;
      for (let i=0; i<getAllEpisodes().length; i++) {
        episodeTxt = getAllEpisodes()[i].name + getAllEpisodes()[i].summary;
        if(textEnter.indexOf(episodeList) !== -1) {
          
        }
      }
      
});


window.onload = setup;
