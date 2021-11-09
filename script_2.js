const container = document.querySelector(".epiContainer_");

// ----------------- page.html >>>
function showChange() {
  // ---------- show loading
  let loading = document.querySelector(".loading");
  loading.style.display = "";
  
  //  displaying show name>>>

  const showName = document.querySelector(".showName");
  showName.innerHTML = showName_;

  const container = document.getElementById("showsContainer");
  container.className = "container_ epiContainer_";

  [
    document.querySelector(".showSlector"),
    document.querySelector("#selector"),
    document.querySelector(".epiContainer_"),
  ].find((item) => {
    while (item.hasChildNodes()) {
      // removie existing child elements
      item.removeChild(item.firstChild);
    }
    //
  });
  showMovies();

}

async function showMovies() {
  //   remove showSelector
  const removeSelector = document.querySelector(".showSlector");
  removeSelector.style.display = "none";
  //  add navigate btn, episode slector & showName
  const navBtn = document.querySelector(".navBtn");
  navBtn.style.display = "";
  const selector = document.querySelector("#selector");
  selector.style.display = "";
  const showName = document.querySelector(".showName");
  showName.style.display = "";

  // change onkeyup for searchInput
  const searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("keyup", SearchFunc_2);

  // -----------------------

  const responce = await fetch(EpisodeURL);
  let allEpisodes = await responce.json();

  // short alphabetic order (Shows) >>>

  window.onload = Episode();
  function Episode() {
    const container = document.querySelector(".epiContainer_");

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

      let itemImg = item.image;
      if (itemImg === null || "") {
        itemImg = "./assets/img/movie.gif";
      } else {
        itemImg = item.image.medium;
      }

      img.src = `${itemImg}`;
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
      sepi.innerText = `S${season_}E${episode_}`;

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
      a.href = `${item.url}`; //
      a.innerText = "click";
      a.target = "_blank";
      button.appendChild(a);

      cardBody.append(movieDisc, airtime, br, button);

      // compelete movieCard
      movieCard.append(cardHead, cardBody);

      // ---------- >>>
    });
  }

    //  >>>
    let movieCard = document.querySelectorAll(".movieCard")
    let displayElements = document.querySelector(".display");
    displayElements.innerHTML = `Displaying ${movieCard.length} Shows`

  //  displaying loading >>>
  let loading = document.querySelector(".loading");
  loading.style.display = "none";
}
