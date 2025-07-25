//JavaScript mein Nullish Coalescing Operator (??) ek logical operator hai jo null ya undefined values ko handle karne ke liye use hota hai. Yeh relatively naya feature hai (introduced in ES2020), aur bohot useful hai jab tum default values assign karte ho.

//Nullish Coalescing Operator (??) kisi expression ke null ya undefined hone par ek default value return karta hai. 


// for null
let userName = null;
let defaultName = "Guest";

let finalName = userName ?? defaultName;
console.log(finalName); // ➜ Guest



// for undefined 
let user1 = {
  name: "Mubeen",
   age1: undefined // commented out means age property hi nahi hai
};

let age1 = user1.age ?? 25;
console.log(age1); // ➜ 25




 //Difference between ?? and ||
 let name1 = "" || "Guest";     // ➜ "Guest" (empty string ko bhi false mana)
let name2 = "" ?? "Guest";     // ➜ "" (empty string ko accept kia)





// Use Case in Backend:
const user = {
  name: "Mubeen",
  age: null
};
const userAge = user.age ?? 18;
console.log(userAge); // ➜ 18