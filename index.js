let up = document.getElementById('UpArrow');

window.addEventListener('scroll', () => {

    if (window.scrollY > 150) {
        up.style.display = 'block';

        up.addEventListener('click', () => {
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
        })
    } else {
        up.style.display = 'none';

    }

});