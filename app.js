const notificationCount = document.querySelector(".number");
const activeCard = document.querySelectorAll(".active-card");
const card = document.querySelectorAll(".card");
const mark = document.querySelector(".mark");
const dot = document.querySelector(".dot");

card.forEach((element) => {
  const dot = element.querySelector(".dot");

  if (element.classList.contains("active-card")) {
    dot.classList.add("active-dot");
  }

  element.addEventListener("click", () => {
    element.classList.toggle("active-card");
    let totalCount = document.querySelectorAll(".active-card").length;
    notificationCount.innerText = totalCount;
    dot.classList.toggle("active-dot");
  });
});

mark.addEventListener("click", () => {
  card.forEach((element) => {
    element.classList.remove("active-card");
    const totalCount = document.querySelectorAll(".active-card").length;
    notificationCount.innerText = totalCount;
    let dot = element.querySelector(".dot");
    dot.classList.remove("active-dot");
  });
});
