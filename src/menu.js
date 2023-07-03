export default function loadMenu() {
  const mainContent = document.querySelector("#mainContent");

  if (mainContent.classList.contains("two")) {
    console.log("already on menu page...");
  } else {
    //empty mainContent
    while (mainContent.firstChild) {
      mainContent.firstChild.remove();
    }
    mainContent.classList.remove("one", "three");
    mainContent.classList.add("two");

    //add lunchMenu box
    const lunchMenu = document.createElement("div");
    const lunchHeader = document.createElement("h6");
    const lunchText = document.createElement("p");

    lunchHeader.innerText = "Lunch";
    lunchText.innerHTML =
      "Soup: $5 <br>" +
      "Pizza: $15 <br>" +
      "Sandwich: $12 <br>" +
      "Nachos: $15 <br>" +
      "Salad: $13 ";

    lunchMenu.classList.add("box");
    lunchMenu.appendChild(lunchHeader);
    lunchMenu.appendChild(lunchText);

    mainContent.appendChild(lunchMenu);

    //add dinnerMenu box
    const dinnerMenu = document.createElement("div");
    const dinnerHeader = document.createElement("h6");
    const dinnerText = document.createElement("p");

    dinnerHeader.innerText = "Dinner";
    dinnerText.innerHTML =
      "Steak: $25 <br>" +
      "Pizza: $15 <br>" +
      "Sandwich: $12 <br>" +
      "Nachos: $15 <br>" +
      "Salad: $13 ";

    dinnerMenu.classList.add("box");
    dinnerMenu.appendChild(dinnerHeader);
    dinnerMenu.appendChild(dinnerText);

    mainContent.appendChild(dinnerMenu);

    //add drinks box
    const drinkMenu = document.createElement("div");
    const drinkHeader = document.createElement("h6");
    const drinkText = document.createElement("p");

    drinkHeader.innerText = "Drinks";
    drinkText.innerHTML =
      "Soda: $5 <br>" +
      "smoothie: $8 <br>" +
      "Coffee: $5 <br>" +
      "Beer: $8 <br>" +
      "Cocktail: $10 ";

    drinkMenu.classList.add("box");
    drinkMenu.appendChild(drinkHeader);
    drinkMenu.appendChild(drinkText);

    mainContent.appendChild(drinkMenu);
  }
}
