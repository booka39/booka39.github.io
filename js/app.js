//arrow color

const svgElement = document.querySelector(".arrow-down");

// Set the fill and stroke color to white
svgElement.style.fill = "#ffffff";
svgElement.style.stroke = "#ffffff";

//import elements
let lis = document.querySelectorAll(".navbar-nav li");

//active nav
lis[0].classList.add("active");
lis.forEach(function (e) {
  e.addEventListener("click", function () {
    lis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    e.classList.add("active");
  });
});
//nav background
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    navbar.classList.add("transparent-bg");
  } else {
    navbar.classList.remove("transparent-bg");
  }
});

//nav visible && hidden along scrolling
var navbar = document.getElementById("navbar");
var previousScroll = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > previousScroll) {
    // Scrolling down
    navbar.classList.add("hidden");
  } else if (currentScroll < previousScroll) {
    // Scrolling up
    navbar.classList.remove("hidden");
  }

  if (currentScroll === 0) {
    // At the top
    navbar.classList.remove("hidden");
  }

  previousScroll = currentScroll;
});

// Get all the <li> elements inside the navbar
const navbarItems = document.querySelectorAll(".navbar-nav li");
navbarItems.forEach((item) => {
  item.classList.remove("active");
});
// Function to handle scroll event
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const header = document.querySelector("header");

  // Check if the scroll position is within the header section
  if (
    scrollPosition >= header.offsetTop &&
    scrollPosition < header.offsetTop + header.offsetHeight
  ) {
    // Remove the "active" class from all <li> elements
    navbarItems.forEach((item) => {
      item.classList.remove("active");
    });
  } else if (scrollPosition + windowHeight >= scrollHeight - 150) {
    // Iterate over each <li> element
    navbarItems.forEach((item) => {
      const href = item.querySelector("a").getAttribute("href");
      if (href === "#contact") {
        item.classList.add("active"); // Add the "active" class to the last <li> with href="#contact"
      } else {
        item.classList.remove("active"); // Remove the "active" class from other <li> elements
      }
    });
  } else {
    // Iterate over each <li> element
    navbarItems.forEach((item) => {
      const href = item.querySelector("a").getAttribute("href");
      const section = document.querySelector(href);

      // Check if the section is visible in the viewport with an additional offset of 150 pixels
      if (
        section.offsetTop - 150 < scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        // Remove the "active" class from other <li> elements
        navbarItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });

        item.classList.add("active"); // Add the "active" class to the corresponding <li>
      } else {
        item.classList.remove("active"); // Remove the "active" class from other <li> elements
      }
    });
  }
};

// Attach the scroll event listener to the window object
window.addEventListener("scroll", handleScroll);

// Add event listener for scroll
window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", function () {
  // Get the hire-me and show-cv elements
  var hireMeLink = document.querySelector(".hire-me");
  var showCVLink = document.querySelector(".show-cv");

  // Add a click event listener to the hire-me link
  hireMeLink.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the target element by ID
    var targetElement = document.getElementById("get-touch");
    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView();
    }
  });

  //icons of about me
  const imageContainer = document.querySelector(".img-overlay");
  const icons = document.querySelector("#about-me .icons");
  console.log(icons);

  imageContainer.addEventListener("mouseover", () => {
    icons.classList.add("about-me-active");
  });

  imageContainer.addEventListener("mouseout", () => {
    icons.classList.remove("about-me-active");
  });

  // Add a click event listener to the show-cv link
  showCVLink.addEventListener("click", function (event) {
    event.preventDefault();

    // Specify the target URL
    var targetURL =
      "https://drive.google.com/file/d/1oGcHj8OxaJp7gOGS6Qg7pyf2_byUv3Tm/view?usp=drivesdk";

    // Open the target URL in a new tab or window
    window.open(targetURL, "_blank");
  });
});
/////////let's work together animation
gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
  animation: clouds,
  trigger: "#contact",
  start: "top+=100 center", // Animation starts when the top of the viewport reaches the top of the #contact element
  end: "bottom+=20", // Animation ends when the bottom of the viewport is 20% from the bottom
  scrub: 1,
});
console.log(clouds);

clouds.to("#first", { x: -110 }, 0);
clouds.to("#sec", { x: 110 }, 0);

//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//////////////////////////////////////////
// // Get the contact div element
// var contactDiv = document.getElementById("contact");

// // Get the contact title element
// var contactTitle = contactDiv.querySelector(".contact-title");

// // Initialize the previous scrolling Y position
// var prevScrollY = window.scrollY || window.pageYOffset;

// // Initialize the scroll counter
// var scrollCounter = 0;

// // Initialize the original translation values
// var originalTranslateXFirst = 0;
// var originalTranslateXSec = 0;

// // Set the maximum translation values for 'first' and 'sec'
// var maxTranslateXFirst = -36;
// var maxTranslateXSec = 50;

// // Set the maximum opacity values for 'first' and 'sec'
// var maxOpacityFirst = 0.5;
// var maxOpacitySec = 0.5;

// // Add an event listener to the window scroll event
// window.addEventListener("scroll", function () {
//   // Get the current scrolling Y position
//   var scrollY = window.scrollY || window.pageYOffset;

//   // Get the top offset of the contact div minus 100 pixels
//   var contactTop = contactDiv.offsetTop - 100;

//   // Check if the scrolling Y position is at least 100 pixels above the contact div
//   if (scrollY >= contactTop) {
//     // Check if scrolling down
//     if (scrollY > prevScrollY) {
//       scrollCounter++;

//       // Calculate the translation and opacity values based on the scroll position
//       var translateXFirst = Math.min(-3 * scrollCounter, maxTranslateXFirst);
//       var translateXSec = Math.min(scrollCounter, maxTranslateXSec);
//       var opacityFirst = Math.max(1 - scrollCounter * 0.01, maxOpacityFirst);
//       var opacitySec = Math.max(1 - scrollCounter * 0.01, maxOpacitySec);

//       // Apply the calculated translations and opacities to the "first" and "sec" classes
//       contactTitle.querySelector(
//         ".first"
//       ).style.transform = `translateX(${translateXFirst}px)`;
//       contactTitle.querySelector(
//         ".sec"
//       ).style.transform = `translateX(${translateXSec}px)`;
//       contactTitle.querySelector(".first").style.opacity = opacityFirst;
//       contactTitle.querySelector(".sec").style.opacity = opacitySec;

//       // Save the current translation values as the original values
//       originalTranslateXFirst = translateXFirst;
//       originalTranslateXSec = translateXSec;
//     } else {
//       // Scrolling direction is up
//       // Check if the original translation values are not zero
//       if (originalTranslateXFirst !== 0 && originalTranslateXSec !== 0) {
//         scrollCounter--;

//         // Calculate the translation and opacity values based on the scroll position
//         var translateXFirst = Math.min(-3 * scrollCounter, maxTranslateXFirst);
//         var translateXSec = Math.min(scrollCounter, maxTranslateXSec);
//         var opacityFirst = Math.max(1 - scrollCounter * 0.01, maxOpacityFirst);
//         var opacitySec = Math.max(1 - scrollCounter * 0.01, maxOpacitySec);

//         // Apply the calculated translations and opacities to the "first" and "sec" classes
//         contactTitle.querySelector(
//           ".first"
//         ).style.transform = `translateX(${translateXFirst}px)`;
//         contactTitle.querySelector(
//           ".sec"
//         ).style.transform = `translateX(${translateXSec}px)`;
//         contactTitle.querySelector(".first").style.opacity = opacityFirst;
//         contactTitle.querySelector(".sec").style.opacity = opacitySec;
//       }
//     }
//   } else {
//     // The scrolling Y position is not at least 100 pixels above the contact div
//     contactTitle.querySelector(".first").style.transform = "translateX(0)";
//     contactTitle.querySelector(".sec").style.transform = "translateX(0)";
//     contactTitle.querySelector(".first").style.opacity = "1";
//     contactTitle.querySelector(".sec").style.opacity = "1";

//     // Reset the scroll counter to 0
//     scrollCounter = 0;
//   }

//   // Update the previous scrolling Y position
//   prevScrollY = scrollY;
// });
///////////////////////////////////////////////

//hover on svg icons
let cards = document.querySelectorAll("#services .card");
let svgHover = document.querySelectorAll("#services .svg-hover");
// Initially hide all svgHover
svgHover.forEach((element) => {
  element.style.display = "none";
});
cards.forEach((card) => {
  let svgHover = card.querySelector(".svg-hover");
  let svg = card.querySelector(".svg");

  card.addEventListener("mouseover", () => {
    svgHover.style.display = "block";
    svg.style.display = "none";
  });

  card.addEventListener("mouseout", () => {
    svgHover.style.display = "none";
    svg.style.display = "block";
  });
});

// Get all the buttons
const buttons = document.querySelectorAll("#portfolio .btns button");

//hover on btns portfolio
//select all buttons in class btns
let btns = document.querySelectorAll("#portfolio .btns button");
//if hover on button #selected-works change width of .hover-btn-bg to 89 px
//if hover on button #e-commerce change width of .hover-btn-bg to width: 116px; and transform: translateX(84%);
//if hover on button #healthcare change width of .hover-btn-bg to width: 116px; and transform: translateX(168%);
//if hover on button #travel change width of .hover-btn-bg to width: 116px; and transform: translateX(252%);
//if hover on button #other change width of .hover-btn-bg to width: 116px; and transform: translateX(336%);
//for each button in btns if hover set color to white and if hover end set color to black
btns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.color = "white";
    let hoverBtnBg = document.querySelector("#portfolio .btns .hover-btn-bg");
    if (btn.id == "selected-works") {
      hoverBtnBg.style.width = "148px";
      hoverBtnBg.style.transform = "translateX(0%)";
    } else if (btn.id == "e-commerce") {
      hoverBtnBg.style.width = "135px";
      hoverBtnBg.style.transform = "translateX(112%)";
    } else if (btn.id == "healthcare") {
      hoverBtnBg.style.width = "119px";
      hoverBtnBg.style.transform = "translateX(239%)";
    } else if (btn.id == "travel") {
      hoverBtnBg.style.width = "82px";
      hoverBtnBg.style.transform = "translateX(490%)";
    } else if (btn.id == "other") {
      hoverBtnBg.style.width = "78px";
      hoverBtnBg.style.transform = "translateX(611%)";
    }
  });
  btn.addEventListener("mouseout", () => {
    btn.style.color = "#e74d61";
    //other btns become black
  });
});

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active-btn"));
    // Add active class to the clicked button
    button.classList.add("active-btn");
  });
});

// Add an event listener to each button
document.querySelectorAll("#portfolio .btns button").forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.getAttribute("id"); // Get the id of the clicked button
    const projects = document.querySelectorAll(".project"); // Get all project elements

    // Iterate over each project and toggle their visibility based on the button clicked
    projects.forEach((project) => {
      const projectDisplay = getComputedStyle(project).display;

      if (project.classList.contains(buttonId)) {
        if (projectDisplay === "none") {
          project.style.display = "block"; // Show the projects with matching class
        } else {
          project.style.display = "none"; // Hide the projects with matching class
          setTimeout(() => {
            project.style.display = "block"; // Show the projects with matching class
          }, 0);
        }
      } else {
        project.style.display = "none"; // Hide the projects without matching class
      }
    });

    // Toggle the active class on the clicked button
    document.querySelector(".btns .active-btn").classList.remove("active-btn");
    button.classList.add("active-btn");
  });
});

// Set the initial display for each project
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  if (project.classList.contains("selected-works")) {
    project.style.display = "block";
  } else {
    project.style.display = "none";
  }
});

//on submit form
let form = document.querySelector("#contact form");
let sendingDiv = document.querySelector("#contact #sending"); // Assuming the div has the class 'sending'

form.addEventListener("submit", (e) => {
  // Prevent default
  e.preventDefault();
  // Script URL
  let scriptURL =
    "https://script.google.com/macros/s/AKfycbwWTNKmx17KuuBrhRM20aPgGmzwSPkmfEiCdSc4wMrwNIsjLkHLxOBDzoln-UOHu0vh/exec";

  // Set opacity of sending div to 1
  sendingDiv.style.opacity = 1;

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Set opacity of output_message div to 1
      document.querySelector("#contact  #message-sent").style.opacity = 1;
      //get name and email and message from form
      let name = document.querySelector("#contact form #name").value;
      let email = document.querySelector("#contact form #email").value;
      let message = document.querySelector("#contact form #message").value;
      // Reset form
      form.reset();
      //sending notification message by email
      Email.send({
        SecureToken: "0fc08a2d-c796-445c-ab95-7dfdb0d5a546",
        To: "ahmed.shehata.360@gmail.com",
        From: "mohamedaboukaram39@gmail.com",
        Subject: "🚨📊 You have a new message from your website..",
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
      });
      // After 4 seconds, set opacity of output_message div to 0
      setTimeout(() => {
        document.querySelector("#contact #message-sent").style.opacity = 0;
      }, 4000);
      // Reset opacity of sending div to 0
      sendingDiv.style.opacity = 0;
    })
    .catch((error) => console.error("Error!", error.message));
});
