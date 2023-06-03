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


//nav section activation
// Get all the <li> elements inside the navbar
const navbarItems = document.querySelectorAll('.navbar-nav li');

// Function to handle scroll event
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const header = document.querySelector('header');

    // Check if the scroll position is within the header section
    if (scrollPosition >= header.offsetTop && scrollPosition < header.offsetTop + header.offsetHeight) {
        // Set the active state for the li element with href="#intro"
        navbarItems.forEach((item) => {
            const href = item.querySelector('a').getAttribute('href');
            if (href === '#intro') {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
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

            // Check if the section is visible in the viewport with an additional offset of 20 pixels
            if (
                section.offsetTop - 150 < scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
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




// Add event listener for scroll
window.addEventListener('scroll', handleScroll);


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

/*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

document.getElementById("sendBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    console.log(body);
    Email.send({
        SecureToken: "0ce86975-736e-4f35-8252-58570a20b751",
        To: 'mohamedaboukaram39@gmail.com',
        From: email,
        Subject: "This is the subject",
        Body: body
    }).then(
        message => alert(message)
    );
});

//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;
//    var message = document.getElementById("message").value;

//    // Create the data object to send in the request body
//    var data = {
//        name: name,
//        email: email,
//        message: message
//    };

//    // Create a new AJAX request
//    var xhr = new XMLHttpRequest();
//    xhr.open("POST", "/send-email", true);
//    xhr.setRequestHeader("Content-Type", "application/json");

//    xhr.onreadystatechange = function() {
//        if (xhr.readyState === 4 && xhr.status === 200) {
//            var response = JSON.parse(xhr.responseText);
//            var outputMessage = document.querySelector(".output_message");
//            outputMessage.textContent = response.message;
//        }
//    };

//    // Convert the data object to JSON and send the request
//    xhr.send(JSON.stringify(data));
//});