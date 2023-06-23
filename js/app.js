gsap.registerPlugin(ScrollTrigger);
let speed = 100;
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

// Add hover event listener to each button
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    // Get the hover button background element
    const hoverBtnBg = document.querySelector("#portfolio .btns .hover-btn-bg");

    // Set the width and transform properties based on the button id
    if (button.id === "selected-works") {
      hoverBtnBg.style.width = "148px";
      hoverBtnBg.style.transform = "translateX(0%)";
    } else if (button.id === "e-commerce") {
      hoverBtnBg.style.width = "135px";
      hoverBtnBg.style.transform = "translateX(112%)";
    } else if (button.id === "healthcare") {
      hoverBtnBg.style.width = "119px";
      hoverBtnBg.style.transform = "translateX(239%)";
    } else if (button.id === "travel") {
      hoverBtnBg.style.width = "82px";
      hoverBtnBg.style.transform = "translateX(490%)";
    } else if (button.id === "other") {
      hoverBtnBg.style.width = "78px";
      hoverBtnBg.style.transform = "translateX(611%)";
    }
  });
});
// Add mouseout event listener to each button
//if the button is not active set color to black
buttons.forEach((button) => {
  button.addEventListener("mouseout", () => {
    if (!button.classList.contains("active-btn")) {
      button.style.color = "black";
    }
  });
});
// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active-btn"));
    // Add active class to the clicked button
    button.classList.add("active-btn");

    const buttonId = button.getAttribute("id"); // Get the id of the clicked button
    const projects = document.querySelectorAll(".project"); // Get all project elements

    // Toggle the visibility of projects based on the button clicked
    projects.forEach((project) => {
      if (project.classList.contains(buttonId)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
    /////////let's work together animation

    /* Clouds  */
    if (
      buttonId === "e-commerce" ||
      buttonId === "healthcare" ||
      buttonId === "travel" ||
      buttonId === "other"
    ) {
      let clouds = gsap.timeline();
      ScrollTrigger.create({
        animation: clouds,
        trigger: "#contact",
        start: "top+=100 center", // Animation starts when the top of the contact element is 100 pixels below the top of the viewport
        end: "bottom+=20", // Animation ends 300 pixels from the start position
        scrub: 1,
      });
      clouds.to("#first", { x: -110 }, 0);
      clouds.to("#sec", { x: 110 }, 0);
      //reset scrollbar position after refresh
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  });
});

// Set the initial display for each project
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.style.display = project.classList.contains("selected-works")
    ? "block"
    : "none";
});
/////////let's work together animation

/* Clouds  */

let clouds = gsap.timeline();
ScrollTrigger.create({
  animation: clouds,
  trigger: "#contact",
  start: "top+=100 center", // Animation starts when the top of the contact element is 100 pixels below the top of the viewport
  end: "bottom+=20", // Animation ends 300 pixels from the start position
  scrub: 1,
});
clouds.to("#first", { x: -110 }, 0);
clouds.to("#sec", { x: 110 }, 0);
//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
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

//.back-top button on click scroll to top
let backTop = document.querySelector(".back-top");
backTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
