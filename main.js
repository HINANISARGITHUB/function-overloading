"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1st example
function add(num1, num2) {
    return num1 + num2;
}
// add(false, "100%");  // 1
// add("Hina", "12");   // 2
// add(10 , 15);        // 3 
// add(true , false);   // 4
// add(true , 12);        // 5
// add(15 , "Rina");
console.log(add(10, 15)); // 25
console.log(add("Hina", "12")); // Hina12
console.log(add(10, 15)); // 25
console.log(add(true, false)); // 1   true 1 ka barabar hua
console.log(add(true, 12)); // 13  true 1 ka barabar hua
console.log(add(15, "Rina")); // 15Rina
console.log(`add(${15} , ${"Rina"})`); // add(15 , Rina) with literal 
console.log(add('Hina', false));
function add1(num1, num2, num3) {
    let sum = num1 + " " + num2 + " " + num3;
    return sum;
}
console.log(add1("Hina", true, 16)); // 1   Hinatrue16
console.log(add1(false, "Rina", 12)); // 2   falseRina12
console.log(add1(10, 10, 10)); // 3   30
console.log(add1(true, false, true)); // 4   2
console.log(add1("1", "2", "3")); // 5   123
console.log(add1(12, "Hello", false)); // 6   12Hellofalse
// example
function ad_d(num1, num2) {
    return num1 + num2;
}
let answer = ad_d(10, 15);
if (answer === 25) {
    console.log('write answer');
}
else {
    console.log('Try again');
}
// example with if-else
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function added(name, email, password, contactNumber) {
    let join = name + " " + email + " " + password + " " + contactNumber;
    console.log(join);
}
let value1 = (prompt('Enter your name: '));
let value2 = (prompt('Enter your email (id): '));
let value3 = parseInt(prompt('Enter your password: '));
let value4 = parseInt(prompt('Enter your contact-number: '));
let answer1 = added(value1, value2, value3, value4);
if (answer1 === answer1) {
    console.log('Great job 👍');
}
else {
    console.log('Try again❓');
}
// function login(email:any,  password: any):any{
//prompt syn say input layna user say
// }
