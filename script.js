function blinker() {
	$('.header__title-element').fadeOut(500);
	$('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);


const submitBtn = document.getElementById('main__submit-date');

submitBtn.addEventListener('click',function(e){

  e.preventDefault();

	var inputDate = document.getElementById('main__input-date').value;
	console.log(subtractDates(inputDate));

},false);

function subtractDates(date){

	var input = new Date(date);
	var today = new Date();
	console.log(today + " subtract " + input);
	var diff = input.getTime() - today.getTime();
	
	var secs = diff /1000;
	var minutes = secs/60;
	var hours = minutes / 60;
	var days = hours / 24;

  return days + ":" + hours + ":" + minutes % 60 + ":" + seconds % 60;

}
