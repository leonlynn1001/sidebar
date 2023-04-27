const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const toggler = document.querySelector(".sidebar-toggle");
toggler.addEventListener("click", (e) => {
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //   }
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", (e) => {
  sidebar.classList.remove("show-sidebar");
});
