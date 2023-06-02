var menu = document.querySelector('.menu')
var menubar = document.querySelector('.menu-bar')

menu.addEventListener('click', function () {
    menubar.classList.toggle('showmenu');
});