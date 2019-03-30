window.addEventListener('load', () => {
    const logo = document.getElementById('js-logo');
    const arrowDownButton = document.getElementById('js-arrow-down-button');

    logo.classList.add('opacity-transition-750ms');
    setTimeout(() => arrowDownButton.classList.add('opacity-transition-750ms'), 750);
});

window.scrollDown = function() {
    const newsSection = document.getElementById('js-news-section');
    window.scrollTo({
        top: newsSection.offsetTop,
        behavior: 'smooth'
    });
};