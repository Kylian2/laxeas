const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('hamburger-navigation');

hamburger.onclick = function () {
    hamburger.classList.toggle('actif');
    menu.classList.toggle('unactif');
}
