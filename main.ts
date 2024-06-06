function add(num1: boolean, num2: string): string;
function add(num1: string, num2: string): string;
function add(num1: number, num2: number): number;
function add(num1: boolean, num2: boolean): boolean;
function add(num1: boolean, num2?:any): string;
function add(num1?: any, num2?:any): any; 


// 1st example
function add(num1: any, num2: any):any {   
    return num1 + num2;
}

// add(false, "100%");  // 1
// add("Hina", "12");   // 2
// add(10 , 15);        // 3 
// add(true , false);   // 4
// add(true , 12);        // 5
// add(15 , "Rina");

console.log(add(10 , 15));                 // 25
console.log(add("Hina", "12"));            // Hina12
console.log(add(10 , 15));                 // 25
console.log(add(true , false));            // 1   true 1 ka barabar hua
console.log(add(true , 12));               // 13  true 1 ka barabar hua
console.log(add(15, "Rina"));              // 15Rina
console.log(`add(${15} , ${"Rina"})`);     // add(15 , Rina) with literal 
console.log(add('Hina' , false))

// 2nd example
function add1(num1: string, num2: boolean, num3: number): any;         // 1
function add1(num1: boolean, num2: string, num3: number): any;         // 2
function add1(num1: number, num2: number, num3: number): number        // 3
function add1(num1: boolean, num2: boolean, num3: boolean): boolean;   // 4
function add1(num1: string, num2: string, num3: string): string;       // 5
function add1(num1: number, num2?: any, num3?: any): any;              // 6

function add1(num1: any, num2: any, num3: any): any {
    let sum =num1 +" " + num2+ " " + num3;
    return sum;
}
console.log(add1("Hina", true, 16));    // 1   Hinatrue16
console.log(add1(false, "Rina", 12));   // 2   falseRina12
console.log(add1(10, 10, 10));          // 3   30
console.log(add1(true, false, true));   // 4   2
console.log(add1("1", "2", "3"));       // 5   123
console.log(add1(12, "Hello", false));  // 6   12Hellofalse

// example
function ad_d(num1: any, num2: any): any{
    return num1 + num2;
}
let answer = ad_d(10, 15);
if(answer === 25){
    console.log('write answer')
}
else{
    console.log('Try again');
}


// example with if-else

import promptsync from 'prompt-sync'
const prompt =promptsync();

function added(name: number, email: number, password: number, contactNumber: number): number ;
function added(name: string, email: string, password: boolean, contactNumber: number): any;
function added(name: number, email: string, password?: any, contactNumber?: any): string;
function added(name: string,  email: string, password: number, contactNumber: number): any;

function added(name: any , email: any, password: any, contactNumber: any): any {
  let join =  name + " " + email+ " " + password+ " " + contactNumber;
    console.log(join);
}
let value1 = (prompt('Enter your name: ' ));
let value2  = (prompt('Enter your email (id): '));
let value3 = parseInt(prompt('Enter your password: '));
let value4 = parseInt(prompt('Enter your contact-number: '));

let answer1 = added(value1, value2 , value3 , value4);
if( answer1 === answer1) {
     console.log('Great job 👍');
}

else{
    console.log('Try again❓');
}














// function login(email:any,  password: any):any{
    //prompt syn say input layna user say
// }
