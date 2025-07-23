//primitive data type (pass by value )


let name = "Ali"; // String 
let age = 30; // Number 
let isActive = true; // Boolean 
let address; // Undefined (no value assigned) 
let empty = null; // Null 
let uniqueId = Symbol('id'); // Symbol 
let largeNumber = 1234567890123456789012345678901234567890n; // BigInt



// non primitive data type (pass by reference) 
// array , object , function 

const heros =["salman","john","ritik"];
// console.log(typeof heros );


let myObj={
    username:"ali",
    age:23
}


// function greet(){
//     console.log("welcome ..... ")
// }
// greet();

const myFunction = function(){
    console.log("welcome ali ..... ")
}
// myFunction();





// *****************************************************************

// stack(primitive)copy milty hai os variable ki 
let myYouTubeName= "mubeen coder"

let anotherYouTube = myYouTubeName;
// console.log(anotherYouTube);
anotherYouTube = "mubeen 99coder";

// console.log(myYouTubeName);

// console.log(anotherYouTube);





// heap(non primitive)original value ka reference milta hai mean address,original value ko change krta .

let objOne = {
    username:"ali",
    email:"mubeen@gmail.com"
}

let objTwo =  objOne;
objTwo.email= "ali@gmail.com";

console.log(objOne);

console.log(objTwo);