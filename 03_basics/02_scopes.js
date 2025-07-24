
// let a = 20 ;
// const b = 30 ;
//  var c = 40 ;

 if(true){   
 let a = 20 ;
 const b = 30 ;
 var c = 40 ;  // c variable jo var sy decalre kia wo block scope k bhr b access hota
 }
 //console.log(a);
// console.log(b);
 console.log(c);

 


 //function ka ander function :
 // Closure ek special feature hai JavaScript mein jisme ek function apni lexical environment ko access karta hai, jab woh function execute ho chuka hota hai. Matlab ek function apne parent function ke variables ko access kar sakta hai, jab woh parent function already return ho chuka ho. 
 function one(){
    const username ="mubeen";
    function two(){
       const website ="youtube.com"
       console.log(username);
       console.log(website);

    }
    //console.log(website);
    two();
 }
 one();



 // second example through if condition
if(true){
    const user = "hitesh";
    if(user==="hitesh"){
        const website = "alibaba.com"
        console.log(user);  
    }
    //console.log(website); 
}



//Function Declaration wo hota hai jo tum directly function name ke saath define karte ho. Tum is function ko code ke kisi bhi part mein use kar sakte ho (due to hoisting). 
console.log(addNum(4));  // es me function ko declared krny sy phly access kr skty .
function addNum (num){
    return num +2 ;
}


//Function Expression mein function ko ek variable mein store kiya jata hai, aur tum isko just before use call kar sakte ho. es k ander hm phly access nhi kr skty .
const addTwo = function  (num){
    return num +2 ;
}
//console.log(addTwo(4));
