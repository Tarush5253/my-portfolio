// navbar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('#header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offSetTop - 150;
        let height = sec.height;
        let id = sec.getAttribute('id');

        if (top >= offSet && top < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('#header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    // sticky navbar
    let header = document.querySelector('#header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.skills-container,.project-box , .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, #about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, #about-content', { origin: 'right' });



//    var typed = new Typed('.multiple-text', {
//      strings: ['Frontend Developer.', 'Youtuber.' , 'Blogger.'],
//      typeSpeed: 100,
//      backSpeed:100,
//      backDelay:1000,
//      loop:true
//    });
// let num = document.getElementById("num1ber");
// let count = 0;
// setInterval(() => {
//     if (count == 95) {
//         clearInterval();
//     } else {
//         count++;
//         num.innerHTML = count + "%";
//     }
// }, 33);
// let num_2 = document.getElementById("num2ber");
// let count_2 = 0;
// setInterval(() => {
//     if (count_2 == 85) {
//         clearInterval();
//     } else {
//         count_2++;
//         num_2.innerHTML = count_2 + "%";
//     }

// }, 35);
// let num_3 = document.getElementById("num3ber");
// let count_3 = 0;
// setInterval(() => {
//     if (count_3 == 75) {
//         clearInterval();
//     } else {
//         count_3++;
//         num_3.innerHTML = count_3 + "%";
//     }

// }, 40);
// let num_4 = document.getElementById("num4ber");
// let count_4 = 0;
// setInterval(() => {
//     if (count_4 == 80) {
//         clearInterval();
//     } else {
//         count_4++;
//         num_4.innerHTML = count_4 + "%";
//     }

// }, 34);