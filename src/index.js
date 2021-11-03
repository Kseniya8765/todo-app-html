const btns = document.getElementsByClassName("filter-btns");
const nav = document.getElementsByClassName("nav");
const cards = document.getElementsByClassName("card");

for (let card of cards) {
  card.addEventListener("click", function handler() {
    card.classList.toggle("major");
  });
}

for (let btn of btns) {
  btn.addEventListener("click", function handler(e) {
    e.target.classList.toggle("press");
  });
}

for (let link of nav) {
  link.addEventListener("click", function handler(e) {
    e.target.classList.toggle("underline");
    // e.target.className = e.target.className.replace(" ", " underline");
    // e.target.className += " underline";
  });
}
