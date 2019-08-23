// var userOne = {
//     email:'ryu@ninjas.com',
//     name: 'Ryu',
//     age: null,
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.name, 'has logged out');
//     }
// };

// console.log(userOne.name);

// //login and logout are methods

// userOne.name = 'Yoshi';
// //dot notation to access properties
// userOne['email'] = 'mario@ninjas.com'
//square brackets

//how to create multiple instances of object without having to rewrite

// class User {
//     constructor(email, name, age){
//         this.email = email;
//         this.name = name;
//         this.age = age;
//         this.score = 0;
//         //score not passed in as parameter, same for every user
//     }
//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//         //returning an instance of the object for that particular user
//     }
// }
//class inheritance
//created new class called admin
//which inherited all the previous class
// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//         //filter allows us to cycle through each element in the array
//         //then filter one or more of them out
//     }
// }

// var users = [userOne, userTwo, admin];

// admin.deleteUser(userOne);

// console.log(users);

// userOne.login().updateScore().updateScore().logout();
//we couldnt do this before because we we'rent returning "this"

// userOne.login().updateScore();
// // ^^ method chaining
// userTwo.logout();

// console.log(userOne);
// console.log(userTwo);
// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

//constructor is a func that fires whenever we want to create a new user object

//javascript doesnt have classes
//pretend classes built into the langauges
//pretend how act how classes behave (syntatic sugar)
//built over the protoype model

//constructors under the hood - protoypes

//constructor function that creates user objects
//email and name are paramaters
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    //dont pass online in as param because its always set to false to begin
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User('ryu@ninjas.com', 'ryu', 29);
var userTwo = new User('yoshi@ninjas.com', 'yoshi', 32);
var admin = new Admin('adamin@admin.com', 'heather', 29);

var users = [userOne, userTwo, admin];

//benefits of using protoypes is inheritance 

console.log(admin);

//every obj type has a prototype 
//like a map for the obj type
//contains functionaly for that object type
//methods arent being repeated in each user instance
//defining once


// basic algorithm scriping 

//convert celsius to fahrenheit

function convertToF(celsius) {
    let fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

//reverse a string by chaining methods of built in functions
function reverseString(str) {
    return str = str.split("").reverse().join("");
}
reverseString("hello");

//reverse a string with decrementing a For Loop
//create an empty string that willl host the new created string
//create the for loop

function reverseString2(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString2('hello');

//find the longest word in a string

const str = 'the quick brown fox jumped over the lazy dog';

const longestWord = (str) => {
    const strArray = str.split(" ");
    const sortedStrArray = strArray.sort(
        (strA, strB) => {
            return strB.length - strA.length;
        }
    );
    return sortedStrArray[0];
}

console.log(longestWord(str));

//split string into array
//sort
//find out largest word
//return from the top of the array


// function findLongestWord(str) {
//     var arrayOfString = str.spilt(' ');
//     var longestString = "";
//     for (var i =0; i < arrayOfString.length; i++){
//         if(longestString.length < arrayOfString[i].length){
//             longestString = arrayOfString[i];
//         }
//     }
//     str = longestString;
//     return str.length;
// }

// findLongestWord('the quick brown fox jumped over the lazy dog');

// //find most frequent item in an array

// what is the diff between let and var
//let was intro'd in 2015
//let has block scope
//not good if old browsers
//not hoisted

//var has function scope
//will die at end of function
//var gets hoisted


//add something to beginnig of array and to the end 
var myArray = ['a', 'b', 'c', 'd'];


myArray.push('end');
myArray.unshift('start');

console.log(myArray);

//es6 with spread operator

var myArray2 = ['a', 'b', 'c', 'd'];

myArray2 = ['start',...myArray2, 'end'];

console.log(myArray2);

//how to create private var in js

function secretVar(){
    var private = "super secret code";
    return function(){
        return private
    }
}

var getPrivateVar = secretVar();

console.log(getPrivateVar());



