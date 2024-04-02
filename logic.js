//Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.

const prompt = require("prompt-sync")();
let a = parseFloat(prompt("enter a first number : "));
let b = parseFloat(prompt("enter a second number : "));

let sum = a + b;
console.log("sum: ", sum);

//Take two numbers and only print the integer part when a is divided by b.

let divi = a/b;
console.log("divide :", divi);

//Take two numbers a,b and print the exponential power of the first number raised by the second.

let expo = a**b;
console.log("exponential :", expo);

//Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.

let dec = Math.floor(a/b);
console.log("division :", dec);

//5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.

let first = parseFloat(prompt("enter a first subject : "));
let second = parseFloat(prompt("enter a second subject : "));
let third = parseFloat(prompt("enter a third subject : "));
let fourth = parseFloat(prompt("enter a fourth subject : "));
let fifth = parseFloat(prompt("enter a fifth subject : "));

let avg = first + second + third + fourth + fifth / 5;
console.log("avrage : ", avg);

//Take the cost price a and selling price b of a product, and print the profit obtained on the product.

let sellingPrice = parseFloat(prompt("enter a selling price : "));
let costPrice = parseFloat(prompt("enter a cost price  : "));
let profit = sellingPrice - costPrice;
console.log("profit : ", profit);

//Take a number and print out the last digit of the number.

let num = parseFloat(prompt("enter a number to cheack last digit: "));
let lastDigit = num % 10;
console.log("Last Digit :", lastDigit);

//Take a 2 digit number and return the first and last digits.

let number = parseFloat(prompt("enter a two digit number to cheack first and last digit:"))
let firstNum = Math.floor(number / 10);
let lastNum = number % 10;
console.log("First Number:", firstNum);
console.log("Last Numbere :", lastNum);

//Write a JavaScript program to find the largest of three numbers.

let m = parseFloat(prompt("first number :"));
let n = parseFloat(prompt("second Numbwer:"));
let k = parseFloat(prompt("third number :"));
if (m < n){
    large = n;
} else{
    large = m;
}
if (large < k){
    console.log("Largest Number is :", k)
} else{
    console.log("Largest Number is :", large)
}


 //Write a JavaScript program to check whether a number is even or odd.

let nuM = parseFloat(prompt("enter a number for cheack odd or even :"))
if (nuM % 2 ==0){
    console.log("Given Number is even.")
} else {
    console.log("Given Number is odd.")
}

//Write a JavaScript program to check whether a given number is prime or not.

let NumBer = parseFloat(prompt("enter a Number to cheack given Number are prime or Not :"))

    let c = 0;
       for (let j = 1; j <= NumBer; j++){
          if (NumBer % j == 0){
            c = c + 1;
          }
       }
       if (c == 2){
       console.log("Prime Number");
       } else{
        console.log("Not Prime Number");
       }
       
    //Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.

    