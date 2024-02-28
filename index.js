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

let buttonFlag = false
const content = document.querySelector('.brands__list');
const button = document.querySelector('.read-more');
button.addEventListener('click', function () {
    buttonFlag = !buttonFlag
    content.classList.toggle('content-height--l');
    button.textContent = buttonFlag ? 'Скрыть' : 'Показать все'
    button.classList.toggle('read-more--click');
})