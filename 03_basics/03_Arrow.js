const user = {
    username: 'ssahil',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome too website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'sahil'
//     console.log(this.username);
    
// }
// chai()

const chai =  () => {
    let username = 'sahil'
     console.log(this);
}


// chai()

// const addTwo= (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2 )
 
const addTwo = (num1, num2) => ({username: 'sahil'})

console.log(addTwo(3,4));


// const myArray = [2, 3, 4, 5]

// myArray.forEach