var body = document.querySelector("body");
var form = document.querySelector("form");
var number = document.querySelector("#number");
var paragraph = document.createElement("p");
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    (Number(number.value) % 2 === 0) ? paragraph.textContent = "even number" : paragraph.textContent = "odd number";
    body.appendChild(paragraph);
});
