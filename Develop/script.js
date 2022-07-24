// Displays current date
var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
$("#2a").text(weekDay);

// loop for time frame
for (var i = 9; i < 18; i++) {
    var timeString = ''
    var time = ''
    if (i < 12) {
        timeString = `${i}AM`
    } else if (i === 12) {
        timeString = `${i}PM`
    }
    else (
        timeString = `${i - 11}PM`
    )
    var currentHour = moment().hours()
    if (i < currentHour) {
        time = 'past'
    } else if (i == currentHour) {
        time = 'present'
    } else {
        time = 'future'
    
    }
    $('#time-blocks').append(`<div class="row time-block ${time}">
    <div class="col-md-1 hour">${timeString}</div>
    <div class="col" value=${i}><textarea class="storage col-md-10 description ${time}"></textarea></div>

    <div class="col"><button class="saveBtn">Save</button></div>

    

    </div>`)

}

const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.saveBtn');

const saveToLocalStorage = () => {

    localStorage.setItem('textinput', storage.textContent) // does not work
}

button.addEventListener('click', saveToLocalStorage)
