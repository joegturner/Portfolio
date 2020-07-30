const cards = document.getElementsByClassName("card");

const body = document.getElementsByTagName("body")[0];
console.log(cards);

body.addEventListener("click", (event) => {
  const rotated = document.getElementsByClassName("card__rotate")[0];
  const target = event.target;

  if (rotated !== target.parentElement) {
    rotated.classList.remove("card__rotate");
  }

  //   console.log(event.target);
});

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", (event) => {
    const target = event.target.parentElement;

    target.classList.add("card__rotate");
    console.log(target.classList);
  });
}
