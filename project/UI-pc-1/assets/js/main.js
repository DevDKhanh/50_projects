const S = document.querySelector.bind(document);
const SS = document.querySelectorAll.bind(document);

const processItem = SS('.working-process__content-link');
const processText = SS('.working-process__content-text');

processItem.forEach((element,index) => {
    element.onclick = function() {
        if (element.matches('.active')) {
            element.classList.remove('active');
            processText[index].classList.remove('active')
        }
        else {
            if(S('.working-process__content-link.active')) {
                S('.working-process__content-link.active').classList.remove('active');
                S('.working-process__content-text.active').classList.remove('active');
            }
            element.classList.add('active')
            processText[index].classList.add('active')
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoWidth: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
})