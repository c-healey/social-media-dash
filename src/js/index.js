import { tiles, cards } from "./model/PriceCard";

import * as cardView from "./views/PriceCardview";
import { elements } from "./views/base";

const controlCard = () => {
  cardView.renderTiles(tiles);
  cardView.renderCards(cards);
};

// elements.toggle.addEventListener("change", e => {
//   e.preventDefault();
//   console.log("triggered check event", e.target.checked);
//   // elements.body.style.backgroundColor = "white";
//   document.documentElement.classList.toggle("light-theme");
// });

window.addEventListener("load", e => {
  controlCard();
});

elements.container.addEventListener("change", e => {
  console.log("change", e.target);
  if (e.target.matches("input")) {
    document.documentElement.classList.toggle("light-theme");
  }
});
