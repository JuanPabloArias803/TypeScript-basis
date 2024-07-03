var body = document.querySelector("body");
var form = document.querySelector("form");
var nacionality = document.querySelector("#nacionality");
var paragraph = document.createElement("p");
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    paragraph.textContent = nacionality.value === "colombian" ? "Native" : "Foreign";
    body.appendChild(paragraph);
});
