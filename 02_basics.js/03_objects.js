// sinigleton

// objects literals
// Object.create

const mySym = Symbol('key1')

const JsUser ={
    name:'sahil',
    'full name':'sahilbahtt',
    mySym:"mykey1",
    age: 16,
    location: 'dehradun',
    email:'shailtgnanu@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'tuesday']
}


console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser['full name']);
console.log(JsUser[mySym])

JsUser.email = 'heehheeehh@gmail.com'
// Object.freeze(JsUser)
JsUser.email = 'hehehahah@gmail.com'
//console.log(JsUser)



JsUser.greetingtwo = function(){
    console.log(`Hello Js User,{this.name}` );

}
JsUser.greeting = function(){
    console.log('Hello Js User' );

}

console.log(JsUser.greetingtwo());
console.log(JsUser.greeting());