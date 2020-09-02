//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  // create content for each movie card
  episodeList.forEach((element) => {
    const cardMovie = document.createElement("div");
    const moviePoster = document.createElement("img");
    const summary = document.createElement("p");

    moviePoster.setAttribute("src", `${element.image.medium}`);

    rootElem.appendChild(cardMovie);
    cardMovie.appendChild(moviePoster);
    rootElem.appendChild(summary);

    cardMovie.classList.add("card");
    cardMovie.innerHTML += element.name;
    cardMovie.innerHTML += element.summary;
  });
}

window.onload = setup;

// const episodes = getAllEpisodes();
// episodes.forEach(element => console.log(element.name, element.season));
