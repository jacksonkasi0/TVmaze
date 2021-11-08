function SearchFunc() {
  var searchInput = document.querySelector(".searchInput");
  let filter = searchInput.value.toUpperCase();
  //
  let showCard = document.getElementsByClassName("showCard");
  let showTitle_ = document.querySelectorAll("strong");

  for (let i = 0; i < showCard.length; i++) {
    [showTitle_[i].innerHTML].find(
      (item) => item.toUpperCase().indexOf(filter) > -1
      );
      showCard[i].style.display = hasFilter ? "" : "none";
      
  }
}
