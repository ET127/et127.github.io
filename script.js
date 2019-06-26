function blinker() {
	$('.header__title-element').fadeOut(500);
	$('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);


const submitBtn = document.getElementById('main__submit-date');

submitBtn.addEventListener('click',function(e){

  e.preventDefault();

	var inputDate = document.getElementById('main__input-date');
	console.log(subtractDates(inputDate));

},false);

function subtractDates(date){

	var input = new Date(date);
	var today = new Date();
	console.log(today + "subtract" + input);
  return today.getTime() - input.getTime();

}
