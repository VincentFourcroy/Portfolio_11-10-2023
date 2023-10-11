const burger = document.querySelector("#burger"),
      nav = document.querySelector(".nav-links"),
      navItems = document.querySelector(".menu"),
      searchToggle = document.querySelector(".searchBox"),
      searchInput = document.querySelector(".search-bar"),
    //   sidebarOpen = document.querySelector(".sidebarOpen"),
      btnClose = document.querySelector("#btn-close");

          
//   js code to toggle sidebar
burger.addEventListener("click" , () =>{
    nav.classList.toggle("active");
    btnClose.classList.add("active");
    burger.style.display = "none";
});
// btnClose.addEventListener("click" , () =>{
//     nav.classList.toggle("active");
//     btnClose.classList.remove("active");
//     burger.classList.add("active");
// });
searchToggle.addEventListener("click", () =>{
    searchToggle.classList.toggle("active");
});
