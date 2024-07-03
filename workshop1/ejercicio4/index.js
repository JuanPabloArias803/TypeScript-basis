var body = document.querySelector("body");
var form = document.querySelector("form");
var day = document.querySelector("#day");
var weekDay;
var paragraph = document.createElement("p");
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (day.value) {
        weekDay = Number(day.value);
        switch (weekDay) {
            case 1:
                paragraph.textContent = "Monday";
                break;
            case 2:
                paragraph.textContent = "Tuesday";
                break;
            case 3:
                paragraph.textContent = "Wednesday";
                break;
            case 4:
                paragraph.textContent = "Thursday";
                break;
            case 5:
                paragraph.textContent = "Friday";
                break;
            case 6:
                paragraph.textContent = "Saturday";
                break;
            case 7:
                paragraph.textContent = "Sunday";
                break;
            default:
                paragraph.textContent = "Error";
                break;
        }
        body.appendChild(paragraph);
    }
});
