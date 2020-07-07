var link_buy = document.querySelector('.hidden-buttons__link--buy');
var modal_buy = document.querySelector('.modal--basket-window');
var close_buy = document.querySelector('.modal__close-button--basket-window');

/*Открываем модальное окно с сообщением о добавлении товара в корзину*/
link_buy.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal_buy.classList.add('modal--active');
})
/*Закрываем модальное окно с сообщением о добавлении товара в корзину*/
close_buy.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal_buy.classList.remove('modal--active');
});
