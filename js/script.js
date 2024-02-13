const btn = document.querySelector('#switch-theme-mode');

btn.addEventListener('click', () => {
    const html = document.documentElement

    html.classList.toggle('light')
})