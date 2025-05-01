// // ------------ let const var --------------------
// // LET have Block Scope
// // LET must be declared before use
// // LET cannot be redeclared in the same scope

// //we cannot acces let out of block
// {
//   let a = 20;
// }
// console.log(a);


// // block scoped we can declare it multiple time in diffrent scopes it works
// {
//   let a = 20;
//   console.log(a);
// }
// {
//   let a = 2;
//   console.log(a);
// }


// // const 

// // cannot change its constant
// //error
// const name = "Tushar";
// name = "Tusharrajput";

// // var

// // var is function scoped

// //function
// function greet(name){
//     return "hello " + name;
// }

// //Expression Fn
// const greet = function (name) {
//     return "hello " + name;
// }

// //Arrow Fn
// const greet2 = (name) => {
//     "Hello" + name;
// }


// // anonmous fn
// setTimeout(function(){
//     console.log("hello")
// }, timeout);



// // Template Literals

// const fname = "Tushar";
// const lname = "Rajput";
// const age = 23;

// console.log(`Hey ${fname} ${lname} how are you buddy you born in ${new Date().getFullYear() - age}.`);


// // spread operator & rest operator
// const arr = [1,2,3,4,6,5];

// // console.log(...arr);

// function add(...arr){
//     for(let i=0; i<6; i++){
//         console.log(i + "okay buddy");
//     }
// }

// add(arr);




// //ternary
// let secret = 20;

// secret > 20 ? "yes":"no";



//array methods

// MAP

// return a new array with transformed values

const nums = [1,2,3,4];

const doublednums = nums.map(num => num * 2);
console.log(...doublednums);


// Filter

const FilteredNum = nums.filter(num => num % 2 == 0);
console.log(FilteredNum);


//Find

// returns first matching element

const users = [
    {id : 1,name : "Tushar"},
    {id : 2,name : "Ujjwal"},
    {id : 3,name : "Ayush"},
    {id : 4,name : "Kunal"},
    {id : 5,name : "Mayank"}
];

const FindUser1 = users.find(user => user.id == 1);
console.log(FindUser1);


// Reduce

// it reduce the value to one element

const sum = nums.reduce((acc,curr) => acc + curr, 0);
console.log(sum);


// practice
// Create array of numbers → filter even numbers

const arr1 = [123,21,214,25,34345,5,44,5645,645,45,6456,423,22];

const filteredarr = arr1.filter(num => num % 2 == 0);
console.log(...filteredarr);


// Map over array of users → return names

let GameUsers = ["max","micha","John"];

console.log(GameUsers.map(name => name));


// Use object destructuring in a function

// see i just passed the car whole object in fuction call and in my fuction i can directley get the object values it means the object is destructure automatically

function MyCar({name,brand,model}){
    console.log(`This is ${brand} ${name} model : ${model}`);
}

const car = {
    name:"Altroz",
    brand: "Tata",
    model:2023
}

MyCar(car);




// Merge two arrays/objects using spread

let array1 = [1,2,3,5,4];
let array2 = [34,4,31,25,5,6];

const mergedArr = [...array1, ...array2];
console.log(mergedArr);