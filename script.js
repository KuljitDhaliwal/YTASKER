document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('load', () => {
        document.getElementById('loader').style.display = 'none';
    })
})



const navLinks = document.querySelectorAll('.nav-link');
const pathName = window.location.pathname;

console.log('chaeck' , window.location.origin, 'pathName', pathName)

if (pathName === '/') {
    navLinks.forEach(element => {
        console.log('element', element.href)
        if (element.href === window.location.origin + '/') {
            element.classList.add('active');
        }
    });
} else {
    navLinks.forEach(element => {
        if (element.href.includes(pathName)) {
            element.classList.add('active');
        }
    });
}

    

const sidebar = document.getElementById('sidebar');
const openCloseBtn = document.querySelector('#close');


    openCloseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        document.querySelector('.bars').classList.toggle('active');
    })


document.addEventListener('click', (e) => {
    console.log(e.target.id)
        if (e.target.id !== 'sidebar' && e.target.id !== 'close') {
            sidebar.classList.remove('active');
            document.querySelector('.bars').classList.remove('active');
        }
    })

let projectsValue = document.querySelectorAll('.num');
let interval = 5000;
projectsValue.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        document.getElementById('sidebar').classList.remove('active');
        document.querySelector('.bars').classList.remove('active');
    }
})






const servicesList = document.querySelectorAll('.services ul li');
servicesList.forEach((service) => {
    service.addEventListener('click',function() {
        var childDiv = service.querySelector("div");
        servicesList.forEach((item) => {
            if (item.id !== childDiv.id) {
                item.classList.remove('show')
            }
        })
        if (service.id === childDiv.id) {
            service.classList.toggle('show')
        }
    })
})


 // use a script tag or an external JS file
//  document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(ScrollTrigger)
//      // gsap code here!
//      var tm1 = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#hero-animation",
//             start: "top top",
//             end: "+=800",
//             scrub: 0.2,
//             preventOverlaps: "preventOverlaps",
//             fastScrollEnd: "fastScrollEnd"
//         }
//      }) 
//      tm1.to(".hero-animation-pic-one", {
//         top: "-100%",
//         duration: "1.8"
//     }, "tm1")
//      tm1.to(".hero-animation-pic-two", {
//         bottom: "-100%",
//         duration: "1.8"
//     }, "tm1")
//      tm1.to(".hero-animation-pic-three", {
//         top: "-100%",
//         duration: "1.8"
//     }, "tm1")
//      tm1.to(".hero-animation-pic-four", {
//         bottom: "-100%",
//         duration: "1.8"
//     }, "tm1")
//    });