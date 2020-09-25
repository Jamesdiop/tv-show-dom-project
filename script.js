//You can edit ALL of the code here
const rootElem = document.querySelector('#root');

// search bar 
const body = document.querySelector('body');
const searchBar = document.createElement('input');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('placeholder', 'Search episodes ...');
searchBar.setAttribute('size', '50');
searchBar.setAttribute('style', 'height:2rem, font-size:1.4rem');
body.prepend(searchBar);

  // Count episodes and display them
  const countEpisode = document.createElement("p");
  countEpisode.setAttribute('id', 'episodeCount');
  body.prepend(countEpisode);
 

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  displayAllEpisodes(episodeList);
  searchEpisodes();
  selectEpisodes(episodeList);
  displayEpisodesFound(episodeList);
}


//create select to display episodes
const select = document.querySelector("#selectEp");
function selectEpisodes(episodeList) {
  episodeList.forEach((element) => {
    const option = document.createElement("option");
    select.appendChild(option);
    const episodeCode = `S0${element.season}E0${element.number}`;
    option.innerHTML = `${element.name} - ${episodeCode}`;
  });  
}

// display episode selected
 select.addEventListener('change', (event)=> {
   let selection = event.target.value;
   let splitSelect = selection.split(' -');
   searchBar.value = splitSelect[0];
})







function displayAllEpisodes(episodeList) {
  rootElem.innerHTML='';
  // create content for each movie card
  return episodeList.forEach((element) => {
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
    // add link to the tv maze.com
    linkToMovie.href = element.url;
    
    moviePoster.setAttribute("src", `${element.image.medium}`);    
    // display text for heading, summary, episode code
      const episodeCode = `S0${element.season}E0${element.number}`;
      heading.innerHTML += `${element.name} - ${episodeCode}`;
      cardMovie.innerHTML += element.summary;
  });
}

// Search episodes
function searchEpisodes() {
  rootElem.innerHTML = "";
  const allEpisodes = getAllEpisodes(); 
  let input = searchBar.value.toLowerCase();
  if(input.length === 0) {
    return allEpisodes;
  }
  const newEpisodesList = [];
  for(let i = 0; i < allEpisodes.length; i++) {
    let episodesText = allEpisodes[i].name.toLowerCase() + allEpisodes[i].summary.toLowerCase();
    if (episodesText.includes(input)) {
      newEpisodesList.push(allEpisodes[i]);
    }
  }
  console.log(newEpisodesList);
  
  return newEpisodesList;
}

function displayEpisodesFound() {
  rootElem.innerHTML = "";
  const episodesFound = searchEpisodes();
  console.log(displayAllEpisodes(episodesFound));
  countEpisode.textContent = `Got ${episodesFound.length} / ${getAllEpisodes().length} episode(s)`;

  return displayAllEpisodes(episodesFound);
}

function addErrorPage() {
  
}

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  searchBar.addEventListener("keyup", displayEpisodesFound);
  countEpisode.textContent = `Got ${allEpisodes.length} / ${allEpisodes.length} episode(s)`;

  // fetch("https://api.tvmaze.com/shows/82/episodes").then((response) =>
  //   response.json()
  //     .then(data => console.log(data))
  //     .then((allEpisodes) => makePageForEpisodes(allEpisodes))
  //     .catch((error) => addErrorPage(error))
  // );

}

window.onload = setup;
