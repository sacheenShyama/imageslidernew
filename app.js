let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  let images = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(images[0]);
});

prev.addEventListener("click", () => {
  let images = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(images[images.length - 1]);
});
