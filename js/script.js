var linkMap = document.querySelector('.contacts__map');
var modalMap = document.querySelector('.modal--map');
var closeMap = document.querySelector('.modal__close-button--map');
var linkLetter = document.querySelector('.button--big-button');
var modalLetter = document.querySelector('.modal--write-us');
var closeLetter = document.querySelector('.modal__close-button--write-us');

/*Открываем модальное окно с интерактивной картой*/
linkMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('modal--active');
});
/*Закрываем модальное окно с интерактивной картой*/
closeMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal--active');
});
/*Открываем форму обратной связи*/
linkLetter.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalLetter.classList.add('modal--active');
});
/*Закрываем форму обратной связи*/
closeLetter.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalLetter.classList.remove('modal--active');
});
