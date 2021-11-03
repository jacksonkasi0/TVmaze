   function SearchFunc() {
     var searchInput = document.querySelector("#searchInput");
     let filter = searchInput.value.toUpperCase();
     let movieCard = document.getElementsByClassName("movieCard"); // search field
   
     let movieTitle = document.querySelectorAll("strong");
     let sepi = document.querySelectorAll(".sepi"); // sepi is seasons & episodes short's form...
     let movieDisc = document.querySelectorAll(".movieDisc"); // movie discription
     let airTime = document.querySelectorAll(".airTime");
   
     for (let i = 0; i < movieCard.length; i++) {
       let titleValue = movieTitle[i].innerText; // movie title field value
       let sepiValue = sepi[i].innerHTML;
       let discValue = movieDisc[i].innerHTML;
       let dateValue = airTime[i].innerHTML;
   
       if (
         titleValue.toUpperCase().indexOf(filter) > -1 ||
         sepiValue.toUpperCase().indexOf(filter) > -1 ||
         discValue.toUpperCase().indexOf(filter) > -1 ||
         dateValue.toUpperCase().indexOf(filter) > -1
       ) {
         // this line provide, search input matching letters index from 0 to ...
         movieCard[i].style.display = "";
       } else {
         movieCard[i].style.display = "none";
       }
     }
   }
   