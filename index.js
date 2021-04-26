function myfunction() {
    var x = document.getElementById("nav-menu__list");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }