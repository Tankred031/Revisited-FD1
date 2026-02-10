
// OSNOVE - ISPIS U KONZOLU
{
const name = "Digipak";
let age = 28;
let isStudent = true;

let skills = ["HTML", "CSS", "JS"];

let isAdult = age >= 18;

console.log("Name", name);
console.log("Age", age);
console.log("isStudent", isStudent);
console.log("skills", skills);
console.log("isAdult", isAdult);
}

// IF IZJAVA / SWITCH IZJAVA - ISPIS U KONZOLU
{
let age = 20;
if(age>=18){
    console.log("Eligible to Vote");
}

if(age >=18){
    console.log("Adult");
} else {
    console.log("Minor");
    
}

let marks = 75;
if(marks >= 90) {
    console.log("Grade A");
} else if(marks >=70) {
    console.log("Grade B");    
} else {
    console.log("Grade C");    
}

let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");        
}


}

// LOOP (PETLJE) - ISPIS U KONZOLU

{

for (let i = 1; i < 7; i++) {
    console.log(i);    
}

let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}



}


{

let num = 7;
if (num % 2 === 0) {
    console.log("Even number");    
} else {
    console.log("Odd number");    
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
        
    }
}

let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;      
    default:
        console.log("Invalid day");    
        
}

}

// FUNKCIJE

{
function greet() {
    console.log("Hello World");    
}

greet()

function greetUser(name) {
    console.log("Hello" + name);    
}
greetUser("Digipak");


function add(a,b) {
    return a + b;
}

let result = add(5,3);
console.log(result);

// moderni JS
/*
const multiply = (a,b) => {
    return a + b;
}

const square = x => x*x
*/


}