const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
// the # is used to select the id of the element
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  //nav.classList.toggle("openSearch"): 
  //This line toggles the "openSearch" class on the nav element.
  // If the class is not present, it adds it; if it's present,
  // it removes it.
  nav.classList.remove("openNav");
  // openNav is a class that is used to open the navigation menu.
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  //
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});