var link_map = document.querySelector('.contacts__map');
var modal_map = document.querySelector('.modal--map');
var close_map = document.querySelector('.modal__close-button--map');
var link_letter = document.querySelector('.button--big-button');
var modal_letter = document.querySelector('.modal--write-us');
var close_letter = document.querySelector('.modal__close-button--write-us');

/*Открываем модальное окно с интерактивной картой*/
link_map.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal_map.classList.add('modal--active');
})
/*Закрываем модальное окно с интерактивной картой*/
close_map.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal_map.classList.remove('modal--active');
});
/*Открываем форму обратной связи*/
link_letter.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal_letter.classList.add('modal--active');
})
/*Закрываем форму обратной связи*/
close_letter.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal_letter.classList.remove('modal--active');
});
