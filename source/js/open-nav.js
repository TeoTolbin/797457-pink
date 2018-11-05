'use strict'

  var mainMenu = document.querySelector('.main-menu');
  var menuButton = document.querySelector('.menu-header__button');

  mainMenu.classList.remove('main-menu--change-too');

  menuButton.addEventListener('click', function() {
    if (mainMenu.classList.contains('main-menu--change')) {
      mainMenu.classList.remove('main-menu--change');
      mainMenu.classList.add('main-menu--opened');
    } else {
      mainMenu.classList.add('main-menu--change');
      mainMenu.classList.remove('main-menu--opened');
    }
  });
