import { elements } from "./base";
import { cards } from "../model/PriceCard";

export default "rendercards";

export const renderTiles = tiles => {
  console.log("renderTiles");
  let markup = `<div class="section-title">
  <div class="title">
    <h1>Social Media Dashboard</h1>
    <p>Total Followers: ${tiles.totalFollowers}</p>
  </div>
  <div class="toggle"><div class="">Dark Mode</div><label class="switch">
    <input type="checkbox" checked>
    <span class="slider round"></span>
  </label></div>
</div>`;
  elements.content.insertAdjacentHTML("beforeend", markup);

  let upOrDown;
  let upOrDownArrow;
  let increment;
  markup = tiles.tiles.map((tile, idx) => {
    if (tile.increment < 0) {
      upOrDown = "down";
      upOrDownArrow = "arrow-down";
      increment = tile.increment * -1;
    } else {
      upOrDown = "up";
      upOrDownArrow = "arrow-up";
      increment = tile.increment;
    }
    return ` <div class="tile ${tile.socialPlatform}">
    <div class="user">
      <img
        class="icon"
        src="./images/icon-${tile.socialPlatform}.svg"
        alt="facebook"
      />${tile.userName}
    </div>
    <div class="followers">
      <div class="count">${tile.count}</div>
      <p>${tile.unit}</p>
    </div>

    <div class="${upOrDown}">
      <div class="${upOrDownArrow}"></div>
      <p>${increment} Today</p>
    </div>
  </div>`;
  });

  elements.content.insertAdjacentHTML("beforeend", markup.join(""));
};
export const renderCards = () => {
  let upOrDown;
  let upOrDownArrow;
  let increment;

  let markup = `<div class="section-title">
<div class="title">
  <h1>Overview - Today</h1>
</div>
</div>`;
  elements.content.insertAdjacentHTML("beforeend", markup);
  markup = cards.map(card => {
    if (card.increment < 0) {
      upOrDown = "down";
      upOrDownArrow = "arrow-down";
      increment = card.increment * -1;
    } else {
      upOrDown = "up";
      upOrDownArrow = "arrow-up";
      increment = card.increment;
    }
    return `<div class="card-2">
  <h4>${card.unit}</h4>
  <img class="icon" src="./images/icon-${card.socialPlatform}.svg" alt="${card.socialPlatform}" />
  <div class="count">${card.count}</div>
  <div class="${upOrDown}">
      <div class="${upOrDownArrow}"></div>
      <p>${increment}%</p>
  </div>
</div>`;
  });
  elements.content.insertAdjacentHTML("beforeend", markup.join(""));
};
// unit: "Page Views",
//     socialPlatform: "facebook",
//     count: "87",
//     increment: 3
