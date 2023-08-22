/* HEADER */
//al scrollear desaparece el header

let nav = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('nav-transition');
        nav.classList.remove('ocultar')

    } else {
        nav.classList.remove('nav-transition');
        nav.classList.add('ocultar')

    }
});




//al scrollear se van mostrando como activos el nav-link y el circle que corresponda a la seccion
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");
    var circle = document.querySelectorAll('.menu__circle--item');

    function removeActiveClass() {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active')
            circle[i].classList.remove('active')
        }

    }

    function setActiveLink() {
        var currentSection = "";
        var currentPosition = window.pageYOffset;

        // Iterar sobre las secciones para encontrar la sección actual
        document.querySelectorAll("section").forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            let sectionName = document.getElementById('section-name')

            if (currentPosition >= sectionTop - 50 && currentPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
                sectionName.innerText = `${currentSection.toUpperCase()}`
            }
        });

        // Agregar la clase "active" al enlace correspondiente a la sección actual
        for (let i = 0; i < navLinks.length; i++) {
            if (navLinks[i].getAttribute("href") === "#" + currentSection) {
                navLinks[i].classList.add("active");
                circle[i].classList.add('active')
            } else {
                navLinks[i].classList.remove("active");
                circle[i].classList.remove('active')
            }
        }
    }

    // Listener para el evento de desplazamiento de la página
    window.addEventListener("scroll", function () {
        removeActiveClass();
        setActiveLink();
    });

    // Listener para el evento de carga inicial de la página
    window.addEventListener("load", function () {
        setActiveLink();
    });

});

const sections = document.querySelectorAll('section');
const section = document.getElementById('certificates')
let currentSectionIndex = 0;

window.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        }
    } else if (e.deltaY < 0) {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
        }
    }

    sections[currentSectionIndex].scrollIntoView({
        behavior: 'smooth'
    });
}, {
    passive: false
});

/* HOME */

let homeDescriptionItem = document.getElementById('home__description--item')
let descriptionItem = `I am a civil engineer working in my profession in office tasks.   However, after graduating, I became interested in the world of programming, so I continued my studies as a full stack web developer at CoderHouse. Currently, I have finished the HTML, CSS, Javascript, React Js, React Native and Backend courses and I am studying at Oracle Next Education, XAcademy and "Instituto Superior Politécnico de Córdoba ". Until I can finish my courses, my goal is to be able to work as a Frontend developer from now on. I 've an intermediate level of English.`
const cursor = document.getElementById('cursor');

//Efecto de tipeo en la descripción
function simulateTyping(text, index = 0) {
    const delay = 30; // Retraso entre caracteres en milisegundos

    if (index < text.length) {
        homeDescriptionItem.innerHTML = text.substring(0, index + 1) + `<span id="cursor" class="cursor"></span>`;
        homeDescriptionItem.innerHTML += `<span id="cursor" class="cursor"></span>`
        index++;
        setTimeout(() => {
            simulateTyping(text, index);
        }, delay);
    } else {
        /* cursor.style.display = 'none'; */
    }
}
setTimeout(() => {
    simulateTyping(descriptionItem);
}, 1000)


/* ABOUT ME */

let dateContainer = []
let date = []
let aboutMeDescription = document.getElementById('about__description')
let dateDescription = [
    `
    <div class="about__description--container" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <div class="about__description--text">
            <h2>Argentina Programa</h2>
            <h3>First Level</h3>
            <p>Languages learned:</p>
            <ul>
                <li>Ruby (basic)</li>
                <li>Javascript</li>
            </ul>
        </div>
        <div class="about__description--text">
            <h2>Conosur Tech</h2>
            <h3>"Curso introductorio de Internet, la Web y la Programación"</h3>
        </div>
        <div class="about__description--text">
            <h2>Soy Dalto</h2>
            <h3>Autodidact</h3>
            <p>Languages learned:<p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
            </ul>
        </div>
    </div>
`,
    `   
    <div class="about__description--container" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <div class="about__description--text">
            <h2>Web Development</h2>
            <h3>Coderhouse</h3>
            <p>Languages learned: </p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>
         <div class="about__description--text">
            <h2>Javascript</h2>
            <h3>Coderhouse</h3>
        </div>
        <div class="about__description--text">
            <h2>React JS</h2>
            <h3>Coderhouse</h3>
        </div>
    </div>

`,
    `
    <div class="about__description--container" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <div class="about__description--text">
            <h2>App Development</h2>
            <h3>Coderhouse</h3>
            <p>technology learned: </p>
            <ul>
                <li>React Native</li>
            </ul>
        </div>
        <div class="about__description--text">
            <h2>Backend Development</h2>
            <h3>Coderhouse</h3>
            <p>technology learned: </p>
            <ul>
                <li>Express Js</li>
                <li>Node Js</li>
                <li>MongoDB</li>
            </ul>
        </div>
        <div class="about__description--text">
            <h2>"Desarrollo Web y Aplicaciones Digitales"</h2>
            <h3>Instituto Superior Politécnico de Córdoba</h3>
        </div>
        <div class="about__description--text">
            <h2>"XAcademy - Santex"</h2>
            <p>technology learned: </p>
            <ul>
                <li>Angular</li>
            </ul>
        </div>
        <div class="about__description--text">
            <h2>Oracle Next Education</h2>
            <p>technology learned:</p>
            <ul>
                <li>React Js</li>
            </ul>
        </div>
    </div>
    `
]
let dateContainerButtonActive = [null, false, false, false]
for (let i = 1; i <= 3; i++) {
    dateContainer[i] = document.getElementById(`date${i}--container`)
    date[i] = document.getElementById(`date${i}`)
    dateContainer[i].addEventListener('click', (e) => {
        if (!aboutMeDescription.classList.contains('active')) {
            dateContainerButtonActive[i] = true
            date[i].classList.add('active')
            aboutMeDescription.classList.add('active')
            aboutMeDescription.innerHTML = dateDescription[i - 1]
        } else if (dateContainerButtonActive[i] === false) {
            aboutMeDescription.innerHTML = dateDescription[i - 1]
            dateContainerButtonActive = [null, false, false, false]
            for (let j = 1; j <= 3; j++) {
                date[j].classList.remove('active')
            }
            date[i].classList.add('active')
            dateContainerButtonActive[i] = true
        } else {
            dateContainerButtonActive[i] = false
            aboutMeDescription.classList.remove('active')
            for (let j = 1 ; j <=3; j++) {
                date[j].classList.remove('active')
            }
            aboutMeDescription.innerHTML = ''
        }

    })
}
let timeline

/* SKILLS */


let technologies = [{
    name: "HTML",
    level: 3,
    icon: "html5.svg",
    category: "frontend"
}, {
    name: "CSS",
    level: 3,
    icon: "css3-alt.svg",
    category: "frontend"
}, {
    name: "Javascript",
    level: 3,
    icon: "square-js.svg",
    category: "frontend"
}, {
    name: "React Js",
    level: 3,
    icon: "react.svg",
    category: "frontend"
}, {
    name: "React Native",
    level: 3,
    icon: "react.svg",
    category: "mobile"
}, {
    name: "Express Js",
    level: 3,
    icon: "",
    category: "backend"
}, {
    name: "Node Js",
    level: 3,
    icon: "node.svg",
    category: "backend"
}, {
    name: "Mongo DB",
    level: 3,
    icon: "",
    category: "backend"
}, {
    name: "Python",
    level: 1,
    icon: "python.svg",
    category: "backend"
}, {
    name: "C#",
    level: 1,
    icon: "c-sharp.svg",
    category: "backend"
}, {
    name: ".NET",
    level: 1,
    icon: "dotnet.svg",
    category: "backend"
}, {
    name: "Ruby",
    level: 1,
    icon: "ruby.svg",
    category: "backend"
}, {
    name: "Typescript",
    level: 1,
    icon: "typescript.svg",
    category: "frontend"
}, {
    name: "Angular",
    level: 1,
    icon: "angular.svg",
    category: "frontend"
}]
let skills = [{
    name: "Git",
    icon: "git-plain.svg"
}, {
    name: "Github",
    icon: "github.svg"
}, {
    name: "Sass",
    icon: "sass-original.svg"
}, {
    name: "Bootstrap",
    icon:"bootstrap-plain.svg"
}, {
    name: "Firebase",
    icon: "firebase-icon.svg"
}, {
    name: "Redux",
    icon: "redux-original.svg"
}]

let technologiesCategory = ["frontend", "backend", "mobile"]

function fillBars() {
    const fillElements = document.getElementsByClassName("fill");
    let width = 0;
    for (let i = 0; i < technologies.length; i++) {
        if (technologies[i].level === 1) {
            width = 25;
        } else if (technologies[i].level === 2) {
            width = 50;
        } else {
            width = 100;
        }
        fillElements[i].style.width = width + "%";
    }

}

let aboutButton = {
    TECHNOLOGIES: Symbol(),
    ADDITIONAL: Symbol(),
    SOFTSKILLS: Symbol(),
    NONE: Symbol()
}

let pestaniaActiva = aboutButton.NONE
let technologiesButton = document.getElementById('skill1')
let additionalButton = document.getElementById('skill2')
let softSkillsButton = document.getElementById('skill3')
let skillsMenuContainer = document.getElementById('skills__menu--container')
technologiesButton.addEventListener('click', () => {
    if (pestaniaActiva !== aboutButton.TECHNOLOGIES) {
        pestaniaActiva = aboutButton.TECHNOLOGIES
        additionalButton.classList.remove('active')
        softSkillsButton.classList.remove('active')
        technologiesButton.classList.add('active')
        skillsMenuContainer.classList.remove("justify-content-between")
        skillsMenuContainer.classList.add('active')
        skillsMenuContainer.style.height = '70vh'
        skillsMenuContainer.innerHTML = ""
        setTimeout(() => {
            for (let i = 0; i < technologiesCategory.length; i++) {
                skillsMenuContainer.innerHTML += `<div class="skills__menu--category"></div>`
            }
            skillsMenuCategory = document.getElementsByClassName(`skills__menu--category`)
            for (let i = 0; i < technologiesCategory.length; i++) {
                 skillsMenuCategory[i].innerHTML += `<h2>${technologiesCategory[i]}</h2>`
                for (let j = 0; j < technologies.length; j++) {
                    if (technologies[j].category === technologiesCategory[i]) {
                        skillsMenuCategory[i].innerHTML += `
                    <div class="skills__menu--item" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <h5>${technologies[j].name}</h5>
                        <div class="bar" >
                            <div class="fill"></div>
                        </div>
                    </div>
                    `
                    }
                }
            }
            setTimeout(() => {
                fillBars()
            }, 500)
        }, 1000)


    } else {
        skillsMenuContainer.classList.remove("active")
        technologiesButton.classList.remove('active')
        skillsMenuContainer.innerHTML = ""
        skillsMenuContainer.style.height = '100px'
    }
})


additionalButton.addEventListener('click', () => {
    if (pestaniaActiva !== aboutButton.ADDITIONAL) {
        pestaniaActiva = aboutButton.ADDITIONAL
        additionalButton.classList.add('active')
        softSkillsButton.classList.remove('active')
        technologiesButton.classList.remove('active')
        skillsMenuContainer.style.height = '300px'
        skillsMenuContainer.innerHTML = ""
        setTimeout(() => {
            for (let i = 0; i < skills.length; i++) {
                skillsMenuContainer.innerHTML += `
        <div class="polygon--container" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div class="polygon--item">
                <img class="polygon--img" src="./assets/icons/${skills[i].icon}" alt="${skills[i].icon}"/>
                <p>${skills[i].name}</p>
            </div>
        </div>
        `
            }
        }, 1000)

    } else {
        skillsMenuContainer.classList.remove("active")
        technologiesButton.classList.remove('active')
        skillsMenuContainer.innerHTML = ""
        skillsMenuContainer.style.height = '100px'
    }
})

/* CERTIFICATES */

let certificates = [{
        name: "Web development",
        entity: "CoderHouse",
        year: 2022,
        img: "Desarrollo Web (ingles).png",

    },
    {
        name: "Javascript",
        entity: "CoderHouse",
        year: 2022,
        img: "Javascript (English).png",
    },
    {
        name: "React JS",
        entity: "CoderHouse",
        year: 2022,
        img: 'React Js (English).png'
    },
    {
        name: "Backend Programming",
        entity: "CoderHouse",
        year: 2023,
        img: "Programacion Backend (English).png"
    },
    {
        name: "Applications development",
        entity: "CoderHouse",
        year: 2023,
        img: "Desarrollo de Aplicaciones (English).png"
    }
]

function createCard(name, entity, year, img, description) {
    let card = `

    <div class="card-container" data-aos="zoom-in">
        <div class="card-img-container">
            <img class="card-img" src="./assets/certificates/${img}" alt="${name}"/>
        </div>
        <div class="card-description-container">
            <h5>${name}</h5>
            <p>${entity} - ${year}</p>
        </div>
        <div class="card-button-container">
            <button type="button" class="btn btn-primary card-button" data-bs-toggle="modal" data-bs-whatever="${img}" data-bs-target="#modalExample">
                Preview
            </div>
        </div>
    </div>
`
    return card
}

function showModal() {
    let modalExample = document.getElementById('modalExample')
    if (modalExample) {
        modalExample.addEventListener('show.bs.modal', e => {
            const button = e.relatedTarget
            const img = button.getAttribute('data-bs-whatever')
            const body = modalExample.querySelector('.modal-body')
            body.innerHTML = `
            <img class="modal-img" src="./assets/certificates/${img}" alt="modal-img"/>
            `
        })
    }
}


let certificatesContainer = document.getElementById('certificates-container')
certificates.forEach(item => {
    certificatesContainer.innerHTML += createCard(item.name, item.entity, item.year, item.img, item.description)
})




/* PORTFOLIO */

let websites = [{
        name: "Argumento Restaurante",
        img: "Argumento.png",
        link: "https://coderback.web.app/",
        repo: "https://github.com/betogus/argumentoBar"
    },
    {
        name: "Jam Glass - Jazz Band",
        img: "Jam Glass.png",
        link: "https://betogus.github.io/coderHouse/",
        repo: "https://github.com/betogus/coderHouse"
    }
]

let portfolioIndicators = document.getElementById('portfolio-indicators')
let portfolioCarousel = document.getElementById('portfolio-carousel')

for (let i = 0; i < websites.length; i++) {
    portfolioIndicators.innerHTML += `
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-current="true" class="${i === 0? "active" : ""}" aria-label="Slide ${i+1}"></button>
    `
    portfolioCarousel.innerHTML += `
    <div class="carousel-item ${i === 0? "active" : ""}">
        <img src="./assets/img/${websites[i].img}" class="d-block w-100 carousel-img" alt="${websites[i].img}">
        <div class="carousel-img-effect"></div>
        
        <div class="carousel-buttons"></div>
        <div class="carousel-caption d-none d-md-block">
            <h5>${websites[i].name}</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </div>
    </div>
    `
}

let carouselItem = document.getElementsByClassName('carousel-item')
let carouselButtons = document.getElementsByClassName('carousel-buttons')
let carouselImgEffect = document.getElementsByClassName('carousel-img-effect')
let buttonContainer = ``
let carouselButtonsItem;

for (let i = 0; i < carouselItem.length; i++) {
    carouselItem[i].addEventListener('mouseenter', (e) => {
        buttonContainer = `
        <div class="carousel-buttons-container">
            <a href="${websites[i].link}" target="_blank" class="carousel-buttons-item" id="carousel-button-demo">See Demo</a>
            <a href="${websites[i].repo}" target="_blank" class="carousel-buttons-item" id="carousel-button-github">See on Github</a>
        </div> `
        carouselButtons[i].innerHTML = buttonContainer
        carouselButtons[i].classList.add("show")
        carouselImgEffect[i].classList.add('show')
        let carouselButtonsItem = document.getElementsByClassName('carousel-buttons-item')

        setTimeout(() => {
            carouselButtons[i].classList.remove("hide")
            carouselImgEffect[i].classList.remove('hide')
        }, 500)


    })






    carouselItem[i].addEventListener('mouseleave', () => {
        carouselButtons[i].classList.add('hide')
        carouselImgEffect[i].classList.add('hide')
        setTimeout(() => {
            carouselButtons[i].innerHTML = ""
            carouselButtons[i].classList.remove("show")
            carouselImgEffect[i].classList.remove('show')
        }, 500)
    })
}