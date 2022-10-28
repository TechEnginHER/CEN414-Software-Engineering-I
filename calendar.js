//getting and displaying current date, month and year
var currentMonth = document.querySelector(".month-picker")
var currentYear = document.querySelector("#year")
var currentDate = document.getElementsByClassName("day-num")
var mainCalendar = document.querySelector(".calendar-days")
var prevAndNext = document.querySelectorAll(".year-picker span")

let date = new Date(),
day = date.getDate(),
year = date.getFullYear(),
month = date.getMonth();


console.log(month)

const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December']

const renderCalendar = () => {
    let firstDayOfTheMonth = new Date(year, month, 1).getDay();
    let lastDateOftheMonth = new Date(year, month + 1, 0).getDate();
    let lastDayOfTheMonth = new Date(year, month, lastDateOftheMonth).getDay();
    let lastDateOfLastMonth = new Date(year, month, 0).getDate();
    let calendarBox = "";

    for (let i=firstDayOfTheMonth; i > 0; i--){
        calendarBox +=`<div class="day-num inactive">
                        ${lastDateOfLastMonth - i + 1}
                     </div>`;
    }

    for (let i = 1; i<=lastDateOftheMonth; i++){
        let today = i === date.getDate() && month === new Date().getMonth() 
                        && year === new Date().getFullYear()? "active" : "";
        calendarBox +=`<div class="day-num ${today}" >
                            ${i}
                        </div>`;
    }

    for (let i = lastDayOfTheMonth; i < 6; i++){
        calendarBox +=`<div class="day-num inactive" >
                            ${i - lastDayOfTheMonth + 1}
                        </div>`;
    }
   
  
    currentMonth.innerHTML = `${monthsOfYear[month]} ${year}`
    mainCalendar.innerHTML = calendarBox
    
}
renderCalendar();

prevAndNext.forEach(icon => {
    icon.addEventListener("click", () => {
        month = icon.id === "prev-month" ? month - 1: month + 1;

        if (month < 0 || month > 11){
            date = new Date (year, month);
            year = date.getFullYear();
            month = date.getMonth();
        } else{
            date = new Date()
        }
        renderCalendar();
    })
})
