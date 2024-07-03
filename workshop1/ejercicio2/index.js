var body = document.querySelector("body");
var form = document.querySelector("form");
var userName = document.querySelector("#name");
var paragraph = document.createElement("p");
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (userName.value) {
        paragraph.textContent = "Welcome ".concat(userName.value);
        body.appendChild(paragraph);
    }
});
