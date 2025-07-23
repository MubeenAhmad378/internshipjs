
const myDate = new Date();
console.log(myDate);

console.log(new Date().toString());


const today = new Date();

console.log("Year:", today.getFullYear());       // 2025
console.log("Month:", today.getMonth() + 1);     // 7 (0 se 11 hota hai)
console.log("Date:", today.getDate());           // 23
console.log("Day:", today.getDay());             // 3 (Sunday=0, Wednesday=3)

console.log("Hours:", today.getHours());         // Pakistan time ke hisaab se
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());


console.log(Date.now());  // e.g., 1753252500000



console.log(new Date().toLocaleDateString()); // e.g., "7/23/2025"
console.log(new Date().toLocaleTimeString()); // e.g., "4:40:15 PM"
console.log(new Date().toLocaleString());     // e.g., "7/23/2025, 4:40:15 PM"



console.log(Math.floor(Date.now()/1000)); //milisecond ko send me convert kia 
