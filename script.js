function blinker() {
	$('.header__title-element').fadeOut(500);
	$('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);

const inputDate;
const submitBtn = document.getElementById('main__submit-date');

submit.submit('click',function(e){

  e.preventDefault();
  inputDate = document.getElementById('main__input-date');

},false);

console.log(inputDate).toString();
