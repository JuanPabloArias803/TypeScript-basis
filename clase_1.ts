let example:string="Juan";
console.log(`Hola ${example}`);

let age:number=45;
console.log(age);
age<18?console.log("Menor de edad"):console.log("Mayor de edad");

interface IPerson{
    firstName:string;
    lastName:string;
    age?:number
}

let users:IPerson={
    firstName:"Juan",
    lastName:"Arias",
    age:23
}

function saludar(nombre:string|number){
    console.log(`Hola ${nombre}`);
}

const calculateTwoNumbers=(a:number,b:number):number=>a+b;

console.log(calculateTwoNumbers(1,2))

//tsc --init para crear el tsconfig
//tsc --watch para transpilar automaticamente
//ts-node para ejecutar archivos .ts sin transpilar