const cards = document.getElementsByClassName("card");
const body = document.getElementsByTagName("body")[0];
const navButton = document.getElementsByClassName("nav__checkbox")[0];
const navLinks = document.getElementsByClassName("nav-target");

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

// add smooth scroll on nav buttons
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", (event) => {
    let target = "";
    if (event.target.closest("span") === null) {
      target = event.target.firstElementChild.innerHTML.toLowerCase();
    } else {
      target = event.target.innerHTML.toLowerCase();
    }

    if (target) {
      const anchor = document.getElementById(target);
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  });
}

body.addEventListener("click", (event) => {
  // PROJECT CARDS
  // flip project card back over
  // console.log(event.target.firstElementChild);

  const card = event.target.closest(".card");
  const cardBack = event.target.closest(".card__side--back");

  if (cardBack) {
    card.classList.remove("card__rotate");
  }

  // NAV BUTTON

  // close nav button pop up in mobile
  const navClicked =
    event.target.parentElement.classList[0] === "nav-mobile__links" ||
    event.target.parentElement.classList[0] === "nav-mobile__link";

  if (navClicked) {
    navButton.checked = false;
  }
});
