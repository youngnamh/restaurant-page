export default function loadHome() {
  const mainContent = document.querySelector("#mainContent");

  if (mainContent.classList.contains("one")) {
    console.log("already on home page...");
  } else {
    //empty mainContent
    while (mainContent.firstChild) {
      mainContent.firstChild.remove();
    }
    mainContent.classList.remove("two", "three");
    mainContent.classList.add("one");

    //add about box
    const about = document.createElement("div");
    const aboutHeader = document.createElement("h6");
    const aboutText = document.createElement("p");

    aboutHeader.innerText = "About us";
    aboutText.innerText =
      "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    about.classList.add("box");

    about.appendChild(aboutHeader);
    about.appendChild(aboutText);

    mainContent.appendChild(about);

    //add hours
    const hours = document.createElement("div");
    const hoursHeader = document.createElement("h6");
    const hoursText = document.createElement("p");

    hoursHeader.innerText = "Hours";
    hoursText.innerHTML =
      "Hours Sunday: 8am - 8pm <br>" +
      "Monday: 6am - 6pm <br>" +
      "Tuesday: 6am - 6pm <br>" +
      "Wednesday: 6am - 6pm <br>" +
      "Thursday: 6am - 10pm <br>" +
      "Friday: 6am - 10pm <br>" +
      "Saturday: 8am - 10pm";

    hours.classList.add("box");

    hours.appendChild(hoursHeader);
    hours.appendChild(hoursText);

    mainContent.appendChild(hours);

    //add Location
    const location = document.createElement("div");
    const locationHeader = document.createElement("h6");
    const locationText = document.createElement("p");

    locationHeader.innerText = "Location";
    locationText.innerText = "1234 Street St, Montreal, Quebec";

    location.classList.add("box");

    location.appendChild(locationHeader);
    location.appendChild(locationText);

    mainContent.appendChild(location);
  }
}
