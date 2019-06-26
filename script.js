function blinker() {
	$('.header__title-element').fadeOut(500);
	$('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);

const output = document.getElementById('main__response');

setInterval(function(){

	var inputDate = document.getElementById('main__input-date').value;
	console.log();
	output.innerHTML = subtractDates(inputDate);

},1000);

function subtractDates(date){

	var input = new Date(date);
	var today = new Date();
	console.log(today + " subtract " + input);
	var diff = input.getTime() - today.getTime();

	var secs = Math.floor(diff / 1000);
	var min = Math.floor(secs/60);
	var hours = Math.floor(min / 60);
	var days = Math.floor(hours / 24);


  return days + " days, " + hours % 24 + " hours, " + min % 60  + " minutes and " + secs % 60 + " seconds left!";

}
