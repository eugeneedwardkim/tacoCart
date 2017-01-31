// Sum Two numbers 
function addNum(x, y) {
var sum = x + y
console.log(sum)
}

//sum an array

var num = [1,2,3,4,5,6]
var sum = 0

function sumArray(num) {
    num.forEach(function(entry) {
    sum += entry;
});
console.log(sum)
}


//F to C 
var fDegrees = 90
function fToC(fDegrees){
var cDegrees = (fDegrees - 32) * (5/9)
console.log(cDegrees)
}

//vowel count
var str = "Talk about what what?"
function countVowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u']
    var count = 0
    str.split('').map( function(letter) {
        if (vowels.includes(letter.toLowercase()))
        ++count
    })
    console.log(count)
}

//dice roll
function rollDice(){
    var diceOne = Math.random() * 6 + 1
    var diceTwo = Math.random() * 6 + 1
    console.log(Math.round(diceOne), Math.round(diceTwo))
}

//Average of an array
var arrayNum = []
var sumArray = 0
function arrayAvg() { 
    arrayNum.forEach(function(entry1) {
    sumArray += entry1;
});
console.log(sumArray / (arrayNum.length + 1))
}

//FizzBuzz
function fizzBuzz() {
for(var i = 0; i < 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if( i % 3 === 0 ) {
        console.log("Fizz")
    }
    else if (i % 5 === 0){
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}
}

//Factorial did not have solved before class
function factorial(num) {
    var val = 1;
    for(var i = 2; i <= num; i++) {
    val *= i
    }
    console.log(val)
}

//Fibonacci did not have solved before class
var fNum = 13
function fibbNum(fNum) {
    for (var i = 1; i < fNum; i++){
        var f = 1 + i

    }
    console.log()
}

function fig(num) {
    var left = 1;
    var right = 0;
    var temp;

    while (num >= 0) {
        temp = left;
        left = left + right;
        right = temp;
        num--;
    }
    console.log(right)
}

//Roman Numerals