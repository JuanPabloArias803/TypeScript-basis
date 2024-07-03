let body=document.querySelector("body") as HTMLBodyElement;
let form=document.querySelector("form") as HTMLFormElement;
let number=document.querySelector("#number") as HTMLInputElement;
let paragraph=document.createElement("p") as HTMLParagraphElement;
form.addEventListener("submit",(ev:SubmitEvent)=>{
    ev.preventDefault();
    (Number(number.value)%2===0)?paragraph.textContent="even number":paragraph.textContent="odd number";
    body.appendChild(paragraph);
});