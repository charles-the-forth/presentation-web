window.addEventListener('scroll', () => {
    const progressItems = Array.from(document.querySelectorAll('.progress-item'));
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    progressItems
        .filter(it => viewHeight - it.getBoundingClientRect().bottom > 0)
        .filter(it => !it.classList.contains('hide'))
        .filter(it => !it.classList.contains('show'))
        .forEach(it => it.classList.add('show'));
});