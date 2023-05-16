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
//nav section activation
window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    const lis = document.querySelectorAll('ul li');

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
    } else if (window.scrollY > 1633 && window.scrollY <= 1634) {
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

// else {
// window.scrollY > 2001 && window.scrollY <= 2400
// lis[3].classList.add('active');
// lis[2].classList.remove("active");
// lis[1].classList.remove("active");
// lis[0].classList.remove("active");
//}; );

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#646364"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#918e8e"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#918e8e",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);
//hover on svg icons
let cards = document.querySelectorAll('.card');
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