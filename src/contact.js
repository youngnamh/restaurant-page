import profile from "./images/face.png";

export default function loadContact() {
  if (mainContent.classList.contains("three")) {
    console.log("already on contact page...");
  } else {
    const mainContent = document.querySelector("#mainContent");

    //empty mainContent
    while (mainContent.firstChild) {
      mainContent.firstChild.remove();
    }
    mainContent.classList.remove("one", "two");
    mainContent.classList.add("three");

    const names = [
      "Dave Smith",
      "Sally Wong",
      "Reek Greyjoy",
      "BingBong BillaDong",
    ];
    const positions = ["Owner", "General Manager", "Kitchen Manager", "Events"];
    const numbers = [
      "555-555-5435",
      "556-545-3557",
      "555-345-7853",
      "555-225-7834",
    ];

    //add contact boxes

    let counter = 0;
    names.forEach((name) => {
      const contactBox = document.createElement("div");
      const contactName = document.createElement("h6");
      const contactInfo = document.createElement("p");

      contactName.innerText = names[counter];
      contactInfo.innerHTML = positions[counter] + " <br>" + numbers[counter];

      contactBox.classList.add("box");
      contactBox.appendChild(contactName);
      contactBox.appendChild(contactInfo);

      const picture = new Image();
      picture.src = profile;
      picture.classList.add("profile");

      contactBox.appendChild(picture);

      mainContent.appendChild(contactBox);
      counter++;
    });
  }
}
