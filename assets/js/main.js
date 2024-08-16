let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = function() {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    navbar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// ======= scroll reveal =====//

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    reset: true,
    delay: 400,
}); 

sr.reveal(`.home-img`, {origin: 'right'})
sr.reveal(`.timeline-dot, .timeline-item`, {origin: 'top',
duration: 1500, distance: '40px', interval: 150, reset: true})
sr.reveal(`.home-content, .input-group`, {origin: 'left', duration: 2500})
sr.reveal(`.span-content, .input-group-2`, {origin: 'right', duration: 2500})
sr.reveal(`.timeline-items`, {origin: 'top', duration: 2000})
sr.reveal(`.project-span`, {origin: 'top', duration: 1800, interval: 200, reset: true, distance: '40px'})