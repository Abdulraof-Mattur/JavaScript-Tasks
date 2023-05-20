var i = 1000;
var a = 500;

console.log(i / a);

var b = 1000;
var c = 2;

console.log(b / c);

var d = 1000;
var e = 500;

console.log(d + e);

var q = 1000;
var w = 500;

console.log(q * w);

var n = 7;
var p = 9;
var l = 2;

console.log((n + p + l) / 3);

var g = 150;
var h = 0.3;

console.log(g - g * h);

let age = 20;

console.log(age > 18 || age < 30);

var z = 1 ** 2;
var v = 2 ** 3;

console.log(z * v);

var k = 1;
var j = 16;

console.log((k * 2) % j);

console.log(typeof 100);
console.log(typeof 73.9);
console.log(typeof NaN);
console.log(typeof "water");
console.log(typeof false);
console.log(typeof (9 != 11));
console.log("Orange" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof Infinity);
console.log(1 == "1");
console.log(1 === "1");

let Name = "Abdulraof";

console.log(Name.length); // length begin with index 1

// Here are some common escape characters in JavaScript:

// \' - single quote
// \" - double quote
// \\ - backslash
// \n - newline
// \r - carriage return
// \t - tab
// \b - backspace
// \f - form feed

let One = "WELCOME TO ORANGE";
console.log(One);

const message = "welcome to orange";
const formattedMessage = message.toUpperCase();
console.log(`message = "${formattedMessage}"`);

//................................................................

let Two = "TO";
console.log(Two);

let Three = "Hello from Orange";
console.log(Three);

let Four = "welcome to orange";
console.log(Four);

let Five = "17";
console.log(Five);

let Five2 = "qwertyuiopasdfghj";
console.log(Five2.length);

let Sex = 'Welcome to "Orange"';
console.log(Sex);

let Seven = "Welcome to Orange Jordan";
console.log(Seven);

let str = "cactus";
let slicedStr1 = str.slice(0, 1);
let slicedStr2 = str.slice(1);
let newStr = slicedStr2.replace("c", "*");
console.log(slicedStr1 + newStr);

//................................................................

const arr = ["apple", "banana", "orange"];
const str3 = arr.toString();
console.log(str3);

//................................................................

const arr1 = ["apple", "banana", "orange"];
const str4 = arr1.join(" * ");
console.log(str4);

//................................................................

const arr5 = ["apple", "banana", "orange"];
const first5 = arr5.shift();
console.log(first5);
console.log(arr5);

const arr6 = ["apple", "banana", "orange"];
const first6 = arr6.unshift("melon");
console.log(first6);
console.log(arr6);

//................................................................

const arr7 = ["apple", "banana"];
const arr8 = ["orange", "peach"];
const newArr = arr7.concat(arr8);
console.log(newArr);

//..............................................................

const arr9 = ["apple", "banana", "orange"];
const removed = arr9.splice(1, 1, "kiwi", "peach");
console.log(removed);
console.log(arr9);

//........................................................

const task = ["Coding", "Academy", "By", "Orange"];

console.log(task);

const task1 = ["Coding", "Academy", "By", "Orange"];

var obj = {
  name: "abdulraof",
  age: 12,
};
console.log(obj.name);

let x = 5;
let y = 7;

if (x < y) {
  console.log(x * y);
  console.log(x + y);
} else {
  console.log(y);
}

//................................................................

function splitString(str) {
  return str.split(" ");
}

const inputStr = "Orange Jordan";
const outputArr = splitString(inputStr);
console.log(outputArr);

//.........................................................................

function hideMobile(number) {
  const hiddenDigits = number.slice(0, 7).replace(/\d/g, "*");
  return `${hiddenDigits}${number.slice(7)}`;
}

const inputNumber = "0776807777";
const HiddenNumber = hideMobile(inputNumber);
console.log(HiddenNumber);

//................................................................

function hideEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const hiddenUsername = `${username.slice(0, 6)}...`;
  return `${hiddenUsername}@orange.com`;
}

const inputEmail = "orange_academy@orange.jo";
const HiddenEmail = hideEmail(inputEmail);
console.log(HiddenEmail);

//................................................................

function capitalizeLetter(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

const sampleInput = "coding academy by orange";
const capitalizedString = capitalizeLetter(sampleInput);
console.log(capitalizedString);

//...............................................

function flipNumber(num) {
  const numStr = num.toString();
  let flippedStr = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    flippedStr += numStr.charAt(i);
  }
  return parseInt(flippedStr, 10);
}

const Input = 92485;
const flippedNumber = flipNumber(Input);
console.log(flippedNumber);

//...............................................

function removeCharAtIndex(str, index) {
  if (index >= str.length || index < 0) {
    // Invalid index, return original string
    return str;
  }
  return str.slice(0, index) + str.slice(index + 1);
}

const inpuString = "Orange";
const indexToRemove = 3;
const outputString = removeCharAtIndex(inpuString, indexToRemove);
console.log(outputString);

//................................................................

function mergeStrings(str1, str2) {
  if (str1.length < 2 || str2.length < 2) {
    return "";
  }
  const mergedString = str1.slice(1) + str2.slice(1);
  return mergedString;
}

const inputString1 = "lora";
const inputString2 = "inge";
const outputString1 = mergeStrings(inputString1, inputString2);
console.log(outputString1);

//................................................................

function checkFirstOrLastChar(char, str) {
  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);
  return firstChar === char || lastChar === char;
}

const inputChar1 = "o";
const inputString3 = "orange";
const output1 = checkFirstOrLastChar(inputChar1, inputString3);
console.log(output1);

const inputChar2 = "z";
const inputString4 = "orange";
const output2 = checkFirstOrLastChar(inputChar2, inputString4);
console.log(output2);

//................................................................

function splitStringToWords(str) {
  const wordsArray = str.split(" ");
  return wordsArray;
}

const inputString5 = "Coding Academy by Orange";
const output = splitStringToWords(inputString5);
console.log(output);

// Conditionals .........................................

function checkEligibility(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearOfBirth;

  if (age > 60) {
    console.log("You may join the seniors' program.");
  } else if (age >= 18 && age <= 30) {
    console.log("You are eligible. Start your application.");
  } else if (age < 18) {
    console.log("You may join the kids' program.");
  } else {
    console.log("You are not eligible. You may join other programs.");
  }
}

checkEligibility(1990);
checkEligibility(2005);
checkEligibility(1950);
checkEligibility(1975);

//................................................................

function switchCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

console.log(switchCase("OrAnGe")); // Output: "oRaNgE"
console.log(switchCase("CoDiNg AcAdEmY")); // Output: "cOdInG aCaDeMy"


//................................................................


function camelCase(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}


console.log(camelCase("Coding Academy by Orange")); // Output: "CodingAcademybyOrange"
console.log(camelCase("hello world")); // Output: "HelloWorld"

//................................................................  

function removeElementFromArray(arr3, elem) {
  for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] === elem) {
      arr3.splice(i, 1);
    }
  }
  return arr3;
}


var arr3 = ["Coding", "Academy", "By", "Orange"];
var elem = "By";
var newArr1 = removeElementFromArray(arr3, elem);
console.log(newArr1);

//................................................................

function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkOddEven(5)); // "Odd"
console.log(checkOddEven(10)); // "Even"


//................................................................

function checkIfNumber(input) {
  return typeof input === "number";
}


console.log(checkIfNumber(5)); // true
console.log(checkIfNumber("five")); // false


//................................................................

function findLargestNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(findLargestNumber(5, 10)); // 10
console.log(findLargestNumber(-3, -7)); // -3


//................................................................

function triangleType(a, b, c) {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a !== b && a !== c && b !== c) {
    return "scalene";
  } else {
    return "isosceles";
  }
}

console.log(triangleType(a, b, c))

//................................................................

function isNumberInRange(number, rangeStart, rangeEnd) {
  return number >= rangeStart && number <= rangeEnd;
}


const number = 42;
const rangeStart = 1;
const rangeEnd = 100;

if (isNumberInRange(number, rangeStart, rangeEnd)) {
  console.log(`${number} is in the range ${rangeStart}-${rangeEnd}`);
} else {
  console.log(`${number} is not in the range ${rangeStart}-${rangeEnd}`);
}



// ......................................

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true; // it is a leap year
  } else {
    return false; // it is not a leap year
  }
}


console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2022)); // false
console.log(isLeapYear(1900)); // false


// Loops ................

// // using for loop
// for (let i = 2; i <= 50; i += 2) {
//   console.log(i);
// }

// // using while loop
// let j = 2;
// while (j <= 50) {
//   console.log(j);
//   j += 2;
// }


//................................................................

for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}


//................................................................


for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  }
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i + " is odd");
  }
}


// let i = 1;
// while (i <= 50) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   }
//   i++;
// }

// i = 1;
// while (i <= 50) {
//   if (i % 2 !== 0) {
//     console.log(i + " is odd");
//   }
//   i++;
// }


//................................................................

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//..........................


function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}



//................................................................

function fizzBuzzRecursive(num) {
  if (num === 0) {
    return;
  }

  fizzBuzzRecursive(num - 1);

  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
  } else if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(num);
  }
}

fizzBuzzRecursive(100);


//................................................................


function banknoteConversion(amount, banknotes) {
  let result = "";
  for (let i = 0; i < banknotes.length; i++) {
    let banknote = banknotes[i];
    while (amount >= banknote) {
      result += banknote + ", ";
      amount -= banknote;
    }
  }
  return result.slice(0, -2); // remove last comma and space
}

console.log(banknoteConversion(57, [25, 10, 5, 1])); 
console.log(banknoteConversion(123, [100, 50, 20, 10, 5, 1])); 


//................................................................

function countCharacter(str, char) {
  // Convert the string to lowercase to ignore case
  str = str.toLowerCase();
  // Initialize a count variable
  let count = 0;
  // Convert the string to an array of characters
  let chars = str.split("");
  // Iterate over each character and count the matches
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === char.toLowerCase()) {
      count++;
    }
  }
  // Return the count
  return count;
}


console.log(countCharacter("Coding Academy by Orange", "o"));


// (9) ................................................................

//a

for (let i = 0; i <= 20; i++) {
  console.log(i);
}


//b

for (let i = 3; i <= 29; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


//c

for (let i = 12; i >= -14; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


//d

for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//................................................................

// Initialize variables
let str7 = 'CodingAcademy';
let array = [7, 500, 'KH404', 'black', 36];

// For loop to print array elements
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// For loop to print string characters in reverse order
for (let i = str7.length - 1; i >= 0; i--) {
  console.log(str7[i]);
}




//................................................................

let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  } else {
    odds.push(numbers[i]);
  }
}

console.log("Evens: " + evens);
console.log("Odds: " + odds);

//................................................................




// function myFunction() {

  // document.getElementById("txt").style.color="red";
//   document.getElementById("myBtn").addEventListener("click", txt)

//   function txt() {
//     document.getElementById("txt").style.cssText="color:cyan; background-color:black; text-align:center";
    
// }

function calculateBMI() {
  // Get input values from textboxes
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  // Calculate BMI
  var bmi = weight / (height * height);

  // Display result in HTML
  document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
}

















