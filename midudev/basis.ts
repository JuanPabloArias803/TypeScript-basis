//any -> ignora el tipado de typescript, evitarlo siempre

//void -> ignoramos lo que una fucnion nos retorne.

//never -> indica que una función nunca va a llegar al return implicito por que hay algun throw.

//functions in typescript

// const sayHiFromFunction=(fn: (nombre:string)=>void)=>{
//     fn("Miguel")
// }

// const sayHi=(nombre:string)=>{
//     console.log(`Hola ${nombre}`);
//     return
// }

// sayHiFromFunction(sayHi);

//Type alias

// type HeroId=`${string}-${string}-${string}-${string}-${string}`

// type Hero={
//     readonly id?:number,
//     name:string,
//     age:number
// }



// let hero:Hero={
//     name:"thor",
//     age:1500
// }

// function createHero(name:string,age:number):Hero{
//     return {name,age}
// }

// const thor=createHero("Thor",1500);

// thor.id?.toString(); //Unicamente si thor tiene la propiedad id se ejecuta el metodo 

// thor.id=9343 //tira error si la propiedad tiene readonly

//thor.id=crypto.randomUUID(); //se valida con el template union type


// //template union type real example
// type HexadecimalColor = `#${string}`;
// const color:HexadecimalColor="0943";
// const color2:HexadecimalColor="#gg54d";


// //Union types - admite todos los tipos
// type BasicCoords="north"|"south"|"west"|"east";
// let Colombia:BasicCoords="north";

// //Intersction and union types
// type Numbers1=1|2|3;
// type Numbers2=2|3|4;

// type NumbersIntersection=Numbers1&Numbers2;
// type NumbersUnion=Numbers1|Numbers2;


// //Type indexing

// type UserProperties={
//     name:string,
//     address:{
//         city:string;
//         street:string;
//     }
// }

// const userAddress:UserProperties["address"]={
//     city:"Medellín",
//     street:"Dg60"
// }


// //Type from function return

// function createAddress(){
//     return{
//         planet:"Tierra",
//         city:"Barcelona"
//     }
// }

// type Address=ReturnType<typeof createAddress>

// let address:Address;


//Arrays

const languages:string[]=[];
languages.push("JavaScript");

const example:(string|number)[]=[];
example.push("Hola");
example.push(2);


//Ejemplo de matrices con todo lo aprendido

/*
[
    ["x","o","x"], <- string[]
    ["x","o","x"], <- string[]  <- string[][]
    ["x","o","x"]  <- string[]
]
*/

type CellValue="x"|"o"|"";

type GameBoard=[
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue]
]

const gameBoard:GameBoard= [
    ["x","o",""],
    ["x","",""],
    ["","",""]
] 


type RGBColors=`rgb(${number},${number},${number})`
