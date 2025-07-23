//problem 1. Reverse an array

// built in method
let arr = [1,2,3,4];
console.log(arr.reverse());

// custom method 
let myArray = [1,2,3,4,5];
let Reverse = [];
for(let i=myArray.length-1;i>=0;i--){
  Reverse.push(myArray[i]);
}
console.log(Reverse);



// problem 2. Find max number in array

// built in method
let maxNumber = [1,2,3,4,5,6,7];
console.log(Math.max(...maxNumber));

// custom method
let maxNum = [1,2,3,4,5,6,7,8,9];
let max =[0];
for (let i = 1; i < maxNum.length; i++) {
    if(maxNum[i] > max){
        max = maxNum[i]
    }
}
console.log(max);



//problem 3. Remove duplicates

// built in method 
let duplicate = [1,2,2,2,3,4,5,6]
let unique= [...new Set(duplicate)];
console.log(unique);

// custom method
let duplicateArr = [1,3,3,3,4,4,5,6,7,8]
let uniques = [];
 for( let i = 0 ; i<duplicateArr.length ;i++){
    if(!uniques.includes(duplicateArr[i])){
        uniques.push(duplicateArr[i])
    }
 }
 console.log(uniques);
 


 //problem  4. Sum of array elements

 // built in method
 let sumArr = [1,2,3,4,5];
 let sum = sumArr.reduce(function(acc,curr){
    return acc + curr;
 })
console.log(sum);

// custom method
let sumofArray = [1,2,3,4,5,6];
let sum1 = 0;
for(let i = 0 ; i<sumofArray.length ; i++){
   sum1 += sumofArray[i];
}
console.log(sum1);



// 5. Find even numbers

// built in method
let evenArr= [1,2,3,4,5,6,7,8,9]
let even = evenArr.filter(function(num){
    return num % 2===0
})
console.log(even);

//custom method
let evenNumArr = [1,2,3,4,5,6,7,8,9,10];
let even1 = [];
for (let i = 0 ; i<evenNumArr.length ; i++){
    if(evenNumArr[i]% 2 === 0){
        even1.push( evenNumArr[i]);
    }
}
console.log(even1);



 // problem 6. Check if element exists

 // built in method
 let elementArr =[1,2,3,4,5];
 console.log(elementArr.includes(2));
 

 // custom method 
 let elementArray = [1,2,3,4,5,6];
 let found= false;
 for(let i = 0 ; i<elementArr.length ;i++){
    if(elementArray[i] === 2){
        found = true;
        break;
    }
 }
 console.log(found);
 


 // problem 7. Count occurrences of a number

 // built in method 
 let countArr = [1,2,2,3,4,5,2,2];
 let count = countArr.filter(function(num){
    return num === 2
 }).length;
 console.log(count);
 
 // custom mthod
 let countArray = [1,2,3,4,4,4,4,4,5,6,6,7];
 let count1 = 0 ;
 for (let i = 0 ; i < countArray.length ; i++){
    if(countArray[i]===6){
        count1 ++;
    }
 }
 console.log(count1);
 

 
 //Problem 9. Find first odd number

 let arrodd = [4, 6, 3, 2];
let firstOdd = arrodd.find(num => num % 2 !== 0);
console.log(firstOdd);


// custom method
let oddArr = [4, 6, 3, 2];
let firstOddNum = null;

for (let i = 0; i < oddArr.length; i++) {
  if (arr[i] % 2 !== 0) {
    firstOddNum = arr[i];
    break;
  }
}
console.log(firstOddNum);
