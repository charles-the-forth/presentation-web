const countImageSize = (imageNode, slideshowNode) => {
    const backgroundImageHeight = 1633;
    const backgroundImageWidth = 2449;
    if (
        slideshowNode.offsetWidth / slideshowNode.offsetHeight <
        backgroundImageWidth / backgroundImageHeight
    ) {
        imageNode.style.height = `${slideshowNode.offsetHeight}px`;
        imageNode.style.width = `${slideshowNode.offsetHeight * (backgroundImageWidth / backgroundImageHeight)}px`;
    } else {
        imageNode.style.width = `${slideshowNode.offsetWidth}px`;
        imageNode.style.height = `${slideshowNode.offsetWidth / (backgroundImageWidth / backgroundImageHeight)}px`;
    }
};

const resizeImages = () => {
    if (window.innerWidth >= 768) {
        countImageSize(document.querySelector('.js-cansat-section .js-image-1 .js-photo'), document.querySelector('.js-cansat-section'));
        
        countImageSize(document.querySelector('.js-eva-section .js-image-1 .js-photo'), document.querySelector('.js-eva-section'));
        countImageSize(document.querySelector('.js-eva-section .js-image-2 .js-photo'), document.querySelector('.js-eva-section'));
        countImageSize(document.querySelector('.js-eva-section .js-image-3 .js-photo'), document.querySelector('.js-eva-section'));
        countImageSize(document.querySelector('.js-eva-section .js-image-4 .js-photo'), document.querySelector('.js-eva-section'));

        countImageSize(document.querySelector('.js-tom-section .js-image-1 .js-photo'), document.querySelector('.js-tom-section'));
        countImageSize(document.querySelector('.js-tom-section .js-image-2 .js-photo'), document.querySelector('.js-tom-section'));
        countImageSize(document.querySelector('.js-tom-section .js-image-3 .js-photo'), document.querySelector('.js-tom-section'));
    }
};

window.addEventListener('resize', resizeImages);
window.addEventListener('load', resizeImages);
