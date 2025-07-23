const score = 400;
console.log(score);

// another method meythod to decalare number
const balance = new Number(300);
console.log(balance);

console.log(balance.toString()); // convert the number into string
console.log(balance.toString().length); // ab ye number aik string bn gea hai or string k sb metod apply kr skty hai es pr.

console.log(balance.toFixed(2)); // use in ecomernce website in calculation to precise the value 


const anotherNumber = 123.9876;
//console.log(anotherNumber.toPrecision(3)); //124 

const hundreds = 1000000;
//console.log(hundreds.toLocaleString());  //1,000,000 value prny me asany hoty hai ka kitny zero hai ya digit ,  its show the result usa according 

// find minimum and mazimum number in array 
function findMinMax(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i=1 ; i<arr.length ;i++){
        if(arr[i]<min){
            min = arr[i]
        }
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return{min,max};
}
const numbers = [3, 7, 1, 9, -5, 2];
const result = findMinMax(numbers);
//console.log("Min:", result.min); // -5
//console.log("Max:", result.max); // 9


//****************************math******************************** */

console.log(Math);

console.log(Math.abs(-4));// sirf minus value ko positive krta hai 

console.log(Math.round(45.9)); // 46  value round off krny k lie use hota 

console.log(Math.ceil(4.2));//5 es me hmesha top value choice krta hai 

console.log(Math.floor(4.2));//5 es me hmesha bottom value choice krta hai lowervalue

console.log(Math.min(4,5,6,7,8,9));//4 es me hmesha array me minimum value choice krta hai 

console.log(Math.max(4,5,6,7,8,9));//9 es me array me hmesha maximum value choice krta hai 


console.log(Math.random());// es me hmesha random value generte krta hai zero sy 1 k btw

console.log(Math.random()*10 +1);

console.log(Math.floor(Math.random()*10) +1);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)) +min);




