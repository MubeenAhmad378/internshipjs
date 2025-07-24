// object 2 tarah sy declared kr skty hai literak ki tra or constrcutor ki tarah .
// jb ap constructor k through object bnaty hai to wo aik singleton bnta hai yani wo apni tra ka aik he object hai . literal sy bn ny waly object k different instance bna skty hai .


//singleton 
//Object.create();


// object literal 
// behind the scene ye keys ko aik string ki tra treat krta hi 

const jsUser = {
    name : "mubeen",
    age : 23 ,
    city : "lahore" ,
    email : "mubeen@gmail.com",
    isLogged : true ,
    lastLoggedIn : ["monday","tuesday"]
}
//console.log(jsUser);
//console.log(jsUser.name);
console.log(jsUser.lastLoggedIn); 
console.log(jsUser["name"]); // object ki key ko  [""] k  through b access kr skty hai


// agr key k opr coma lga dae jae to ye kbi b dot sy access nhi ho skt phr hmesha square bracket use krny pry gy . 
const userName ={
    "full Name" : "mubeen ahmad"
}
console.log(userName["full Name"]);


// interview question : aik sybmol lo osko object ki key me add kro or print kr k dekha do .

const mySym = Symbol("key1");
const User = {
    name : "ali",
    [mySym] : "myKey1",
    age : 24 ,
    city : "fsd" ,
    email : "ali@gmail.com"
}
//console.log(User[mySym]);
User.age = 24 ;
console.log(User);
// Object.freeze(User); // freeze krny k bad object me koi b changing nhi ho skty.


// object k sath function use krna .

User.greeting = function(){
    console.log("welcome to my function"); 
}
console.log(User.greeting());


User.greetingTwo = function(){
    console.log(`welcome to my function ${this.name} `); 
}
console.log(User.greetingTwo());
