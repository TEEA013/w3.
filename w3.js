// // // // // // const readline = require('readline');
// // // // // // const rl = readline.createInterface({
// // // // // //     input: process.stdin,
// // // // // //     output: process.stdout
// // // // // // });
// // // // // // let maxNum = null;
// // // // // // function askNumber() {
// // // // // //     rl.question("Enter a number (stop with 0): ", (input) => {
// // // // // //         let num = parseFloat(input);
// // // // // //         if (num === 0) {
// // // // // //             if (maxNum !== null) {
// // // // // //                 console.log(`Max number is: ${maxNum}`);
// // // // // //             } else {
// // // // // //                 console.log("No valid numbers entered.");
// // // // // //             }
// // // // // //             rl.close();
// // // // // //             return;
// // // // // //         }
// // // // // //         if (maxNum === null || num > maxNum) {
// // // // // //             maxNum = num;
// // // // // //         }
// // // // // //         askNumber(); 
// // // // // //     });
// // // // // // }
// // // // // // askNumber();

// // // // // const readline = require('readline');
// // // // // const rl = readline.createInterface({
// // // // //     input: process.stdin,
// // // // //     output: process.stdout
// // // // // });
// // // // // let total = 0;
// // // // // let count = 0;
// // // // // function askNumber() {
// // // // //     rl.question("Enter a number (negative to stop): ", (input) => {
// // // // //         let num = parseFloat(input);
// // // // //         if (num < 0) {
// // // // //             if (count > 0) {
// // // // //                 console.log(`Average is: ${(total / count).toFixed(2)}`);
// // // // //             } else {
// // // // //                 console.log("No positive numbers were entered.");
// // // // //             }
// // // // //             rl.close();
// // // // //             return;
// // // // //         }
// // // // //         total += num;
// // // // //         count += 1;
// // // // //         askNumber(); 
// // // // //     });
// // // // // }
// // // // // askNumber();
// // // // const readline = require('readline');
// // // // const rl = readline.createInterface({
// // // //     input: process.stdin,
// // // //     output: process.stdout
// // // // });
// // // // function askQuestion(query) {
// // // //     return new Promise(resolve => rl.question(query, resolve));
// // // // }
// // // // async function calculator() {
// // // //     let repeat;
// // // //     do {
// // // //         let num1 = parseFloat(await askQuestion("Enter first number: "));
// // // //         let num2 = parseFloat(await askQuestion("Enter second number: "));
// // // //         let operation = await askQuestion('Choose operation ("+" for add, "-" for subtract): ');
// // // //         let result;
// // // //         if (operation === "+") {
// // // //             result = num1 + num2;
// // // //         } else if (operation === "-") {
// // // //             result = num1 - num2;
// // // //         } else {
// // // //             console.log("Invalid operation.");
// // // //             continue;
// // // //         }
// // // //         console.log(`Result: ${result}`);
// // // //         repeat = await askQuestion('Do you want to continue? (y/n): ');
// // // //     } while (repeat.toLowerCase() === "y");
// // // //     rl.close();
// // // // }
// // // // calculator();


// // // // const addNumbers = (a, b) => a + b;

// // // // console.log(addNumbers(3, 7)); 
// // // const isPositiveNumber = (num) => num > 0;

// // // console.log(isPositiveNumber(5));  
// // // console.log(isPositiveNumber(-3)); 
// // // console.log(isPositiveNumber(0)); 
// // const toLowerCaseText = (text) => text.toLowerCase();

// // console.log(toLowerCaseText("HELLO"));  
// const isEven = (num) => num % 2 === 0;

// console.log(isEven(4)); 
// console.log(isEven(3)); 

// const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

// console.log(fahrenheitToCelsius(32)); 
// const isOdd = (num) => num % 2 !== 0;

// console.log(isOdd(7)); 
// console.log(isOdd(4)); 

// const difference = (a, b) => a - b;

// console.log(difference(10, 5)); 

// const isPrime = (num) => {
//     if (num <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   };
  
//   console.log(isPrime(7)); 
//   console.log(isPrime(8));
  
