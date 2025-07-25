// JavaScript (JS) Kaise Kaam Karta Hai? - In-depth Explanation 
// JavaScript (JS) ek high-level, interpreted programming language hai jo web browsers aur servers dono  pe chalta hai. Iski khas baat ye hai ke JS client-side scripting ke liye use hota hai, matlab browser mein directly run hota hai, lekin aaj kal server-side (Node.js) pe bhi use hota hai. 



// JavaScript Kaam Karne Ka Tareeqa (How JS Works): 
// 1. Parsing (Code Ko Samajhna) 
// • Jab tum browser mein koi JS code load karte ho, toh sabse pehle JS engine (jaise Chrome mein 
// V8) tumhare code ko parse karta hai. 
// • Parsing ka matlab hai code ko read karna, syntax errors check karna, aur Abstract Syntax Tree 
// (AST) banani, jo JS code ka structured representation hota hai.




// 2. Compilation (Code Ko Machine-Readable Form Mein Convert Karna) 
// • JavaScript traditionally interpreted hota tha, matlab line-by-line execute hota tha bina pehle 
// compile kiye. 
// • Lekin aaj kal JS engines Just-In-Time (JIT) compilation karte hain. 
// • Iska matlab hai ke code ko runtime pe compile karke optimized machine code mein convert 
// kiya jata hai taake fast execution ho. 



// 3. Execution Context and Call Stack 
// • Execution Context: Jab JS code run hota hai, toh har function ke liye ek execution context create 
// hota hai jisme local variables, arguments, aur scope hota hai. 
// • Call Stack: JS ek single-threaded language hai, matlab ek waqt mein sirf ek kaam kar sakti hai. 
// Functions ka call stack maintain karta hai jo currently running functions ko track karta hai. 
// Example: 
// function first() { 
// second(); 
// console.log("First"); 
// } 
// function second() { 
// console.log("Second"); 
// } 
// first(); 
// • first() call hota hai, stack mein add hota hai. 
// • first() ke andar second() call hota hai, stack mein add hota hai. 
// • second() run karke stack se remove hota hai. 
// • first() apna baaki ka code run karta hai aur stack se remove hota hai. 




// 4. Memory Management 
// • JS engine automatically memory allocate karta hai variables, functions, objects ke liye. 
// • Jab variables ya objects use nahi hote, toh Garbage Collector unki memory free karta hai. 
// • Is se programmers ko manually memory manage karne ki zarurat nahi hoti. 



// 5. Event Loop and Asynchronous JavaScript 
// • JavaScript single-threaded hone ke bawajood asynchronous programming support karta hai. 
// • Event Loop JS ki khasiyat hai jo non-blocking code execute karta hai. 
// Kaam kaise karta hai? 
// • JS engine main thread pe synchronous code execute karta hai. 
// • Jo asynchronous tasks hote hain (e.g., timers, network requests), wo Web APIs (browser ke 
// background processes) mein chalte hain. 
// • Jab async task complete hota hai, toh uska callback Callback Queue mein chala jata hai. 
// • Event Loop continuously check karta hai ke main thread free hai ya nahi. Jab free hota hai, wo 
// callback queue se ek callback uthakar execute karta hai. 
// Example: 
// console.log("Start"); 
// setTimeout(() => { 
// console.log("Timeout finished"); 
// }, 1000); 
// console.log("End"); 
// Output: 
// Start 
// End 
// Timeout finished 
// • "Timeout finished" async hai isliye last mein print hota hai. 





// 6. Scope and Closures 
// • Scope define karta hai ke variables kaunse parts mein accessible hain. 
// • JS mein mainly do types ke scope hote hain: Global aur Local (Function/Block) scope. 

// • Closure ek function ka apne outer function ke variables ko yaad rakhne ka feature hai, bhale hi 
// outer function execute ho chuka ho. 


// 7. Hoisting 
// • JavaScript mein variable aur function declarations ko unke actual code execution se pehle  memory mein allocate kiya jata hai. • Matlab tum variables aur functions ko unke declaration se pehle bhi use kar sakte ho, lekin unka 
// value undefined hota hai jab tak unhe assign nahi kiya jata.