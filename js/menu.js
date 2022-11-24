const hamburguerIcon = document.querySelector('.nav__hamburguer'); //constante que selecciona la clase .nav__hamburguer

hamburguerIcon.addEventListener('click', () => {  //evento click que cambia el icono.
  hamburguerIcon.classList.toggle('nav__hamburguer--open');
});

