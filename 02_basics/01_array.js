// array : collection of multiple items store in a single variable ,array me shallow copy bnty hai 

// shallow copy k ander properties same refernce point ko point krty hai jo b change kro ga wo original array me b change ho ga .

// deep copy : properties do not share the same refernce point . 


const myArray=[1,2,4,4,5];
//console.log(myArray[0]);


const anotherWay =new Array(12,13,14,15,16);// another way of declare array
//console.log(anotherWay[0]);


//modifing array element 
const heros =["salma","ritik",12,13];
heros[0]="salman";
//console.log(heros);


// Array Length Property 
const anotherHeros =["salma","ritik",12,13];
//console.log(anotherHeros.length);

//Array Destructuring : Array destructuring se hum array ke elements ko alag variables me assign kar sakte hain position ke mutabiq.
const arr = ["Mubeen", 24];
const [name, age] = arr;
console.log(name); // "Mubeen"
console.log(age);  // 24




//*************** Methods ************ */

let arr1 =[1,2,3,4];
arr1.push(5);
console.log(arr1);
// push akhir me aik naya element add krta hai

let arr2 = [1,2,3,4];
arr2.pop();
console.log(arr2);
// pop nakhir ka element hata deta hai

let arr3 = [1,2,3,4];
arr3.shift();
console.log(arr3);
// shift shuru ka element hata deta hai


let arr4 = [1,2,3,4];
arr4.unshift(0);
console.log(arr4);
// unshift shuru me element add krta hai

let arr5 = [10, 20, 30];
console.log(arr5.length); // 3
// array ke total elements btata hai


let arr6 = [1,2,3,4];
console.log(arr6.includes(2));
// check krta hai value array me hai ya nahi


let arr7 = [1,2,3,4];
console.log(arr7.indexOf(2));
// element kis index pe hai btata hai

let arr8 =[1,2,3,4];
console.log(arr8.join("-"));
console.log(typeof arr8);
// join array ko string me convert krta hai, separator k sath or eski type object ho gy , jb b array pr typeof lagae gy to wo hmy aik object return return kry ga


let arr9 = [1, 2, 3];
arr9.reverse();
console.log(arr9); // [3, 2, 1]
// reverse array ko ulta kr deta hai

let arr10 = [1,2,3,6,5,8,7];
console.log(arr10.sort());
// sort choti se badi tartib me lagata hai (as string sort hoti hai)

let arr11 = [1,2,3,4,5,6,7];
console.log(arr11.slice(1,4));
// slice array ka tukra return krta hai (original change nahi hota),last element count nhi hota


let arr12 =[0,1,2,3,4,5,6,7,8]
console.log(arr12.splice(1,6));
console.log(arr12);
// splice beech ke element hata deta hai (original array badal jata hai) or last index b include hota hai .


let arr13 = [1,2,3,4,5]
arr13.forEach(function(el){
    //console.log(el);
});
// for eaach har element pe kaam krta hai (loop ki tarah) Return kuch bhi nahi karta (undefined).


let arr14 = [1,2,3,4,5];
let doubled = arr14.map(function(el){
    return el * 2;
})
console.log(doubled);
console.log(arr14);
// map Har element par function chalata hai.Jo return karte ho, usse ek naya array banata hai.Original array change nahi hoti.


let arr15 = [10,20,30,40,50];
let filterNumber = arr15.filter(function(num){
    return num>10
})
console.log(filterNumber);
// filter Har element par condition lagata hai.Jo true hote hain, sirf unko new array me dalta hai.Original array ko change nahi karta.


let arr16= [1,2,4,7];
let sum = arr16.reduce(function(acc , curr){
    return acc + curr ;
},0);
console.log(sum);
//  reduce Ye ek value banata hai sab elements ko mila kar — jaise sum, total, etc. Ye array nahi, single value return karta hai.


let arr17 = [10, 15, 20, 25]; 
let foundNumber = arr17.find(function(num){
    return num>10;
}); 
console.log(foundNumber);  
// find method First matching element ko return karne ke liye based on a condition.Ye ek new value return karta hai (na ke new array), aur sirf pehla match return karta hai. 



// let arr1 = [1, 2]; 
// let arr2 = [3, 4]; 
// let arr3 = arr1.concat(arr2); 
// console.log(arr3);  // Output: [1, 2, 3, 4] 
// concat method Do ya zyada arrays ko combine karne ke liye. 



//spread
let array1 = [1, 2, 3];
let array2 = [...arr1];
console.log(arr2); // [1, 2, 3]
// arr1 ke tamam elements arr2 me copy ho gaye using spread.

 //spread Arrays ko Merge krny ke liye
 let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c); // [1, 2, 3, 4]




//flate
let myarray = [1, 2, [3, [4, 5]]];
let result = myarray.flat(2); 
console.log(result); // [1, 2, 3, 4, 5]
//flat() ek array method hai jo nested (andhar wale) arrays ko "flatten" karta hai.Yani agar array ke andar aur arrays hain, to wo unhe baahir nikal kar ek single array bana deta hai.




