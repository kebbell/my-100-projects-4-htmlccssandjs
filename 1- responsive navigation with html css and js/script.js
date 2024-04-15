const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  const navbar_content = document.querySelector(".navbar.content");
  burger.classList.toggle("active");

  navbar_content.classList.toggle("show");
});
