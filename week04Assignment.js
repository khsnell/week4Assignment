/* Week 4 Coding Assignment */

// Question 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

let subtract = ages[ages.length - 1] - ages[0];
console.log("Question 1a: " + subtract);

ages.push(80);
subtract = ages[ages.length - 1] - ages[0];
console.log("Question 1b: " + subtract);

let ageTotal = 0;
for (a of ages) {
    ageTotal += a;
}
console.log("Question 1c: " + ageTotal/ages.length);


// Question 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

let nameTotal = 0;
for (n of names) {
    nameTotal += n.length;
}
console.log("Question 2a: " + nameTotal/names.length);

let result = '';
for (n of names) {
    result += n + ' ';
}
console.log("Question 2b: " + result);


// Question 3
console.log("Question 3: arr[arr.length - 1]");


// Question 4
console.log("Question 4: arr[0]");


// Question 5
let nameLengths = [];
for (n of names) {
    nameLengths.push(n.length);
}

console.log(names);
console.log(nameLengths);


// Question 6
let sum = 0;
for (nl of nameLengths) {
    sum += nl;
}

console.log("Question 6: " + sum);


// Question 7
const concat = (word, n) => {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += word;
    }

    return result;
}

console.log("Question 7: " + concat("Hello", 3));


// Question 8
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("Question 8: " + fullName("Alice", "Morgan"));


// Question 9
function sumGreaterThan100(arr) {
    let result = 0;
    for (a of arr) {
        result += a;
    }
    return result > 100;
}

console.log("Question 9 (> 100): " + sumGreaterThan100([50, 60, 70]));
console.log("Question 9 (< 100): " + sumGreaterThan100([5, 4, 6, 8]));


// Question 10
let testArr = [50, 60, 40];
function average(arr) {
    let result = 0;
    for (a of arr) {
        result += a;
    }
    return result / arr.length;
}

console.log("Question 10 (test array): " + testArr);
console.log("Question 10 (response): " + average(testArr));


// Question 11
function compareArray(arr1, arr2) {
    let r1 = 0;
    let r2 = 0;

    for (a of arr1) {
        r1 += a;
    }

    for (a of arr2) {
        r2 += a;
    }

    return (r1 / arr1.length) > (r2 / arr2.length);
}

console.log("Question 11: " + compareArray([5, 4, 6], [1, 2, 3]));


// Question 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

console.log("Question 12: " + willBuyDrink(true, 20));


// Question 13
// We're counting the points scored per quarter in a basketball game. 
// The function takes two arrays of points scored and returns the winner or false if there is a tie.
function countQuarters(arr1, arr2) {
    let r1 = 0;
    let r2 = 0;

    for (a of arr1) {
        r1 += a;
    }

    for (a of arr2) {
        r2 += a;
    }

    if (r1 > r2) return arr1;
    else if (r2 > r1) return arr2;
    else return false;
}