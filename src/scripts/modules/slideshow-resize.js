const countImageSize = (imageNode, slideshowId) => {
    const backgroundImageHeight = 1633;
    const backgroundImageWidth = 2449;
    const slideshowDiv = document.getElementById(slideshowId);
    console.log(imageNode);
    console.log(slideshowDiv);
    if (
        slideshowDiv.offsetWidth / slideshowDiv.offsetHeight <
        backgroundImageWidth / backgroundImageHeight
    ) {
        imageNode.style.height = `${slideshowDiv.offsetHeight}px`;
        imageNode.style.width = `${slideshowDiv.offsetHeight * (backgroundImageWidth / backgroundImageHeight)}px`;
    } else {
        imageNode.style.width = `${slideshowDiv.offsetWidth}px`;
        imageNode.style.height = `${slideshowDiv.offsetWidth / (backgroundImageWidth / backgroundImageHeight)}px`;
    }
};

const resizeImages = () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 768) {
        countImageSize(document.querySelector('.js-image-1 .js-photo'), 'js-tom-section');
        countImageSize(document.querySelector('.js-image-2 .js-photo'), 'js-tom-section');
        countImageSize(document.querySelector('.js-image-3 .js-photo'), 'js-tom-section');
    }
};

window.addEventListener('resize', resizeImages);
window.addEventListener('load', resizeImages);
