let showName_ = "";
var EpisodeURL;

// ---------------------- index.html

displayShow();

async function displayShow() {
  //  hide navBtn, showNameBtn & Episode Selector
  const navBtn = document.querySelector(".navBtn");
  navBtn.style.display = "none";
  const selector = document.querySelector("#selector");
  selector.style.display = "none";
  const showName = document.querySelector(".showName");
  showName.style.display = "none";

  // change onkeyup for searchInput
  const searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("keyup", SearchFunc_1);

  // -----------------------

  const URL = "https://api.tvmaze.com/shows";

  let responce = await fetch(URL);

  let AllShows = await responce.json();

  // short alphabetic order (Shows) >>>

  AllShows.sort((a, b) => {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0; // return false = -1 / true = 1|0
  });

  AllShows.forEach((item) => {
    // Show Selector >>>
    const showSlector_1 = document.querySelector(".showSlector");
    let showOption_1 = document.createElement("option");
    showOption_1.innerHTML = `&nbsp; ${item.name}`;
    showOption_1._1className = "showOption";
    showOption_1.value = `#${item.id}`;
    showSlector_1.appendChild(showOption_1);
  });

  AllShows.forEach((item) => {
    const showsContainer = document.getElementById("showsContainer");
    showsContainer.className = "container_2";
    // >>>
    const showCard = document.createElement("div");
    showCard.className = "showCard";
    showCard.id = item.id;

    const rating = document.createElement("div");
    rating.className = "rating";

    const ratingTxt = document.createElement("strong");
    let num = item.rating.average;
    if (num !== null) {
      let Float = Number(num) === num && num % 1 !== 0;
      Float === false && (num = num + ".0");
    } else {
      num = "0.0";
    }
    ratingTxt.innerText = num;
    rating.append(ratingTxt);

    const cardRight = document.createElement("div");
    cardRight.className = "cardRight";

    // append 3 elemnts
    showsContainer.append(showCard, rating, cardRight);
    //

    const showImg = document.createElement("img");
    let itemImg = item.image;
    if (itemImg === null || "") {
      itemImg = "./assets/img/movie.jpg";
    } else {
      itemImg = item.image.medium;
    }
    showImg.src = itemImg; //
    showImg.alt = item.name;

    const imgL = document.createElement("div");
    imgL.className = "imgL";

    cardRight.append(showImg, imgL); //

    const inFo = document.createElement("div");
    inFo.className = "inFo";
    imgL.append(inFo);

    const showLink = document.createElement("a");
    showLink.href = "#";
    showLink.id = `${item._links.self.href}/episodes`;

    showLink.className = "link";
    // get id value when click the showLink
    showLink.addEventListener("click", () => {
      EpisodeURL = showLink.id;
      function getElementByXpath(path) {
        return document.evaluate(
          path,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;
      }

      showName_ = getElementByXpath(
        `//*[@id="${showLink.id}"]/strong`
      ).innerText;
      showChange();
    });

    const showTitle = document.createElement("strong");
    showTitle.innerText = item.name;
    showTitle.className = "showTitle";
    showLink.append(showTitle);

    const table = document.createElement("table");
    for (let i = 0; i < 4; i++) {
      const tr = document.createElement("tr");
      const td_1 = document.createElement("td");
      td_1.className = "info";
      //
      const td_2 = document.createElement("td");

      if (i === 0) {
        td_1.innerHTML = "Lang";
        td_2.innerHTML = item.language;
      }
      if (i === 1) {
        td_1.innerHTML = "Date";
        td_2.innerHTML = item.premiered;
      }
      if (i === 2) {
        td_1.innerHTML = "Time";
        td_2.innerHTML = item.runtime + " min";
      }
      if (i === 3) {
        td_1.innerHTML = "Status";
        td_2.innerHTML = item.status;
      }
      tr.append(td_1, td_2);
      table.append(tr);
    }

    // appen showlink and table in inFo
    inFo.append(showLink, table);

    const cardLeft = document.createElement("div");
    cardLeft.className = "cardLeft";

    const genres = document.createElement("div"); //
    genres.className = "genres";

    for (let i = 0; i < item.genres.length; i++) {
      const p = document.createElement("p");
      p.className = "btn btn-primary";
      p.innerText = item.genres[i];
      genres.append(p);
    }

    const By = document.createElement("div"); //
    By.className = "info";

    const byLink = document.createElement("a");

    let network = item.network;
    let of_link = item.officialSite;
    if (network === null) {
      network = "--";
    } else {
      network = item.network.name;
    }
    if (of_link === null) {
      of_link = "#";
    } else {
      of_link = item.officialSite;
    }

    byLink.innerHTML = network;
    byLink.href = of_link;
    byLink.target = "_blank";
    By.append(byLink);

    const br = document.createElement("br"); //

    const para = document.createElement("div"); //
    para.className = "para";
    para.innerHTML = item.summary;

    cardLeft.append(genres, By, br, para);

    showCard.append(rating, cardRight, cardLeft);
  });
}

displayShow().then(() => {
  //  displaying loading >>>
  let loading = document.querySelector(".loading");
  loading.style.display = "none";
  //  >>>
  let ShowCard = document.querySelectorAll(".showCard");
  let displayElements = document.querySelector(".display");
  displayElements.innerHTML = `Found ${ShowCard.length} Shows`;
}, 100);
