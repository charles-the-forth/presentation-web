window.scrollDown = function() {
    const newsSection = document.getElementById('js-eva-section');
    window.scrollTo({
        top: newsSection.offsetTop,
        behavior: 'smooth'
    });
};

const countBackgroundSize = () => {
    const backgroundImageHeight = 1440;
    const backgroundImageWidth = 2560;
    const headerSection = document.getElementById('js-header-section');
    if (
        headerSection.offsetWidth / headerSection.offsetHeight <
        backgroundImageWidth / backgroundImageHeight
    ) {
        headerSection.style.backgroundSize = `auto ${
            headerSection.offsetHeight
        }px`;
    } else {
        headerSection.style.backgroundSize = `${
            headerSection.offsetWidth
        }px auto`;
    }
};

window.addEventListener('resize', () => {
    countBackgroundSize();
});

window.addEventListener('load', () => {
    countBackgroundSize();
    
    const logo = document.getElementById('js-logo');
    const arrowDownButton = document.getElementById('js-arrow-down-button');

    logo.classList.add('opacity-transition-750ms');
    setTimeout(() => arrowDownButton.classList.add('opacity-transition-750ms'), 750);
});
