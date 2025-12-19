const userEmail = 'sahil@gmail.com'

if (userEmail){
    console.log('Got User Email');
    
}else{
    console.log('Dont have user email' );
    
}

// falsy value

// false, 0, -0, BigInt 0n, "", NULL, undefined, NaN

// truthy value

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//        console.log('Arra is Empty');
       
    
// }


// const emptyObj = {}
// if (Object.keys(emptyObj).lenght === 0) {
//     console.log('Object is empty ');
    
// }


// Nullish Coalescing operator (??): null undefined

let val1;
// val = 5 ?? 10
// val1 = null ?? 10
val2 = undefined ?? 15

console.log(val2);

// Terniary Operator 

// consiton ? true: false

