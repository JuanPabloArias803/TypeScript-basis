var body = document.querySelector("body");
var form = document.querySelector("form");
var userAge = document.querySelector("#age");
var paragraph = document.createElement("p");
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (userAge.value) {
        Number(userAge.value) < 18 ? paragraph.textContent = "Minor" : paragraph.textContent = "Adult";
        body.appendChild(paragraph);
    }
});
