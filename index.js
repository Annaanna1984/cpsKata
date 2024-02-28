let swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            initialSlide: 0,
            spaceBetween: 0,
            enabled: false
        }
    }
});

const content = document.querySelector('.brands__list');
const button = document.querySelector('.read-more');
button.addEventListener('click', function () {
    const hasClass = content.matches('.content-height--l');
    content.classList.toggle('content-height--l');
    button.textContent = hasClass ? 'Показать всё' : 'Скрыть'
    button.classList.toggle('read-more--click');
})