// let score = "33abc"


let score = null
// null k case me zero value ae gy agr esko number me convert kry gy to 

// let score = undefined
// undefined k case me undefined value ae gy 


// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber); 
// score me value number me convert ho to gae but actual me nmbr nhi hai 
// console.log(valueInNumber);

// for notes when converts in number
// "33"=>33
// "33abc"=>NaN
// true=>1 , false=>0



let login=1;
let isLoggedInUser =Boolean(login);
// console.log(isLoggedInUser)

// for notes when convert in boolean
// 1=>true , 0=>false
// ""=>false
// "abscd"=>true


let someNumber = 43;
let numberToString= String(someNumber);
// console.log(numberToString);
// console.log(typeof numberToString);



// ************************operations***********************



console.log("5" + 2);     // "52" (Number 2 is converted to string) 
console.log("5" - 2);     // 3   (String "5" is converted to number) 
console.log("5" * "2");   // 10  (Both strings converted to numbers) 
console.log(1 + true);    // 2   (true → 1) 
console.log(1 + null);    // 1   (null → 0)

console.log(1+"2");        // 12
console.log("1"+2+2);      // 122
console.log(1+2+"3");      // 33



// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter);

// let gameCounter = 100;
// ++gameCounter;
// console.log(gameCounter);


// let x = 5;
// let y = x++;
// console.log(x); // 6
// console.log(y); // 5  <-- x ki purani value assign hui



let x = 5;
let y = ++x;
console.log(x); // 6
console.log(y); // 6  <-- x ki nayi value assign hui




