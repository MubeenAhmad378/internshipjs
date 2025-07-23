const firstName = "mubeen";
const lastName = " ahmad";

// old way
// console.log(firstName+lastName+" welcome in string section");

// string interplotation mean inject variable directly in it .
// console.log(`My name is ${firstName}${lastName} And i am 20 year old`);

// another method to declared string
const gameName = new String("i am good");

// console.log(myStr[0]);

// es me prototype k sary method access kr skty hai using dot
// console.log(myStr.length);

// console.log(myStr.__proto__);

// console.log(myStr.toUpperCase()); // but original value me change nhi kry ga

// console.log(myStr.charAt(5));

const newStr = gameName.substring(0, 4); // 4 include nhi ho rha ye excluding hota
// console.log(newStr);

const anotherStr = gameName.slice(-4);
// console.log(anotherStr);

// let str = "  Hello JavaScript World!  ";

// // 1. length
// console.log("1. Length:", str.length); // Total characters including spaces

// // 2. toUpperCase()
// console.log("2. Uppercase:", str.toUpperCase());

// // 3. toLowerCase()
// console.log("3. Lowercase:", str.toLowerCase());

// // 4. trim()
// console.log("4. Trim:", str.trim());

// // 5. trimStart()
// console.log("5. Trim Start:", str.trimStart());

// // 6. trimEnd()
// console.log("6. Trim End:", str.trimEnd());

// // 7. includes()
// console.log("7. Includes 'JavaScript':", str.includes("JavaScript"));

// // 8. startsWith()
// console.log("8. Starts with '  Hello':", str.startsWith("  Hello"));

// // 9. endsWith()
// console.log("9. Ends with '!  ':", str.endsWith("!  "));

// // 10. indexOf()
// console.log("10. Index of 'JavaScript':", str.indexOf("JavaScript"));

// // 11. lastIndexOf()
// console.log("11. Last index of 'o':", str.lastIndexOf("o"));

// // 12. slice(start, end)
// console.log("12. Slice (7, 17):", str.slice(7, 17));

// // 13. substring(start, end)
// console.log("13. Substring (7, 17):", str.substring(7, 17));

// // 14. substr(start, length)
// console.log("14. Substr (7, 10):", str.substr(7, 10)); // Deprecated, still works

// // 15. replace()
// console.log("15. Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS"));

// // 16. replaceAll()
// // console.log("16. ReplaceAll 'l' with '*':", str.replaceAll("l", "*"));

// // 17. split()
// console.log("17. Split by space:", str.split(" "));

// // 18. concat()
// let greeting = "Hi, ";
// console.log("18. Concat:", greeting.concat("I'm learning JS!"));

// // 19. charAt()
// console.log("19. Character at index 6:", str.charAt(6));

// // 20. charCodeAt()
// console.log("20. Unicode at index 6:", str.charCodeAt(6));

// // 21. repeat()
// console.log("21. Repeat:", "JS ".repeat(3));

// // 22. padStart()
// console.log("22. Pad Start:", "5".padStart(4, "0")); // 0005

// // 23. padEnd()
// console.log("23. Pad End:", "5".padEnd(4, "*")); // 5**

// // 24. match()
// console.log("24. Match 'World':", str.match(/World/));

// // 25. search()
// console.log("25. Search 'JavaScript':", str.search("JavaScript"));

// // 26. localeCompare()
// console.log("26. Compare 'apple' to 'banana':", "apple".localeCompare("banana"));

// // 27. valueOf()
// console.log("27. valueOf():", str.valueOf());

// // 28. toString()
// console.log("28. toString():", str.toString());

// // 29. normalize()
// console.log("29. normalize():", "é".normalize());

// // 30. codePointAt()
// console.log("30. codePointAt(1):", "💙".codePointAt(0)); // Unicode code point

//  Problem 1: Count Characters
// Q: Ek function banao countCharacters(str) jo kisi string ka total character count return kare (spaces ko mila kar).

function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("i am muben"));

//🧠 Problem 2: Convert to Title Case
//Q: Ek function toTitleCase(str) banao jo har word ka first letter capital kare

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
 //console.log(toTitleCase("i am backend developer"));

// without function
let str = "i am mubeen and backend developer";
let result = str
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

// console.log(result);

//Problem 3: Reverse String
//Q: Ek function reverseString(str) banao jo string ko ulta kar de.

function reverseString(str){
    return str.split("").reverse().join("")
}
// console.log(reverseString("javascript"));

// custom function without built in method
function reversestr(str){
  let reversed ="";
  for(let i=str.length-1 ; i>=0 ; i--){
   reversed += str[i];
  }
  return reversed;
}
//console.log(reversestr("javascript"));




//🧠 Problem 4: Check Palindrome
//Q: Ek function isPalindrome(str) banao jo check kare ke string palindrome hai ya nahi. (e.g. "madam")

function isPalindrome(str){
  let reversed= str.split("").reverse().join("");
  return reversed === str;
}
// console.log(isPalindrome("madam"));


// custom function 

function isPalindrome(str){
 let reversed = "";
 for(let i = str.length-1 ;i>=0 ; i--){
  reversed += str[i];
 }
 return str === reversed
}
 console.log(isPalindrome("madam"));



 //🧠 Problem 5: Count Occurrences of a Letter
//Q: Function countLetter(str, letter) likho jo kisi letter ka count bataye string ke andar.

function countLetter(str ,letter){
  let count= 0;
  for (let char of str){
    if(char===letter) count++
  }
  return count ;
}
console.log(countLetter("backend developer"));

