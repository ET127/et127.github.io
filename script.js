function blinker() {
  $('.header__title-element').fadeOut(500);
  $('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);

const dateOutput = document.getElementById('main__date-output');
const listOutput = document.getElementById('main__list-output');
const listBtn = document.getElementById('main__input-list-btn');
let list = ["Apple"];

setInterval(function() {

  var inputDate = document.getElementById('main__input-date').value;
  console.log();
  dateOutput.innerHTML = subtractDates(inputDate);

}, 1000);

function subtractDates(date) {

  var input = new Date(date);
  var today = new Date();
  // console.log(today + " subtract " + input);
  var diff = input.getTime() - today.getTime();

  if (diff != NaN) {

    var secs = Math.floor(diff / 1000);
    var min = Math.floor(secs / 60);
    var hours = Math.floor(min / 60);
    var days = Math.floor(hours / 24);


    return days + " days, " + hours % 24 + " hours, " + min % 60 + " minutes and " + secs % 60 + " seconds left!";

  } else {

    return "Input a date!";

  }

}

listBtn.addEventListener('click', function() {

  addToList(document.getElementById('main__input-list-item').value);

}, false);

function addToList(item) {

  list.push(item);
	organiseList(list);

}

function organiseList(ulist) {

  const sortedList = ulist
    // .map(function(item) {
		//
		// 	console.log(item);
    //   return item.cloneNode(true);
		//
    // })
		.sort(function(a, b) {

      a = a.replace(/\s*/g, '');
      b = b.replace(/\s*/g, '');
      return a > b ? 1 : a < b ? -1 : 0;

    })

		 listOutput.innerHTML = '';

		sortedList = sortedList.forEach(function(item) {
			const li = document.createElement('li');
			li.innerText = item;

			listOutput.append(li);
		});

  // for (var i = 0; i < sortedList.length; i++) {
	//
  //   listOutput.insertAdjacentHTML('beforeend', "<pre><p>" + sortedList[i].toString() + "</p></pre>");
	//
  // }

}
