window.showAllArticles = () => {
    const articles = document.querySelectorAll('.article.hidden');
    Array.from(articles).forEach(it => it.classList.remove('hidden'));

    const button = document.getElementById('js-more-articles-button');
    button.style.display = 'none';
};