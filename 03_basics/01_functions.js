//JavaScript Functions (In Depth) :A function is a reusable block of code designed to perform a specific task.
//JavaScript mein functions ki bohot tarah ki types hoti hain. Har function ka apna specific use case hota hai. Aaj hum saare major types ko explore karenge. 

//Built-in Functions (Predefined Functions) 
//Explanation: 
// Yeh wo functions hote hain jo JavaScript ne pehle se define kiye hote hain. Tum in functions ko directly use kar sakte ho bina kisi definition ke.
console.log("Hello World!");

//Math.max() aur Math.min() ka use numbers ke max ya min value find karne ke liye hota hai.


//User-Defined Functions 
//Explanation: 
// User-defined functions wo functions hote hain jo tum khud create karte ho apni specific task ke liye. Tumhare custom logic ke liye inhe use kiya jata hai. 
function myName(){
    console.log("mubeen");  
}
myName();


// jb function ko define krty hai osy khty hai parameter. or jb function ko call krty waqt value pass krty hai osy bolty hai arguments
function addTwoNum (num1,num2){
    console.log(num1+num2); 
}
addTwoNum(2,4);


//**return** JavaScript mein function ke andar ka result wapas dene ke liye use hota hai. Jab aap kisi function ko call karte ho, aur chahte ho ke wo kuch value wapas kare (taake baad mein use ho sake), tab return ka use hota hai.
function addTwoNum (num1,num2){
    return num1+num2; 
}
let result = addTwoNum(2,9);
console.log(result);



function userLoggedIn(username){
    if(!username){
        console.log("pleases enter a username");
    }
    return `${username} just logged in`
}
console.log(userLoggedIn());



//rest operator .  rest ka matlb hota hia ekhata krna
function calCartPrice(...num){
    return num;
}
console.log(calCartPrice(100,299,200,300,400)); //[ 100, 299, 200, 300, 400 ]

// interview prespective
function calCartPriceTwo(val1,val2,...num1){
    return num1;
}
console.log(calCartPriceTwo(100,299,200,300,400)); // [ 200, 300, 400 ]


// object with function , object ko function me kaise pass krna hai 
const obj = {
    username :"mubeen ahmad",
    price : 987
}

function handleObject(anyObject){
    return `the name is ${anyObject.username} and price is ${anyObject.price}`
}

console.log(handleObject(obj));


// array with function 
const myArray = [100,200,300,400,500];
function returnSecondValue(getArray){
    //return getArray[1]
    return `my second value is ${getArray[1]}`
}
console.log(returnSecondValue(myArray));





//************************** This and Arrow Function ******************** */

//this current execution context ko refer krta hai 
const myObj ={
    username :"mubeen",
    age: 23,
    email :"mubeen@gmail.com",
    welcomeMessage : function(){
        console.log(` Hi ${this.username},welcome to this website`);  
    }
}
myObj.welcomeMessage();
myObj.username = "ali";
myObj.welcomeMessage();


// this ko jb kise function me excute krty hai to wo undefined return krta hai .
function chai(){
    let username= "mubeen";
    console.log(this.username); 
}
chai();



//Browser mein: this refers to window object.Node.js mein: this refers to global object (ya empty {} depending on strict mode)
function showThis() {
  console.log(this);
}
//showThis();



//Arrow functions ek concise tarike se anonymous functions ko define karte hain. Yeh function keyword ko replace karta hai aur shorter syntax deta hai.
const addNum = (num1,num2)=>{
   return num1 + num2 ;
}
console.log(addNum(2,3));



//implicit return consice trika hai arrow function lekhny ka return b nhi lekhna prta.
const sumNum = (num1,num2)=> num1 + num2 ;
//const sumNum = (num1,num2)=> (num1 + num2) ; another way 
//const sumNum = (num1,num2)=> ({username:"mubeen"}); object return kr rhy with arrow

console.log(sumNum(2,3));



//************************************** IIFE ******************** */

//IIFE wo functions hote hain jo immediately invoke ho jaate hain, yaani define karte hi turant execute ho jaate hain. Yeh mostly encapsulation ke liye use hota hai, taake variables ko global scope se bachaya ja sake. 

(function dbConnection(){
    console.log("DB Connected") 
})();
//dbConnection();

// another way with arrow function:
(()=>{
    console.log("database connected");
})();

// example two with parameter 
((name)=>{
    console.log(`database connected ${name}`);
})("mubeen")