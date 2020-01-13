
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
/*

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

*/
//ES5 way of concatanating 2 array.
/*
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array,elements);
console.log("concatenation of 2 array : " + array);
*/

/*
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log("all : " + Array.from(all));
all.forEach(cur => cur.style.color = 'purple');
 */

// Lecture : REST PARAMETERS
//ES5
/*
function isfullAge5() {
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    });
}
//isfullAge5(1990, 1999, 1965);
*/

/*
//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965);
 */

// Lecture: Default Parameters
//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('emily', 1983, 'Diaz', 'Spanish');
*/

//ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('emily', 1983, 'Diaz', 'Spanish');


//Lecture: Maps

/*
const question = new Map();
question.set('question','What is the official name of the latest major JavaScript version ? ');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    console.log('answer 4 is here');
}

//question.clear(); // clear all the elements of question map.

//question.forEach((value, key) => console.log(`This is ${key}, and it is set to ${value}`));
//console.log(question.entries());

for(let [key, value] of question.entries()) {
    //console.log(`This is ${key}, and it is set to ${value}`);
    if(typeof (key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
 */

//Lecture : Classes

//ES5
/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    // calculateAge is a function. we dont need function keyword here.
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hey there');
    }
}
const john6 = new Person6('John', 1990, 'teacher');
john6.calculateAge();
john5.calculateAge();
Person6.greeting();
*/

// Lecture: Classes and Subclasses
//ES5
/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

 */
// ES6
/*
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    // calculateAge is a function. we dont need function keyword here.
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hey there');
    }
}
class Athlete6 extends Person6 {
   constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}
const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/


