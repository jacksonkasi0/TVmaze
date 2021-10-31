const container = document.querySelector(".container_");

showMovies();

function showMovies() {
  const allEpisodes = getAllEpisodes();

  allEpisodes.forEach((item) => {
    let season_ = item.season;
    let episode_ = item.number;

    if (item.season < 10) {
      season_ = "0" + item.season;
    }

    if (item.number < 10) {
      episode_ = "0" + item.number;
    }

    //   ----------- solved summary error's >>>

    let Summary = item.summary;

    Summary = Summary.replace("<p></p>", "");
    let summaryEndPoint = Summary.search(".</p><p>");
    Summary = Summary.slice(0, summaryEndPoint);

    // MOvie Card >>>
    const movieCard = document.createElement("div");
    movieCard.className = "movieCard";
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

    const figcapTitle = document.createElement("strong");
    figCap.className = "carousel-caption";
    figcapTitle.innerText = `${item.name}`;
    figCap.appendChild(figcapTitle);

    imageFram.append(img, figCap);

    // sepi --> season & episode
    const sepi = document.createElement("p");
    sepi.innerText = `S${season_}E${episode_}`; // kasi

    figure.append(imageFram, sepi);

    // card body >>>
    const cardBody = document.createElement("div");
    cardBody.className = "cardBody";

    const movieDisc = document.createElement("span");
    movieDisc.innerHTML = `${Summary}`;

    const airtime = document.createElement("small");
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
  // ---------- >>>
}
