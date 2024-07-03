let body=document.querySelector("body") as HTMLBodyElement;
let form=document.querySelector("form") as HTMLFormElement;
let nacionality=document.querySelector("#nacionality") as HTMLSelectElement;
let paragraph=document.createElement("p") as HTMLParagraphElement;
form.addEventListener("submit",(ev:SubmitEvent)=>{
    ev.preventDefault();
    paragraph.textContent=nacionality.value==="colombian"?"Native":"Foreign";
    body.appendChild(paragraph);
});