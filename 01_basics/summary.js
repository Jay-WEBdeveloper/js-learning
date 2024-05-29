// summary of datatypes 
//primitive datatypes
// 7 types : string , number, boolean , null , undefiend , symbol. BigInt;


// Q & A
// Define primitive data types in JavaScript. List all the primitive data types.
let string="jyessh";
let number=20;
let inLoggedIn= true;
let empty= null;
let value;
let uniqneId= Symbol('id');
let Bignumber = BigInt(1405066201620);

// Explain the difference between null and undefined. Provide examples.
let gamesecoure= null;// null maining is the variable value is empty mein (khalie );
let anthorgamevalue;// undefined maining is value abhi defined ni h yah maaluma nhi h ;

// What will be the output of the following code and why?
let x=10;
let y=x;
x=20;
console.log(y); // output is y =10;  the value before defiend to change after

// Explain the concept of immutability in primitive data types with an example.

// string&Number Immutability

let str="hello";
let newstr= str.toUpperCase()
console.log(str); // output : hello;

console.log(newstr);// output : HELLO;

let num=15;
let newnum=num+10;

console.log(num); // output : 15
console.log(newnum);// output :25

// What is the result of the following expression and why?

console.log(typeof NaN); // this is a number datatype this main the value of number is invaild and not defined  