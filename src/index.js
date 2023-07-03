import "./style/styles.css";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact";

loadHome();

const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");

homeButton.addEventListener("click", () => {
  loadHome();
});

menuButton.addEventListener("click", () => {
  loadMenu();
});

contactButton.addEventListener("click", () => {
  loadContact();
});

/*
      <div id="mainContent" class="one">
        <div class="box">
          <h6>About us</h6>
          <p>
            Beary's has the best porridge! The atmosphere and customer service
            make you feel like you are sitting in the middle of the woods,
            eating like a bear! This is exactly the kind of place that I like to
            return to again and again.
          </p>
        </div>
        <div class="box">
          <h6>Hours</h6>
          <p>
            Hours Sunday: 8am - 8pm <br />
            Monday: 6am - 6pm <br />
            Tuesday: 6am - 6pm <br />
            Wednesday: 6am - 6pm <br />Thursday: 6am - 10pm <br />Friday: 6am -
            10pm <br />Saturday: 8am - 10pm
          </p>
        </div>
        <div class="box">
          <h6>Location</h6>
          <p>123 Forest Drive, Forestville, Maine</p>
        </div>
      </div>
*/
