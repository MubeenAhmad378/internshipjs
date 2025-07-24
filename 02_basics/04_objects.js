// singleton yani contructor k through object kaise declared krty hai . 

const tinderUser = new Object();
// console.log(tinderUser);

tinderUser.id = "1234"
tinderUser.name = "ali hassan"
tinderUser.email = "ali@gmail.com"
// console.log(tinderUser);
console.log( Object.keys(tinderUser)); 



// object k ander object.......nested object

const regularUser= {
    email : "mubeen@gmail.com",
    fullName :{
        userFullName:{
            firstName : "ali",
            lastName : "hamza"
        }
    }
}

//console.log(regularUser);
console.log(regularUser.fullName.userFullName.firstName);


// agr hmny 2 object ko merge krna ho to object.assign() use kr skty hai.Object.assign() JavaScript ka built-in method hai jo objects ko merge (jornay) ya copy karne ke liye use hota hai. spread operator b use kr skty hai 
  
const obj1 = {
    0:"a",
    1:"b"
};
const obj2 = {
    2 : "c",
    3 : "d"
}
// const obj3 = Object.assign(obj1,obj2);
const obj3 = {...obj1,...obj2}  // by using spread operator
console.log(obj3);


//user ka data humne ek khaali object {} me copy kar ke copy bana liya.
const user = { name: "Mubeen", age: 24 };
const copy = Object.assign({}, user);
console.log(copy); // { name: 'Mubeen', age: 24 }



//   Same keys hone par overwrite hota hai.age pehle 20 tha, lekin b wale age: 30 ne overwrite kar diya.
const a = { name: "Ali", age: 20 };
const b = { age: 30, city: "Lahore" };
const merged = Object.assign({}, a, b);
console.log(merged); // { name: 'Ali', age: 30, city: 'Lahore' }



 // Target object ko hi update karna📌  target object hi update ho gaya.
const target = { name: "Sara" };
const update = { city: "Karachi" };
Object.assign(target, update);
console.log(target); // { name: 'Sara', city: 'Karachi' }



 // Deep Copy nahi karta!📌  Nested object ke andar jo data hota hai, wo reference ke through jata hai. Isliye deep copy nahi hoti.
 const obj = {
  name: "Ali",
  info: {
    age: 25,
  },
};
const copy1 = Object.assign({}, obj);
copy1.info.age = 30;

console.log(obj.info.age); // ❗ 30 (original bhi change ho gaya)



//******************************** object destructuring **************** */

const course = {
    courseName : "javascript",
    price: 987,
    courseInstructor : "farhan Bandesa"
}

//one way to extract course object properties is dot or square bracket 
console.log(course.courseInstructor);
console.log(course["courseInstructor"]);

// second way is destructuring , Object destructuring se hum object ke andar ke properties ko key ke name se extract karte hain.
const{courseInstructor,price}= course;
console.log(courseInstructor,price);

const{courseInstructor:Instructor}= course;
console.log(Instructor);





//for...in (loop over object keys).Object ke har key ke liye loop.
const user1 = { name: "Mubeen", age: 24 };
for (let key in user1) {
  console.log(key, user1[key]);
}



//********************************* json method *********** */

//JSON.stringify(obj). object ko string mein convert karta hai (mostly API responses mein).
const user2 = { name: "Mubeen" };
console.log(JSON.stringify(user2)); // '{"name":"Mubeen"}'


//JSON.parse(string).String ko phir se object mein badal deta hai.

const str = '{"name":"Mubeen"}';
const objstr = JSON.parse(str);
console.log(objstr); // { name: 'Mubeen' }



// Spread Operator {...obj}. Object copy karne ya merge karne ke liye.
const username = { name: "Mubeen" };
const copyobj = { ...user, age: 24 };
console.log(copyobj); // { name: "Mubeen", age: 24 }

