

//      **********          Navbar            *********
var menu = document.getElementById('toggle-mobile');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit-btn');
var w = window.outerWidth;

menu.addEventListener('click', function (e) {
    nav.classList.toggle('mobile-menu')
    menu.classList.toggle('mobile-menu-show')
    e.preventDefault();
});

exit.addEventListener('click', function (e) {
    nav.classList.add('mobile-menu');
    menu.classList.toggle('mobile-menu-show')
    e.preventDefault();
});