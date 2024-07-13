export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    welcome() {
        console.log(`Welcome ${this.firstName} ${this.lastName}`);
    }
    eat(food) {
        console.log(`${this.firstName} is eating ${food}`);
    }
    brushTeeth() {
        console.log(`${this.firstName} is brushing his teeth`);
    }
}
