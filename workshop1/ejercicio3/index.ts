let body=document.querySelector("body") as HTMLBodyElement;
let form=document.querySelector("form") as HTMLFormElement;
let userAge=document.querySelector("#age") as HTMLInputElement;
let paragraph=document.createElement("p") as HTMLParagraphElement;
form.addEventListener("submit",(ev:SubmitEvent)=>{
    ev.preventDefault();
    if(userAge.value){
        Number(userAge.value)<18?paragraph.textContent=`Minor`:paragraph.textContent=`Adult`;
        body.appendChild(paragraph);
    }
});