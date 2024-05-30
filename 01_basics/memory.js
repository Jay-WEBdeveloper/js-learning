// Two types of Memory manegment in javascript
// stack ==> used by refer of value 
let friendfirst="paritosh";
let secondone= friendfirst;

secondone="shakib";

console.log(friendfirst);
console.log(secondone);

// Heap ==> used by refereced value of original

let userone = {
    email : "jayesh@gmail.com",
    id:1414514,
}
let userTwo = userone;

userTwo.email= "rehwanij@gmail.com";

console.log(userone);
console.log(userTwo); // same output of both of them