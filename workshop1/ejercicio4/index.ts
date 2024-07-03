let body=document.querySelector("body") as HTMLBodyElement;
let form=document.querySelector("form") as HTMLFormElement;
let day=document.querySelector("#day") as HTMLInputElement;
let weekDay:number;
let paragraph=document.createElement("p") as HTMLParagraphElement;
form.addEventListener("submit",(ev:SubmitEvent)=>{
    ev.preventDefault();
    if(day.value){
        weekDay=Number(day.value);
        switch(weekDay){
            case 1:
                paragraph.textContent="Monday";
                break;
            case 2:
                paragraph.textContent="Tuesday";
                break;
            case 3:
                paragraph.textContent="Wednesday";
                break;
            case 4:
                paragraph.textContent="Thursday";
                break;
            case 5:
                paragraph.textContent="Friday";
                break;
            case 6:
                paragraph.textContent="Saturday";
                break;
            case 7:
                paragraph.textContent="Sunday";
                break;
            default:
                paragraph.textContent="Error";
                break;
        }
        body.appendChild(paragraph);
    }
});