// function greet(){
//     console.log('Hello, World');
// }

// const greet2 = function(){
//     console.log('Hello, World');
// }

// const greet3 = () =>{
//     console.log('Hello World');
// }

// greet();
// greet2();
// greet3();

// function add(a,b){
//     return a + b;
// }

// add(5,3);

// const sum = add(10, 20)
// console.log(sum);

// function greet(name){
//     console.log(`Hello, ${name}!`);
// }

// greet("Alice")

// 1

num1 = prompt('Input Any Number');

num2 = prompt('Input Any Number');

function multiply(num1, num2){
    return num1 * num2 ;
}
const product = multiply(num1, num2)
console.log(product);


// 2
num3 = prompt('Input Any Number to check if its Even or Odd');

function checkEvenOdd(num3) {
    if (num3 % 2 === 0) {
        return `${num3} is an even`;
    } else {
        return `${num3} is an odd`;
    }
}

console.log(checkEvenOdd(num1))


// 3
function squr(num1){
    return num1 * num1;
}

console.log(squr(num1))


// 4
const name = prompt('Input Name');
const age = prompt('Input Age');

function greeUser(name, age){
    return `Hello ${name}, you are ${age} years old`
}
console.log(greeUser(name, age))

//5 

const width = prompt("Input Width");
const length = prompt("Input length");

function calculateArea (width, length){
    return width * length;
}

console.log(calculateArea(width, length));

// 6 

const number = prompt('Input A number');
const num = parseInt(number)

function isPrime (num){
    if(num / 1 == num && num % num == 0){
        return  `${num} is a prime number`;
    }else {
        return `${num} is not a prime number`
    }
}

console.log(isPrime(num))