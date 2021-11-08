const AllShows = getAllShows();

AllShows.forEach((item) => {
  // index.html show selector >>>
  const showSlector_1 = document.querySelector(".showSlector_1");
  let showOption_1 = document.createElement("option");
  showOption_1.innerHTML = `&nbsp; ${item.name}`;
  showOption_1._1className = "showOption";
  showOption_1.value = `#${item.id}`;
  showSlector_1.appendChild(showOption_1);

  const showsContainer = document.getElementById("showsContainer");
  // >>>
  const showCard = document.createElement("div");
  showCard.className = "showCard";
  showCard.id = item.id;

  const rating = document.createElement("div");
  rating.className = "rating";

  const ratingTxt = document.createElement("strong");
  let num = item.rating.average;
  let Float = Number(num) === num && num % 1 !== 0;
  Float === false && (num = num + ".0");
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
  //
  const showLink = document.createElement("a");
  //
  showLink.href="#"
  showLink.id = `${item._links.self.href}/episodes`;
  showLink.className = "link"
  
  //
  const showTitle = document.createElement("strong");
  showTitle.innerText = item.name;
  showTitle.className = "showTitle";
  showLink.append(showTitle);


  //

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

  //

  const cardLeft = document.createElement("div");
  cardLeft.className = "cardLeft";
  //

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
