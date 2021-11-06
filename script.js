const container = document.querySelector(".container_");

var EpisodeURL = "https://api.tvmaze.com/shows/82/episodes";
let showUrl;

function showChange() {
  let Url = document.querySelector("#showSlector");
  showUrl = Url.value;

  EpisodeURL = showUrl;

  showMovies();

  let [showSlector, epiSelector, container_] = [
    document.querySelector("#showSlector"),
    document.querySelector("#selector"),
    document.querySelector(".container_"),
  ].find((item) => {
    while (item.hasChildNodes()) {
      // removie existing child elements
      item.removeChild(item.firstChild);
    }
    //
  });
}

async function showMovies() {
  const allShows = getAllShows();

  const responce = await fetch(EpisodeURL);
  let allEpisodes = await responce.json();

  // short alphabetic order (Shows) >>>

  allShows.sort((a, b) => {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0; // return false = -1 / true = 1|0
  });

  allShows.forEach((item) => {
    // Show Selector >>>

    const showSelector = document.querySelector("#showSlector");
    let showOption = document.createElement("option");
    showOption.innerHTML = `&nbsp; ${item.name}`;
    showOption.value = `${item._links.self.href}/episodes`;
    showOption.className = "showOption";
    showSelector.appendChild(showOption);
  });

  window.onload = Episode();
  function Episode() {
    allEpisodes.forEach((item) => {
      let season_ = item.season;
      let episode_ = item.number;

      if (item.season < 10) {
        season_ = "0" + item.season;
      }

      if (item.number < 10) {
        episode_ = "0" + item.number;
      }

      //   ----------- solved summary error's >>> now i some code remove
      let Summary = item.summary;

      // Episode Selector >>>

      const Selector = document.getElementById("selector");
      let options = document.createElement("option");
      options.innerHTML = `&nbsp; S${season_}E${episode_} - ${item.name}`;
      options.value = `#${item.id}`;
      Selector.append(options);

      // MOvie Card >>>
      const movieCard = document.createElement("div");
      movieCard.className = "movieCard";
      movieCard.id = `${item.id}`;
      container.appendChild(movieCard);

      // card head >>>

      const cardHead = document.createElement("div");
      cardHead.className = "cardHead";

      const figure = document.createElement("figure");
      cardHead.append(figure);

      const imageFram = document.createElement("div");
      imageFram.className = "imgFram";

      const img = document.createElement("img");
      img.src = `${item.image.medium}`;
      img.alt = `${item.name}`;

      const figCap = document.createElement("figcaption");
      figCap.className = "carousel-caption";

      const figcapTitle = document.createElement("strong");
      figcapTitle.innerText = `${item.name}`;
      figCap.appendChild(figcapTitle);

      imageFram.append(img, figCap);

      // sepi --> season & episode
      const sepi = document.createElement("p");
      sepi.className = "sepi";
      sepi.innerText = `S${season_}E${episode_}`; // see

      figure.append(imageFram, sepi);

      // card body >>>
      const cardBody = document.createElement("div");
      cardBody.className = "cardBody";

      const movieDisc = document.createElement("span");
      movieDisc.className = "movieDisc";
      movieDisc.innerHTML = `${Summary}`;

      const airtime = document.createElement("small");
      airtime.className = "airTime";
      airtime.innerText = `Broadcast: ${item.airdate}`;

      const br = document.createElement("br");

      const button = document.createElement("button");
      button.className = "btn btn-primary";

      const a = document.createElement("a");
      a.href = `#`; //
      a.innerText = "click";
      button.appendChild(a);

      cardBody.append(movieDisc, airtime, br, button);

      // compelete movieCard
      movieCard.append(cardHead, cardBody);

      // ---------- >>>
    });
  }

  // ---------- >>>
}

showMovies();
