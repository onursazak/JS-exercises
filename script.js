
// ES6 LECTURE : BLOCKS AND IIFES

/*
{
    const a = 1;
    let b = 2;
}


//ES5
(function() {

})();

*/


// ES6 LECTURE : STRINGS

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1994;

function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' +
calcAge(yearOfBirth) + 'years old. ');


// `` =  Alt + 96
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.endsWith('th'));  //true
console.log(n.includes(' '));  //true
console.log(firstName.repeat(5)); // prints john 5 times.
*/

// LECTURE : ARROW FUNCTIONS

/*const years = [1990, 1965, 1982, 1937];



var ages5 = years.map(function (el) {
    return 2016 - el;
});
console.log("By es5 : ", ages5);

es6
let ages6 = years.map(el => 2016 - el);
console.log("By es6 : ", ages6);
//
ages6 = years.map((el,index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
*/

// LECTURE : ARROW FUNCTIONS 2

// es5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
        console.log("this in box5 object.",this);
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            console.log("self",self);
            console.log("this",this);
            alert(str);
        });
    }
}
box5.clickMe();*/

// es6  without var self = this;
/*
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            console.log("box6 this in event.arrow funct", this);
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

function Person(name) {
    this.name = name;
}
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    });
    console.log(arr);
};

var friends = ['Bob','Jane','Mark'];
new Person('John').myFriends5(friends);

*/

// LECTURE: DESTRUCTURING

// ES5
/*
var john = ['John', 26];
var name = john[0];
var age = john[1];
*/

// ES6

/*
const [name, age] = ['John',26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age, new Date().getFullYear()];
}

const [age2, retirement, fullYear] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
console.log(fullYear);

*/

// Lecture: Arrays
/*

const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
/!*
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
*!/

// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
/!*
for(var i = 0; i <boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box box-blue') {
        console.log(boxesArr5[i].className);
        continue;
    }
    boxesArr5[i].style.backgroundColor = 'dodgerblue';
    boxesArr5[i].textContent = 'I changed to blue';
}
*!/

// ES6
for(const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        console.log("bluee");
        continue;
    }
    cur.textContent = 'I changed to blue';
}

// ES5

var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18)
*/

// Lecture: Spread Operator

function addFourAges(a, b, c, d) {
    return a+b+c+d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5

var ages = [18, 30, 12, 21];
// What apply method will do is to take ages array and call addFourAges() using elements of ages array as the arguments.
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith,...familyMiller];
// 2 dizi arasına farklı bir eleman eklemek istersek :
const anotherElementinBigFamily = [...familySmith,'Lily',...familyMiller];
console.log(bigFamily);
console.log(anotherElementinBigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log("all : " + Array.from(all));
// NodeList to array
all.forEach(cur => cur.style.color = 'purple');