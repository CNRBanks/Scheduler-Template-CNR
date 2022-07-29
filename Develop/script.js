// Displays current date
var dayYear = moment().format('ddd MMM Do, YYYY');
$("#2a").text(dayYear);

// loop for time frame
for (var i = 9; i < 18; i++) {
    var storedValue = localStorage.getItem(i)||" "
    var timeString = ''
    var time = ''
    if (i < 12) {
        timeString = `${i}AM`
    } else if (i === 12) {
        timeString = `${i}PM`
    }
    else (
        timeString = `${i - 12}PM`
    )
    var currentHour = moment().hours()
    if (i < currentHour) {
        time = 'past'
    } else if (i == currentHour) {
        time = 'present'
    } else {
        time = 'future'
    
    }
    $('#time-blocks').append(`<div class="row time-block ${time}" id=${i}>
    <div class="col-md-1 hour">${timeString}</div>
    <div class="col" ><textarea value=${storedValue} placeholder=${storedValue} class="storage col-md-10 description ${time}"></textarea></div
    <div class="col"><button class="saveBtn">Save</button></div>

    

    </div>`)

}

const storageInput = document.querySelectorAll('.storage');
const text = document.querySelector('.text');
const buttons = document.querySelectorAll('.saveBtn');

const storedInput = localStorage.getItem('textinput')


const saveToLocalStorage = (e) => {
    const parentNode = e.target.parentNode.parentNode
    console.log(parentNode.getAttribute('id'))
    const textValue = parentNode.querySelector("textarea").value
    localStorage.setItem(parentNode.id,textValue)

 
 }

 if(storageInput) (e) => {
    const parentNode = e.target.parentNode.parentNode
    const textValue = parentNode.querySelector("textarea").value
    parentNode.id, textValue = storedInput
}

// const saveToLocalStorage = () => {

//     localStorage.setItem('textinput', storageInput.value) // does not work
// }

// button.addEventListener('click', saveToLocalStorage)


buttons.forEach((btn)=>{
    btn.addEventListener('click', saveToLocalStorage)
})


console.log(storageInput)
