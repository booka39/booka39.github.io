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
window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    const lis = document.querySelectorAll('nav ul li');

    if (window.scrollY <= 1005) {
        lis[0].classList.add('active');
        lis[1].classList.remove('active');
        lis[2].classList.remove('active');
        lis[3].classList.remove('active');
    } else if (window.scrollY > 1005 && window.scrollY <= 1633) {
        lis[1].classList.add('active');
        lis[0].classList.remove('active');
        lis[2].classList.remove('active');
        lis[3].classList.remove('active');
    } else if (window.scrollY > 1633 && window.scrollY <= 2116) {
        lis[2].classList.add('active');
        lis[0].classList.remove('active');
        lis[1].classList.remove('active');
        lis[3].classList.remove('active');
    } else {
        lis[3].classList.add('active');
        lis[0].classList.remove('active');
        lis[1].classList.remove('active');
        lis[2].classList.remove('active');
    }
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
            if (buttonId === 'show-all') {
                project.style.display = 'block'; // Show all projects
            } else if (project.classList.contains(buttonId)) {
                project.style.display = 'block'; // Show the projects with matching class
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