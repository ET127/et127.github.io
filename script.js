function blinker() {
  $('.header__title-element').fadeOut(500);
  $('.header__title-element').fadeIn(500);
}
setInterval(blinker(), 1000);

const dateOutput = document.getElementById('main__date-output');
const listOutput = document.getElementById('main__list-output');
const listInput = document.getElementById('main__input-list-item');
const listBtn = document.getElementById('main__input-list-btn');
let list = [""];

setInterval(function() {

  var inputDate = document.getElementById('main__input-date').value;
  console.log();
  dateOutput.innerHTML = subtractDates(inputDate);

}, 1000);

function subtractDates(date) {

  var input = new Date(date);
  var today = new Date();
  // console.log(today + " subtract " + input);

  if (input.getTime() > today.getTime()) {

    var diff = input.getTime() - today.getTime();
    var secs = Math.floor(diff / 1000);
    var min = Math.floor(secs / 60);
    var hours = Math.floor(min / 60);
    var days = Math.floor(hours / 24);

    if (secs != NaN) {

      return days + " days, " + hours % 24 + " hours, " + min % 60 + " minutes and " + secs % 60 + " seconds left!";

    } else {

      return "Input a date!";

    }

  } else {

    return "Input a valid date";

  }

}

listInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    listBtn.click();
  }

});

listBtn.addEventListener('click', function() {

  addToList(listInput.value);
  listInput.value = "";

}, false);

function addToList(item) {

  list.push(item);
  organiseList(list);

}

function organiseList(ulist) {

  listOutput.innerHTML = '';

  const sortedList = ulist

    .sort(function(a, b) {

      a = a.replace(/\s*/g, '');
      b = b.replace(/\s*/g, '');
      return a > b ? 1 : a < b ? -1 : 0;

    })
    .forEach(function(item) {

      if (item != '') {

        const li = document.createElement('li');
        li.innerText = item;

        listOutput.append(li);

      }

    });

}
