const form=document.querySelector(".new-item-form") as HTMLFormElement;

const type=document.querySelector("#type") as HTMLSelectElement;

const tofrom=document.querySelector("#tofrom") as HTMLInputElement;

const details=document.querySelector("#details") as HTMLInputElement;

const amount=document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(ev:Event)=>{
    ev.preventDefault();
    console.log(`${type.value.toUpperCase()} es de ${tofrom.value} details: ${details.value} the amount is: ${amount.value}`);
});

// let names:string[]=["mario","luigi","yoshi"];

// names.push("peach");

// let numbers:(number|string)[]=[1,34,5];
// numbers.push("hola")

// let user={
//     firstName:"Juan",
//     lastName:"Arias",
//     age: 22
// }

// user={
//     firstName:"Pedro",
//     lastName:"Porro",
//     age:28
// }

// console.log(user.firstName.length);

// const add=(num1:number,num2:number=0):number=>{
//     return num1+num2;
// }

// console.log(add(4));




