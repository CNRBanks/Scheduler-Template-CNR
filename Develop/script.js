// Displays current date
var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
$("#2a").text(weekDay);

// loop for time frame
for (var i = 6; i < 24; i++) {
    var timeString = ''
    if (i < 12) {
        timeString = `${i}AM`
    } else if (i === 12) {
        timeString = `${i}PM`
    }
    else (
        timeString = `${i - 11}PM`
    )


    $('#time-blocks').append(`<div class="row time-block">
    <div class="col-md-1 hour">${timeString}</div>
    <div class="col"><textarea class="col-md-10 description present"></textarea></div>
    <div class="col"><button class="saveBtn">Save</button></div>

    </div>`)
}