// //ARITHEMETIC OPERATORS

// // let a = 10;
// // let b = 5;
// // let c = 5;

// // const sum = a + b;
// // console.log(sum)
// // const difference = a - b;
// // console.log(difference)
// // const product = a * b;
// // console.log(product)
// // const quotient = a / b;
// // console.log(quotient)
// // const remainder = a % b;
// // console.log(remainder)
// // const exponent = a ** b;
// // console.log(exponent);

// // ASSIGNMENT OPERATORS

// // a += b;
// // console.log("After +=:", a);

// // b -= 2;
// // console.log("After -=:", b);
// // b /= 2;
// // console.log("After /=:", b);
// // c **= 2;
// // console.log("After **=:", c);
// // b %= 2;
// // console.log("After %=:", b);

// // COMPARISON OPERATORS
// // let num1 = 10;
// // let num2 = 20;
// // let num3 = 10;
// // console.log(num1 == num2);
// // console.log(num1 != num2);
// // console.log(num1 === num3);
// // console.log(num1 !== num2);
// // console.log(num1 > num2);
// // console.log(num1 < num2);
// // console.log(num1 >= num2);
// // console.log(num1 <= num2);

// // let condition1 = true;
// // let condition2 = false;

// // console.log(condition1 && condition2);
// // console.log(condition1 || condition2);
// // console.log(!condition1);

// // //?:

// // const isLoggedIn = false;

// // let message = isLoggedIn ? "User Logged In" : "Opps invalid email address";

// // console.log(message);

// //SWITCH STATEMENT
// let day = 4;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("invalid day");
// }

// let dayOfTheWeek = 'Monday'

// switch(dayOfTheWeek){
//     case 'Monday':
//         console.log("Ahh shit it's Monday")
//     break;
    
//     case 'Tuesday':
//         console.log("it's Tuesday")
//     break;

//     case 'Wednesday':
//         console.log("it's Wednesday")
//     break;

//     case 'Thursday':
//         console.log("it's Thurdsday")
//     break;
    
//     case 'Friday':
//         console.log("it's Friday")
//     break;

//     case 'Saturday':
//         console.log("it's Saturday")
//     break;

//     case 'Sunday':
//         console.log ("Go to church it's Sunday")
//     break;
//     default:
//         console.log('Invalid Day')
//     break;

// }


let boys = ['Tobi', 'Samuel', 'John', 'Peter', 'Ojo']

let boy1 = 'sammy'
let boy2 = 'Chung'

let spliceBoys = boys.splice(2,1,boy1,boy2 )

console.log(boys)