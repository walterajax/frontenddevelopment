// JavaScript Document
var url = 'http://127.0.0.1:5500/'

var hamburgerIcon = document.querySelector('#hamburger_icon');
var hamburgerMenu= document.querySelector('#hamburger_menu');

hamburgerIcon.addEventListener('click', hamburgerToggle, false);

function hamburgerToggle() {
    hamburgerMenu.classList.toggle('show');
    hamburgerMenu.classList.toggle('hide');
}


var like_buttons = document.querySelectorAll('.like_button');

like_buttons.forEach(function(like_btn) {
   like_btn.addEventListener('click', e => {
       if(e.target.src == url + 'frontenddevelopment/images/shirtajax.png') {
            e.target.src = 'images/shirt.png';
       } else {
           e.target.src = 'images/shirtajax.png';
       }
   });
});
