let body=document.querySelector("body") as HTMLBodyElement;
let form=document.querySelector("form") as HTMLFormElement;
let userName=document.querySelector("#name") as HTMLInputElement;
let paragraph=document.createElement("p") as HTMLParagraphElement;
form.addEventListener("submit",(ev:SubmitEvent)=>{
    ev.preventDefault();
    if(userName.value){
        paragraph.textContent=`Welcome ${userName.value}`;
        body.appendChild(paragraph);
    }
});