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
let descriptionItem = `I am a civil engineer working in my profession in office tasks.   However, after graduating, I became interested in the world of programming, so I continued my studies as a full stack web developer at CoderHouse. Currently, I have finished the HTML, CSS, Javascript, React Js, React Native and Backend courses and I am studying at Oracle Next Education, XAcademy and No Country. Until I can finish my courses, my goal is to be able to work as a Full stack developer from now on. I 've an intermediate level of English.`
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

const resumeButton = document.getElementById('resume');

resumeButton.addEventListener('click', function () {
    const filePath = './public/assets/certificates/CV - Gustavo Torres (English).pdf'; // Reemplaza con la ruta correcta

    const link = document.createElement('a');
    link.href = filePath;

    link.setAttribute('download', 'CV - Gustavo Torres.pdf'); // Cambia el nombre del archivo según tus necesidades

    link.click();
});


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
            <ul>
                <li>React Native</li>
            </ul>
        </div>
        <div class="about__description--text">
            <h2>Backend Development</h2>
            <h3>Coderhouse</h3>
            <ul>
                <li>Express Js</li>
                <li>Node Js</li>
                <li>MongoDB</li>
            </ul>
        </div>
        <div class="about__description--text">
            <h2>No Country</h2>
            <h3>Experience in a project simulation</h3>
            <ul>
                <li> React Js </li> 
            </ul>
        </div>
       
        <div class="about__description--text">
            <h2>XAcademy - Santex</h2>
            <ul>
                <li>Angular</li>
                <li>Node Js</li>
            </ul>
        </div>
        <div class="about__description--text">
            <h2>Oracle Next Education</h2>
            <ul>
                <li>Java - Spring Boot</li>

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
            for (let j = 1; j <= 3; j++) {
                date[j].classList.remove('active')
            }
            aboutMeDescription.innerHTML = ''
        }

    })
}
let timeline

/* SKILLS */


let technologies = [

    {
        name: "HTML",
        level: 3,
        icon: "html5.svg",
        category: "basic"
    }, {
        name: "CSS",
        level: 3,
        icon: "css3-alt.svg",
        category: "basic"
    }, {
        name: "Javascript",
        level: 3,
        icon: "square-js.svg",
        category: "basic"
    }, {
        name: ".NET",
        level: 1,
        icon: "dotnet.svg",
        category: "basic"
    }, {
        name: "Ruby",
        level: 1,
        icon: "ruby.svg",
        category: "basic"
    },
    {
        name: "Typescript",
        level: 1,
        icon: "typescript.svg",
        category: "basic"
    },
    {
        name: "Python",
        level: 1,
        icon: "python.svg",
        category: "basic"
    }, {
        name: "C#",
        level: 1,
        icon: "c-sharp.svg",
        category: "basic"
    }, {
        name: "React Js",
        level: 3,
        icon: "react.svg",
        category: "frontend"
    },
    {
        name: "Angular",
        level: 1,
        icon: "angular.svg",
        category: "frontend"
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
    },
    {
        name: "MySQL",
        level: 2,
        icon: "",
        category: "backend"
    },
    {
        name: "Java",
        level: 2,
        icon: "",
        category: "backend"
    },

    {
        name: "React Native",
        level: 3,
        icon: "react.svg",
        category: "mobile"
    }
]
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
        icon: "bootstrap-plain.svg"
    }, {
        name: "Firebase",
        icon: "firebase-icon.svg"
    }, {
        name: "Redux",
        icon: "redux-original.svg"
    },
    {
        name: "SQLite",
        icon: "sqlite.svg"
    }, {
        name: "Figma",
        icon: "figma-original.svg"
    }, {
        name: "GraphQL",
        icon: "graphql.svg"
    }, {
        name: "Handlebars",
        icon: "handlebars-original-wordmark.svg"
    }, {
        name: "Material UI",
        icon: "materialui-original.svg"
    }, {
        name: "Nginx",
        icon: "nginx-original.svg"
    }, {
        name: "NPM",
        icon: "npm.svg"
    }, {
        name: "Sequelize",
        icon: "sequelize.svg"
    }, {
        name: "Tailwind",
        icon: "tailwind.svg"
    }, {
        name: "Trello",
        icon: "trello.svg"
    }, {
        name: "VSCode",
        icon: "vscode.svg"
    }
]

let technologiesCategory = ["basic", "frontend", "backend", "mobile"]

let recommendations = [{
        name: "Pablo Aquino",
        title: "Frontend Developer Jr. | Javascript | React Js",
        relation: "colleague at No Country",
        message: "Con Gustavo formamos parte en un proyecto de emulación laboral de NoCountry, desarrollando un sitio web, encargándonos del área de Frontend. Desde un principio estuvo comprometido con su trabajo y siempre dispuesto a ayudar. Cuenta con sólidos conocimientos y experiencia. Demostró ser una persona resolutiva, contribuyendo siempre con ideas para alcanzar los objetivos del proyecto. Fue un placer haber formado parte del mismo equipo."
    },
    {
        name: "Natalia Potaves",
        title: "Full Stack Developer | Java | Spring Boot | SQL | Laravel | Angular",
        relation: "colleague at No Country",
        message: "Trabaje con Gustavo en el desarrollo de un proyecto en No Country.Es un profesional muy responsable, comprometido y con amplio conocimiento en el Desarrollo Front - End.Además de contar con una gran predisposición, siempre ayudar a los compañeros, ser colaborativo, empático y siempre contribuir al equipo para cumplir las metas y objetivos del proyecto."
    },
    {
        name: "Sofía Allegretti",
        title: "UX UI Designer",
        relation: "colleague at No Country",
        message: "Trabajé con Gustavo dentro de un equipo de diseño y desarrollo Web. Es un profesional comprometido y responsable, siempre estuvo dispuesto a escuchar las necesidades del quipo y a solucionar los problemas que iban surgiendo. Es una persona empática, educada y resolutiva, con conocimientos solidos de su área."
    },

]

function fillBars() {
    const fillElements = document.getElementsByClassName("fill");
    for (let i = 0; i < technologies.length; i++) {
        fillElements[i].style.width = technologies[i].level * 33.33 + "%";
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
                <img class="polygon--img" src="./public/assets/icons/${skills[i].icon}" alt="${skills[i].icon}"/>
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

softSkillsButton.addEventListener('click', () => {
    if (pestaniaActiva !== softSkillsButton.ADDITIONAL) {
        pestaniaActiva = softSkillsButton.ADDITIONAL
        softSkillsButton.classList.add('active')
        additionalButton.classList.remove('active')
        technologiesButton.classList.remove('active')
        skillsMenuContainer.style.height = '300px'
        skillsMenuContainer.innerHTML = ""
        setTimeout(() => {
            for (let i = 0; i < recommendations.length; i++) {
                skillsMenuContainer.innerHTML += `
        <div class="recommendation__card--container" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <div class="recommendation__card--item">
                <h2>${recommendations[i].name}</h2>
                <h3>(${recommendations[i].title})</h3>
                <h4>${recommendations[i].relation}</h4>
                <p>${recommendations[i].message}</p>
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
    }, {
        name: "Full Stack Developer",
        entity: "CoderHouse",
        year: 2023,
        img: "Programacion Full Stack.png"
    }, {
        name: "Back End Java",
        entity: "Oracle",
        year: 2023,
        img: "dev en formacion.jpg"
    }, {
        name: "English Level (C1)",
        entity: "EF SET",
        year: 2023,
        img: "EF SET Certificate.jpg"
    }, {
        name: "Java JRE & JDK",
        entity: "Oracle",
        year: 2023,
        img: "Java JRE y JDK.jpg"
    }, {
        name: "Java Orientado a Objetos",
        entity: "Oracle",
        year: 2023,
        img: "Java Orientado a Objetos.jpg"
    }, {
        name: "Civil Engineer",
        entity: "Facultad de Ciencias Exactas, Físicas y Naturales",
        year: 2021,
        img: "ingenieria civil.png"
    }
]

function createCard(name, entity, year, img, description) {
    let card = `

    <div class="card-container" data-aos="zoom-in">
        <div class="card-img-container">
            <img class="card-img" src="./public/assets/certificates/${img}" alt="${name}"/>
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
            <img class="modal-img" src="./public/assets/certificates/${img}" alt="modal-img"/>
            `
        })
    }
}


let certificatesContainer = document.getElementById('certificates-container')
certificates.forEach(item => {
    certificatesContainer.innerHTML += createCard(item.name, item.entity, item.year, item.img, item.description)
})
showModal();

const certificatesPerPage = 3; // Number of certificates per page
let currentPage = 1; // Current page

function displayCertificates(page) {
    const startIndex = (page - 1) * certificatesPerPage;
    const endIndex = startIndex + certificatesPerPage;
    const certificatesToDisplay = certificates.slice(startIndex, endIndex);

    const certificatesContainer = document.getElementById('certificates-container');
    certificatesContainer.innerHTML = '';

    certificatesToDisplay.forEach(item => {
        certificatesContainer.innerHTML += createCard(item.name, item.entity, item.year, item.img, item.description);
    });
}

// Function to handle pagination button clicks
function handlePaginationClick(event) {
    if (event.target.id === 'prev-page' && currentPage > 1) {
        currentPage--;
    } else if (event.target.id === 'next-page' && currentPage < Math.ceil(certificates.length / certificatesPerPage)) {
        currentPage++;
    }

    displayCertificates(currentPage);
}

// Add event listeners for pagination buttons
document.getElementById('prev-page').addEventListener('click', handlePaginationClick);
document.getElementById('next-page').addEventListener('click', handlePaginationClick);

// Initial display of certificates
displayCertificates(currentPage);

/* PORTFOLIO */

let websites = [{
        name: "Argumento Restaurante",
        img: "Argumento.png",
        link: "https://coderback.web.app/",
        repo: "https://github.com/betogus/argumentoBar",
        description: "HTML / CSS / Javascript"
    },
    {
        name: "Jam Glass - Jazz Band",
        img: "Jam Glass.png",
        link: "https://betogus.github.io/coderHouse/",
        repo: "https://github.com/betogus/coderHouse",
        description: "HTML / CSS"
    }, {
        name: "Re House",
        img: "rehouse.png",
        link: "https://rehouseweb.onrender.com/",
        repo: "https://github.com/No-Country/c12-g21-m-java-react",
        description: "React Js / Java - Spring Boot"
    }, {
        name: "Llanten Almacen",
        img: "Llanten almacen.png",
        link: "https://betogus.github.io/llantenAlmacen/",
        repo: "https://github.com/betogus/llantenAlmacen",
        description: "HTML / CSS / Javascript"
    }, {
        name: "Renova Tu Vestidor",
        img: "renovatuvestidor.png",
        link: "",
        repo: "https://github.com/betogus/renovaTuVestidor/",
        description: "React Js"
    }, {
        name: "Backend - Coderhouse",
        img: "backend.png",
        link: "",
        repo: "https://github.com/betogus/Backend-Coderhouse",
        description: "Node Js / Express"
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
        <img src="./public/assets/img/${websites[i].img}" class="d-block w-100 carousel-img" alt="${websites[i].img}">
        <div class="carousel-img-effect"></div>
        
        <div class="carousel-buttons"></div>
        <div class="carousel-caption d-none d-md-block">
            <h5 class="carousel-text">${websites[i].name}</h5>
            <p class="carousel-text">${websites[i].description}</p>
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