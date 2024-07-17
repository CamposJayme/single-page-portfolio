// Soft scroll function:
const contactBtn = document.querySelectorAll('a[href^="#contact"]');

function softScroll(event) {
    event.preventDefault();
    const hrefBtn = event.currentTarget.getAttribute('href');
    const contactSection = document.querySelector(hrefBtn);

    contactSection.scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });

}

contactBtn.forEach((botao) => {
    botao.addEventListener('click', softScroll);
});

// Scroll to top:
const topBtn = document.querySelector('.footer-container a[href^="#"]');

function scrollTop(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

topBtn.addEventListener('click', scrollTop);