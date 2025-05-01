// ------------ let const var --------------------
// LET have Block Scope
// LET must be declared before use
// LET cannot be redeclared in the same scope

//we cannot acces let out of block
{
  let a = 20;
}
console.log(a);


// block scoped we can declare it multiple time in diffrent scopes it works
{
  let a = 20;
  console.log(a);
}
{
  let a = 2;
  console.log(a);
}


// const 

// cannot change its constant
//error
const name = "Tushar";
name = "Tusharrajput";

// var

// var is function scoped

//function
function greet(name){
    return "hello " + name;
}

//Expression Fn
const greet = function (name) {
    return "hello " + name;
}

//Arrow Fn
const greet2 = (name) => {
    "Hello" + name;
}


// anonmous fn
setTimeout(function(){
    console.log("hello")
}, timeout);



// Template Literals

const fname = "Tushar";
const lname = "Rajput";
const age = 23;

console.log(`Hey ${fname} ${lname} how are you buddy you born in ${new Date().getFullYear() - age}.`);


// spread operator & rest operator
const arr = [1,2,3,4,6,5];

// console.log(...arr);

function add(...arr){
    for(let i=0; i<6; i++){
        console.log(i + "okay buddy");
    }
}

add(arr);




//ternary
let secret = 20;

secret > 20 ? "yes":"no";