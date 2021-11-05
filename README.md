# TVmaze


let showUrl;
let showChanged;
function showChange() {
  let Url = document.querySelector("#showSlector");
  showUrl = Url.value;
  showChanged = true;

  if (showChanged===true) {
    let [showSlector, epiSelector, container_] = [
      document.querySelector("#showSlector"),
      document.querySelector("#selector"),
      document.querySelector(".container_"),
    ].find((item) => {
      while (item.hasChildNodes()) { // removie existing child elements
        item.removeChild(item.firstChild);
      }
      //
    });
  }
    
}
