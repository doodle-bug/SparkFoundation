donate = document.querySelector("#donateButton");
modal = document.querySelector("#modal");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
function modalOpen() {
    modal.style.display = "block";
}
function modalClose() {
    modal.style.display = "none";
}

document.getElementById("donateButton").addEventListener("click", modalOpen);
document.getElementById("cross").addEventListener("click", modalClose);
// var imgArray = ['Rfflri94rs8','MMJx78V7xS8','EBbP0Wrbmqs','Dag9cv89jb4','3U3Qegatt2o'];