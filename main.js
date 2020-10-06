// Part 1
// Simplify the following big O expressions as much as possible:

// O(n + 10)  = O(n)
// O(100 * n) = O(100n) = O(n)
// O(25) = O(1)
// O(n^2 + n^3) = 0(n^3)
// O(n + n + n + n) = O(n)
// O(1000 * log(n) + n) = O(log(n))
// O(1000 * n * log(n) + n) = O(log(n))
// O(2^n + n^2) = O(n^2)
// O(5 + 3 + 1) = O(1)
// O(n + n^(1/2) + n^2 + n * log(n)^10) = O(nlog(n))

// Part 2
// Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
// time complexity = O(n); space complexity = O(1)

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
// time complexity = O(1); space complexity = O(1)

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
// time complexity = O(1); space complexity = O(1)

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
// time complexity = O(n); space complexity = O(n)

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
// time complexity = O(n^2); space complexity = O(n)

// Part 3
// For this exercise, you MUST use recursion to solve these problems. Some of them can be done without, but it is essential that you practice recursion and make the tests pass.

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arr){
    if(arr.length === 0) return 1;

    return arr.pop() * productOfArray(arr);
}
console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value
function contains(obj, val){
    for(let item in obj){
        if(typeof obj[item] === 'object'){
            return contains(obj[item], val);
        }
        if(obj[item] === val){
            return true;
        }
    }
    return false
}
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}
console.log(contains(nestedObject,44));
console.log(contains(nestedObject,"foo"))

