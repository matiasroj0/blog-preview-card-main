const card = document.querySelector(".card");
const courseTitle = document.querySelector(".course-title");

courseTitle.addEventListener("mouseover", () => {
  card.classList.add("card-hover");
});

courseTitle.addEventListener("mouseout", () => {
  card.classList.remove("card-hover");
});
