const cards = document.getElementsByClassName("card");

const body = document.getElementsByTagName("body")[0];

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (card) {
      card.classList.add("card__rotate");
    }
  });
}

body.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  const cardBack = event.target.closest(".card__side--back");

  if (cardBack) {
    card.classList.remove("card__rotate");
  }
});
