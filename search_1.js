function SearchFunc_1() {

  let num = 0;

  var searchInput = document.querySelector(".searchInput");
  let filter = searchInput.value.toUpperCase();

  let showCard = document.getElementsByClassName("showCard"); // cards

  let showTitle_ = document.querySelectorAll(".showTitle");
  let genres_ = document.querySelectorAll(".btn");
  let td_ = document.querySelectorAll("table");
  let rating_ = document.querySelectorAll(".rating > strong");
  let summary_ = document.querySelectorAll(".para");
  let By_ = document.querySelectorAll(".info > a");

  for (let i = 0; i < showCard.length; i++) {
    let [showTitle, genres, td, rating, summary, By] = [
      showTitle_[i].innerText,
      genres_[i].innerHTML,
      td_[i].innerText,
      rating_[i].innerHTML,
      summary_[i].innerHTML,
      By_[i].innerHTML,
    ];

    const hasFilter = [showTitle, genres, td, rating, summary, By].find(
      (item) => item.toUpperCase().indexOf(filter) > -1
    );

    showCard[i].style.display = hasFilter ? "" : "none";

    //  get visible  element length

    if (isHidden(showCard[i]) === false) {
      num = num + 1;
      let displayElements = document.querySelector(".display");
      num < 2
        ? (displayElements.innerHTML = `Found ${num} Show`)
        : (displayElements.innerHTML = `Found ${num} Shows`);
    }
  }
}
