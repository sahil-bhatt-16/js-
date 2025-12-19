// if
// const isUserLoggedIn = true
// const temperature = 11

// if  (temperature === 50){
// console.log('less then 50');

// } else {

// console.log('temperature is greater then 50'); 
// }

// console.log('executed');

// const score = 200
// if (score){
//     const power = 'fly'
//     console.log(`user power: ${power}`);
    
// }

// console.log(`user power: ${power}`);


const balance = 1000

// if (balance < 500)  console.log('test'), console.log('test2');

// if (balance < 500){
//     console.log('less than');
    
// } else if (balance < 750) {
//     console.log('less than 750');
    
// } else {
//     console.log('less than 1200');
    
// }

const userLogggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLogggedIn && debitCard){
    console.log('Allow to buuy course');
}

if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log('User Logged In ');
    
}