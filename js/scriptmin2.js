var linkBuy=document.querySelector(".hidden-buttons__link--buy"),modalBuy=document.querySelector(".modal--basket-window"),closeBuy=document.querySelector(".modal__close-button--basket-window");linkBuy.addEventListener("click",function(e){e.preventDefault(),modalBuy.classList.add("modal--active")}),closeBuy.addEventListener("click",function(e){e.preventDefault(),modalBuy.classList.remove("modal--active")});