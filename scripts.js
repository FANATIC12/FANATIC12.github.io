var darkLayer = document.querySelector(".overlay"); // Не работаеть !!!11!
var link = document.querySelector(".open-form");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-close");

  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
	darkLayer.classList.add("overlay"); // Не работаеть !!!11!
  });
  
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
  