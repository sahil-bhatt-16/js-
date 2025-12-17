// const tinderUser = new Object()
const tinderUser = {}
tinderUser.Id = '123456'
tinderUser.name = ' sammy'
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: 'mum@gamil.com',
    fullname:{
        userfullname:{
            firstname:'sahil',
            lastname:'bhatt'
        }
    }
    
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 4: "b"}
const obj2 = {2: "a", 4:"b"}
// const obj3  = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id:1,
        email:'sahhil@gami.com'
    },
       {
        id:1,
        email:'sahhil@gami.com'
    },
       {
        id:1,
        email:'sahhil@gami.com'
    },
    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename:'js in hindi',
    price:'999',
    courseInstructor: 'sahil',
}


// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);
console.log(instructor);



// {
//     name: 'sahil',
//     cousename: 'js in hindi',
//     price: 'free'
// }

[
    {},
    {},
    {}
]
