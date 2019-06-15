const resizePhotos = () => {
    const photos = document.querySelectorAll('.image-container .photo');
    const photoHeight = 10;
    const photoWidth = 10;
};

window.addEventListener('load', () => {
    const slideshowImages = document.getElementsByClassName('image-container');
    let index = 0;
    setInterval(() => {
        slideshowImages[index].classList.add('hidden');
        index++;
        if (index === slideshowImages.length) {
            index = 0;
        }
        slideshowImages[index].classList.remove('hidden');
    }, 5000);
});