const productContainers = [...document.querySelectorAll('.testimonials')];
const nxtBtn = [...document.querySelectorAll('.seta_d')];
const preBtn = [...document.querySelectorAll('.seta_e')];


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    let index = 0;
    let dots = document.querySelectorAll('.dots');

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += (containerWidth - 370);
        dots[index].classList.remove('active');
        index = (index + 1) % dots.length;
        dots[index].classList.add('active');
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= (containerWidth - 370);
        dots[index].classList.remove('active');
        index = (index - 1 + dots.length) % dots.length;
        dots[index].classList.add('active');
    })
})