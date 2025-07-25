
//Agar condition true ho to pehla wala expression chalega, warna dusra wal,if else ki tra he kam krta . Ternary operator sirf chhoti conditions ke liye use karo. Badi conditions ke liye if/else zyada readable hota hai.

//condition ? expression_if_true : expression_if_false;

let age = 18;
let result = age>=18 ? "you are adult" : " you are baby";
console.log(result);


let isLoggedIn = true;
let message = isLoggedIn ? "welcome to our website" : "firstly loggged in";
console.log(message);
