//JavaScript mein loops ka use hota hai code ko repeat karne ke liye, jab tak koi condition true ho. Yeh concept backend Node.js development mein bhi bohot use hota hai, jaise kisi array ke sabhi users ko process karna, data filter karna, etc.


// for loop:: Jab aapko kisi kaam ko fixed baar repeat karna ho.
for (let i = 0; i <= 10; i++) {
   //console.log("i =" , i);
    if(i==5){
        //console.log("5 is best number");
        
    }
}


// loop k ander loop
for(let i=0 ; i<=10 ; i++){
    //console.log(`outer loop is ${i}`);
    
    for(let j=0 ; j<=10 ; j++){
    //console.log(`ineer lop is ${j} and inner loop is ${i}`);
    
    }
}


// loop on array
let myHeros = ["salman", "ritik", "Akhsy"];
for (let index = 0; index < myHeros.length; index++) {
    const element = myHeros[index];
   // console.log(element);
    
    
}




//break & continue in loops
// break: loop se bahar nikal jaata hai
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  //console.log("value of break is:" ,i);  // prints 0, 1, 2
}

// continue: current iteration skip karta hai
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  //console.log("value of continue is:" ,i);  // prints 0, 1, 3, 4
}




//while loop :Jab aapko repeat karna ho jab tak koi condition true ho.
let index = 0;
while(index<=10){
    //console.log(`value ${index} is:`,index);
    index++;
    
}



//do...while loop:Yeh loop pehle ek baar run hoga, phir condition check karega. (At least once chalega)
let score = 1;
do {
    console.log(`score is ${score}`);
    score++;
    
} while (score<=10);