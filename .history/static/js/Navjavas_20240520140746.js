$(document).ready(function () {
  const user_input = $("#user-input");
  const autocomplete_results = $('#autocomplete-results');
  const endpoint = `/availableBooks/{{ personid }}/`;

  user_input.on('keyup', function () {
      const query = $(this).val();

      if (query.length < 2) {
          autocomplete_results.empty();
          return;
      }

      $.ajax({
          url: endpoint,
          data: {
              q: query
          },
          dataType: 'json',
          success: function (data) {
              autocomplete_results.empty();
              if (data.length > 0) {
                  data.forEach(item => {
                      autocomplete_results.append(`<div class="autocomplete-suggestion" data-id="${item.id}">${item.bookname}</div>`);
                  });
              } else {
                  autocomplete_results.append('<div class="autocomplete-suggestion">No results found</div>');
              }
          }
      });
  });

  autocomplete_results.on('click', '.autocomplete-suggestion', function () {
      user_input.val($(this).text());
      autocomplete_results.empty();
  });

  $(document).on('click', function (e) {
      if (!$(e.target).closest('#user-input, #autocomplete-results').length) {
          autocomplete_results.empty();
      }
  });
});








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

