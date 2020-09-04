//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  const body = document.querySelector('body');
  const label = document.createElement('label').textContent = "Search bar: ";
  const searchBar = document.createElement('input');
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  searchBar.setAttribute('type', 'text');
  searchBar.setAttribute('placeholder', 'Search episodes ...');
  searchBar.setAttribute('size', '50');
  searchBar.setAttribute('style', 'height:2rem, font-size:1.4rem');
  body.prepend(searchBar);
  body.prepend(label);

  searchBar.addEventListener('keyup', function(event) {
    const textEnter = event.target.value.toLowerCase();
    const episodeName = episodeList.name.toLowerCase();
    const episodeSummary = episodeList.summary.toLowerCase();
    episodeList.filter(()=>{
      if(episodeName.indexOf(textEnter) !== -1|| episodeSummary.indexOf(textEnter) !== -1){
        console.log(episodeName, episodeSummary);
      }
    });
  });

 
  // create content for each movie card
  episodeList.forEach((element) => {
    // create different tags
    const linkToMovie = document.createElement('a');
    const cardMovie = document.createElement("div");
    const heading = document.createElement("h3");
    const moviePoster = document.createElement("img");
    const summary = document.createElement("p");

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

window.onload = setup;
