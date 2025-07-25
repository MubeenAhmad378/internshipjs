//Falsy Values (Jo false samjhi jati hain in conditionals):Ye values condition mein false treat hoti hain:

//   false	        Direct false
//     0	        Zero
//    -0	         Negative zero
//    ""	         Empty string
//    null	         Khali ya na-mojood value
//   undefined	     Undefined (naam to hai, value nahi)
//   NaN	         Not a Number



//truthy Values (Jo true treat hoti hain):Jo bhi Falsy nahi hoti, woh Truthy hoti hai. Examples:

//   "Hello"	    Non-empty string
//   1, -5, 3	    Any non-zero number
//   []	            Empty array bhi truthy hai
//   {}	            Empty object bhi truthy hai
//   true	         Direct true


const userEmail = "mubeen@gmail.com";
if (userEmail) {
    console.log("you wil be looged in in our website");
    
}else{
    console.log("please input email address");
    
}

// const userEmail = "";
// if (userEmail) {
//     console.log("you wil be looged in in our website");
    
// }else{
//     console.log("please input email address");
    
// }


const userEmail1 = [];
if (userEmail1.length===0) {
    console.log("you wil be looged in in our website");
    
}else{
    console.log("please input email address");  
}

const userEmail2 = {};
if (Object.keys(userEmail2).length === 0) {
    console.log("object is empty");
} else {
    console.log("object has some data");
}




// flase === 0     result true
// flase === ''    result true
// 0 === ''        result true
