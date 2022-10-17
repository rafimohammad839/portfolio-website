const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

// Open Tab in About Section
function opentab(tabName) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}



// Open or close side-bar menu when in mobile view
function openmenu() {
  document.getElementById("sidemenu").style.right = "0";
}
function closemenu() {
  document.getElementById("sidemenu").style.right = "-200px";
}


// Submitting form to google sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwJL0w0M9BWFZpWf1VghjvOJWYrolVk3sitoxSDw8U3wG8n3YNIBK3Owo7p-SlnCS2CYA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const sendingBtn = document.getElementById("sending");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendingBtn.classList.add("active");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      sendingBtn.classList.remove("active");
      msg.innerHTML = "Your repsonse has been successfully submited!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});


// Auto typing with Typed.js
let options = {
  strings: ["Mohammad Rafi", "Web Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
};
let typed = new Typed("#auto-input", options);
