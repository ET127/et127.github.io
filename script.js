function blinker() {
	$('.header__title-element').fadeOut(500);
	$('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);


const submitBtn = document.getElementById('main__submit-date');

submitBtn.addEventListener('click',function(e){

  e.preventDefault();

	var inputDate = new Date();
  inputDate = document.getElementById('main__input-date').value;
	console.log(inputDate);
	console.log(subtractDates(inputDate));

},false);

function subtractDates(date){

	var inputDate = new Date();
	var today = new Date();

	inputDate = date;

  return (new Date()).getTime() - inputDate.getTime();

}
