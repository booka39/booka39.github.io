/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */



//arrow color 

const svgElement = document.querySelector('.arrow-down');

// Set the fill and stroke color to white
svgElement.style.fill = '#ffffff';
svgElement.style.stroke = '#ffffff';

//import elements
let lis = document.querySelectorAll('.navbar-nav li');

//active nav 
lis[0].classList.add("active");
lis.forEach(function(e) {
    e.addEventListener('click', function() {
        lis.forEach(function(ele) {
            ele.classList.remove("active");
        })
        e.classList.add("active");
    })
});
//nav background
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        navbar.classList.add('transparent-bg');
    } else {
        navbar.classList.remove('transparent-bg');
    }
});





//nav visible && hidden along scrolling
var navbar = document.getElementById("navbar");
var previousScroll = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", function() {
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
const navbarItems = document.querySelectorAll('.navbar-nav li');
navbarItems.forEach((item) => {
    item.classList.remove('active');
});
// Function to handle scroll event
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const header = document.querySelector('header');

    // Check if the scroll position is within the header section
    if (scrollPosition >= header.offsetTop && scrollPosition < header.offsetTop + header.offsetHeight) {
        // Remove the "active" class from all <li> elements
        navbarItems.forEach((item) => {
            item.classList.remove('active');
        });
    } else if (scrollPosition + windowHeight >= scrollHeight - 150) {
        // Iterate over each <li> element
        navbarItems.forEach((item) => {
            const href = item.querySelector('a').getAttribute('href');
            if (href === '#contact') {
                item.classList.add('active'); // Add the "active" class to the last <li> with href="#contact"
            } else {
                item.classList.remove('active'); // Remove the "active" class from other <li> elements
            }
        });
    } else {
        // Iterate over each <li> element
        navbarItems.forEach((item) => {
            const href = item.querySelector('a').getAttribute('href');
            const section = document.querySelector(href);

            // Check if the section is visible in the viewport with an additional offset of 150 pixels
            if (section.offsetTop - 150 < scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition) {
                // Remove the "active" class from other <li> elements
                navbarItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                item.classList.add('active'); // Add the "active" class to the corresponding <li>
            } else {
                item.classList.remove('active'); // Remove the "active" class from other <li> elements
            }
        });
    }
};

// Attach the scroll event listener to the window object
window.addEventListener('scroll', handleScroll);





// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
    // Get the hire-me and show-cv elements
    var hireMeLink = document.querySelector('.hire-me');
    var showCVLink = document.querySelector('.show-cv');

    // Add a click event listener to the hire-me link
    hireMeLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Get the target element by ID
        var targetElement = document.getElementById('get-touch');
        if (targetElement) {
            // Scroll to the target element
            targetElement.scrollIntoView();
        }
    });


    //icons of about me 
    const imageContainer = document.querySelector('.img-overlay');
    const icons = document.querySelector('#about-me .icons');
    console.log(icons)

    imageContainer.addEventListener('mouseover', () => {
        icons.classList.add('about-me-active');
    });

    imageContainer.addEventListener('mouseout', () => {
        icons.classList.remove('about-me-active');
    });



    // Add a click event listener to the show-cv link
    showCVLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Specify the target URL
        var targetURL = 'https://drive.google.com/file/d/1oGcHj8OxaJp7gOGS6Qg7pyf2_byUv3Tm/view?usp=drivesdk';

        // Open the target URL in a new tab or window
        window.open(targetURL, '_blank');
    });
});





// Get the contact div element
var contactDiv = document.getElementById('contact');

// Get the contact title element
var contactTitle = contactDiv.querySelector('.contact-title');

// Initialize the previous scrolling Y position
var prevScrollY = window.scrollY || window.pageYOffset;

// Initialize the scroll counter
var scrollCounter = 0;

// Initialize the original translation values
var originalTranslateXFirst = 0;
var originalTranslateXSec = 0;

// Set the maximum translation values for 'first' and 'sec'
var maxTranslateXFirst = -36;
var maxTranslateXSec = 50;

// Set the maximum opacity values for 'first' and 'sec'
var maxOpacityFirst = 0.5;
var maxOpacitySec = 0.5;

// Add an event listener to the window scroll event
window.addEventListener('scroll', function() {
    // Get the current scrolling Y position
    var scrollY = window.scrollY || window.pageYOffset;

    // Get the top offset of the contact div minus 100 pixels
    var contactTop = contactDiv.offsetTop - 100;

    // Check if the scrolling Y position is at least 100 pixels above the contact div
    if (scrollY >= contactTop) {
        // Check if scrolling down
        if (scrollY > prevScrollY) {
            scrollCounter++;

            // Calculate the translation and opacity values based on the scroll position
            var translateXFirst = Math.min(-3 * scrollCounter, maxTranslateXFirst);
            var translateXSec = Math.min(scrollCounter, maxTranslateXSec);
            var opacityFirst = Math.max(1 - scrollCounter * 0.01, maxOpacityFirst);
            var opacitySec = Math.max(1 - scrollCounter * 0.01, maxOpacitySec);

            // Apply the calculated translations and opacities to the "first" and "sec" classes
            contactTitle.querySelector('.first').style.transform = `translateX(${translateXFirst}px)`;
            contactTitle.querySelector('.sec').style.transform = `translateX(${translateXSec}px)`;
            contactTitle.querySelector('.first').style.opacity = opacityFirst;
            contactTitle.querySelector('.sec').style.opacity = opacitySec;

            // Save the current translation values as the original values
            originalTranslateXFirst = translateXFirst;
            originalTranslateXSec = translateXSec;
        } else {
            // Scrolling direction is up
            // Check if the original translation values are not zero
            if (originalTranslateXFirst !== 0 && originalTranslateXSec !== 0) {
                scrollCounter--;

                // Calculate the translation and opacity values based on the scroll position
                var translateXFirst = Math.min(-3 * scrollCounter, maxTranslateXFirst);
                var translateXSec = Math.min(scrollCounter, maxTranslateXSec);
                var opacityFirst = Math.max(1 - scrollCounter * 0.01, maxOpacityFirst);
                var opacitySec = Math.max(1 - scrollCounter * 0.01, maxOpacitySec);

                // Apply the calculated translations and opacities to the "first" and "sec" classes
                contactTitle.querySelector('.first').style.transform = `translateX(${translateXFirst}px)`;
                contactTitle.querySelector('.sec').style.transform = `translateX(${translateXSec}px)`;
                contactTitle.querySelector('.first').style.opacity = opacityFirst;
                contactTitle.querySelector('.sec').style.opacity = opacitySec;
            }
        }
    } else {
        // The scrolling Y position is not at least 100 pixels above the contact div
        contactTitle.querySelector('.first').style.transform = 'translateX(0)';
        contactTitle.querySelector('.sec').style.transform = 'translateX(0)';
        contactTitle.querySelector('.first').style.opacity = '1';
        contactTitle.querySelector('.sec').style.opacity = '1';

        // Reset the scroll counter to 0
        scrollCounter = 0;
    }

    // Update the previous scrolling Y position
    prevScrollY = scrollY;
});


//background animated

//particlesJS('particles-js',

//    {
//        "particles": {
//            "number": {
//                "value": 80,
//                "density": {
//                    "enable": true,
//                    "value_area": 800
//                }
//            },
//            "color": {
//                "value": "#646364"
//            },
//            "shape": {
//                "type": "circle",
//                "stroke": {
//                    "width": 0,
//                    "color": "#918e8e"
//                },
//                "polygon": {
//                    "nb_sides": 5
//                },
//                "image": {
//                    "src": "img/github.svg",
//                    "width": 100,
//                    "height": 100
//                }
//            },
//            "opacity": {
//                "value": 0.5,
//                "random": false,
//                "anim": {
//                    "enable": false,
//                    "speed": 1,
//                    "opacity_min": 0.1,
//                    "sync": false
//                }
//            },
//            "size": {
//                "value": 5,
//                "random": true,
//                "anim": {
//                    "enable": false,
//                    "speed": 40,
//                    "size_min": 0.1,
//                    "sync": false
//                }
//            },
//            "line_linked": {
//                "enable": true,
//                "distance": 150,
//                "color": "#918e8e",
//                "opacity": 0.4,
//                "width": 1
//            },
//            "move": {
//                "enable": true,
//                "speed": 3,
//                "direction": "none",
//                "random": false,
//                "straight": false,
//                "out_mode": "out",
//                "attract": {
//                    "enable": false,
//                    "rotateX": 600,
//                    "rotateY": 1200
//                }
//            }
//        },
//        "interactivity": {
//            "detect_on": "canvas",
//            "events": {
//                "onhover": {
//                    "enable": true,
//                    "mode": "repulse"
//                },
//                "onclick": {
//                    "enable": true,
//                    "mode": "push"
//                },
//                "resize": true
//            },
//            "modes": {
//                "grab": {
//                    "distance": 400,
//                    "line_linked": {
//                        "opacity": 1
//                    }
//                },
//                "bubble": {
//                    "distance": 400,
//                    "size": 40,
//                    "duration": 2,
//                    "opacity": 8,
//                    "speed": 3
//                },
//                "repulse": {
//                    "distance": 200
//                },
//                "push": {
//                    "particles_nb": 4
//                },
//                "remove": {
//                    "particles_nb": 2
//                }
//            }
//        },
//        "retina_detect": true,
//        "config_demo": {
//            "hide_card": false,
//            "background_color": "#b61924",
//            "background_image": "",
//            "background_position": "50% 50%",
//            "background_repeat": "no-repeat",
//            "background_size": "cover"
//        }
//    }

//);


//hover on svg icons
let cards = document.querySelectorAll('#services .card');
let svgHover = document.querySelectorAll('#services .svg-hover');
// Initially hide all svgHover
svgHover.forEach((element) => {
    element.style.display = 'none';
});
cards.forEach((card) => {
    let svgHover = card.querySelector('.svg-hover');
    let svg = card.querySelector('.svg');

    card.addEventListener('mouseover', () => {
        svgHover.style.display = 'block';
        svg.style.display = 'none';
    });

    card.addEventListener('mouseout', () => {
        svgHover.style.display = 'none';
        svg.style.display = 'block';
    });
});

// Get all the buttons
const buttons = document.querySelectorAll('.btns button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active-btn'));
        // Add active class to the clicked button
        button.classList.add('active-btn');
    });
});


// Add an event listener to each button
document.querySelectorAll('.btns button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.getAttribute('id'); // Get the id of the clicked button
        const projects = document.querySelectorAll('.project'); // Get all project elements
        //Add new classes to row
        if (window.innerWidth > 767) {
            const row = document.querySelector('#portfolio .projects .row');

            if (buttonId == 'shaw-all') {
                row.classList.remove('row-cols-2', 'justify-content-center');
                row.classList.add('row-cols-1', 'row-cols-md-2');
            } else {
                row.classList.add('row-cols-2', 'justify-content-center');
                row.classList.remove('row-cols-1', 'row-cols-md-2');
            }
        } else {

            const row = document.querySelector('#portfolio .projects .row');

            if (buttonId == 'shaw-all') {
                row.classList.remove('row-cols-2', 'justify-content-center');
                row.classList.add('row-cols-1');
            } else {
                row.classList.add('row-cols-1');
                row.classList.remove('row-cols-2');
            }
        }


        // Iterate over each project and toggle their visibility based on the button clicked
        projects.forEach(project => {
            const projectDisplay = getComputedStyle(project).display;

            if (buttonId === 'show-all') {
                project.style.display = 'block'; // Show all projects
            } else if (project.classList.contains(buttonId)) {
                if (projectDisplay === 'none') {
                    project.style.display = 'block'; // Show the projects with matching class
                } else {
                    project.style.display = 'none'; // Hide the projects with matching class
                    setTimeout(() => {
                        project.style.display = 'block'; // Show the projects with matching class
                    }, 0);
                }
            } else {
                project.style.display = 'none'; // Hide the projects without matching class
            }
        });

        // Toggle the active class on the clicked button
        document.querySelector('.btns .active-btn').classList.remove('active-btn');
        button.classList.add('active-btn');
    });
});

// Set the initial display for each project
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    if (project.classList.contains('e-commerce')) {
        project.style.display = 'block';
    } else {
        project.style.display = 'none';
    }
});
//on submit form
let form = document.querySelector('#contact form');
let sendingDiv = document.querySelector('#contact #sending'); // Assuming the div has the class 'sending'

form.addEventListener('submit', (e) => {
    // Prevent default
    e.preventDefault();
    // Script URL
    let scriptURL = 'https://script.google.com/macros/s/AKfycbwWTNKmx17KuuBrhRM20aPgGmzwSPkmfEiCdSc4wMrwNIsjLkHLxOBDzoln-UOHu0vh/exec';

    // Set opacity of sending div to 1
    sendingDiv.style.opacity = 1;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Set opacity of output_message div to 1
            document.querySelector('#contact  #message-sent').style.opacity = 1;
            // Reset form
            form.reset();
            // After 4 seconds, set opacity of output_message div to 0
            setTimeout(() => {
                document.querySelector('#contact #message-sent').style.opacity = 0;
            }, 4000);
            // Reset opacity of sending div to 0
            sendingDiv.style.opacity = 0;
        })
        .catch(error => console.error('Error!', error.message));
});