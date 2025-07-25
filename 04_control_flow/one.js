//Conditional Statements ka kaam hota hai ke hum apne program ko decision making ke liye instruct kar sakein. Matlab, hum ye specify karte hain ke agar kisi condition ko fulfill kiya jaye, toh specific action perform ho.
// 1. if statement
//  2. if...else statement
// 3. if...else if...else
//  4. Ternary Operator 


//Comparison Operators aise symbols hote hain jo do cheezon ka aapas mein(comparison) karte hain, aur result hamesha true ya false deta hai.
// > , < , >= , <= , !== , != , == 


// if statement
let age = 18;
if (age >= 18) {
  console.log("you are eligible for vote");
}


// if  else statement
let boyAge = 12;
if (boyAge >= 18) {
  console.log("you are eligible for vote");
}else{
    console.log("you are not eligible for vote because u are small");
    
}


// scope related
let score = 200 ;
if (score >100) {
    let power = "fly";
    console.log(`you power : ${power}`)     
}
    //console.log(`you power : ${power}`);



// without curely braces b if statement lekh skty hai 
const balance = 500;
if(balance>100) console.log("your balance is greater"),console.log("be happy");

    


// if else-if  
const marks = 39 ;
if(marks>=80 && marks<=100 ){
    console.log("your garde is A");
    
}else if(marks>=60 && marks<=80 ){
    console.log("your garde is B");
    
}else if(marks>=40 && marks<=60 ){
    console.log("your garde is C");
    
}else{
    console.log("you are fail");
    
}



// And , Or , not 
let userLoggedIn = true;
let debitCard = true;
let userLoggedInGoogle = false ;
let userLoggedInEmail = true;

if (userLoggedIn && debitCard){
    console.log(" you purshased the course");
    
}


if(userLoggedInGoogle || userLoggedInEmail){
    console.log("you are logged in");
    
}