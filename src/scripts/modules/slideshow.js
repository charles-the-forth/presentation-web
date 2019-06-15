window.addEventListener('load', () => {
    imagesSlideshow('#js-eva-section .slideshow .image-container');
    setTimeout(() => imagesSlideshow('#js-tom-section .slideshow .image-container'), 1000);
});

const imagesSlideshow = selector => {
    const slideshowImages = document.querySelectorAll(selector);
    let index = 0;
    setInterval(() => {
        slideshowImages[index].classList.add('hidden');
        index++;
        if (index === slideshowImages.length) {
            index = 0;
        }
        slideshowImages[index].classList.remove('hidden');
    }, 5000);
};