var linkBuy = document.querySelector('.hidden-buttons__link--buy');
var modalBuy = document.querySelector('.modal--basket-window');
var closeBuy = document.querySelector('.modal__close-button--basket-window');

/*Открываем модальное окно с сообщением о добавлении товара в корзину*/
linkBuy.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalBuy.classList.add('modal--active');
})
/*Закрываем модальное окно с сообщением о добавлении товара в корзину*/
closeBuy.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalBuy.classList.remove('modal--active');
});
