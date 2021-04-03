window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('nav');

    hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false)

    window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive'); };
});

//javascript for nav - hamburger menu
window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

    window.onresize = () => { if (window.innerwidth > 760) mainnav.classList.remove('responsive'); };
});