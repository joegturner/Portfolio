const cards = document.getElementsByClassName("card");
const body = document.getElementsByTagName("body")[0];
const navButton = document.getElementsByClassName("nav__checkbox")[0];

// Animations for mobile touch screens
// - card rotation
// - navigation menu close

// add rotate to card if touched
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (card) {
      card.classList.add("card__rotate");
    }
  });
}

body.addEventListener("click", (event) => {
  // flip project card back over
  const card = event.target.closest(".card");
  const cardBack = event.target.closest(".card__side--back");

  if (cardBack) {
    card.classList.remove("card__rotate");
  }

  // close nav button pop up in mobile
  const navClicked =
    event.target.parentElement.classList[0] === "nav-mobile__links" ||
    event.target.parentElement.classList[0] === "nav-mobile__link";

  if (navClicked) {
    navButton.checked = false;
  }
});
