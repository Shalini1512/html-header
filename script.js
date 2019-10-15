console.log('click');
const navSlide = () => {
    const hamburger = document.querySelector('#hamburger-menu');
    const icon = document.querySelector('.fa-bars');
    const nav = document.querySelector('ul');
    
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-arrow-right');
        console.log('click');
    });
}

navSlide();