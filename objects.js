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
// //square brackets

// //how to create multiple instances of object without having to rewrite

class User {
    constructor(email, name, age){
        this.email = email;
        this.name = name;
        this.age = age;
        this.score = 0;
        //score not passed in as parameter, same for every user
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
        //returning an instance of the object for that particular user
    }
}
//class inheritance
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
        //filter allows us to cycle through each element in the array and then filter one or more of them out
    }
}


var userOne = new User('ryu@ninjas.com', 'ryu', 29);
var userTwo = new User('yoshi@ninjas.com', 'yoshi', 32);
var admin = new Admin('admin@admin.com', 'heather', 29);


var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);
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


//constructor is a function that fires whenever we want to create a new user object
