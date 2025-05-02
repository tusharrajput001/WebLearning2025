// callbacks
// when a function call another function from parameters is callback

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(n1,n2, myCallback){
//     let sum = n1 + n2;
//     myCallback(sum);
// }

// myCalculator(2,3,myDisplayer);

// //another ex

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// const posNum = removeNeg(myNumbers, (x)=> x >= 0);

// function removeNeg(numbers, callback){
//     const myArr = [];
//     for(const x of numbers){
//         if(callback(x)){
//             myArr.push(x);
//         }
//     }
//     return myArr;
// }

//Promise 

let p = new Promise((res, rej) => {
  let a = 1 + 1;
  if (a == 2) {
    res("Successful");
  } else {
    rej("Failed");
  }
});

p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});


// EXample 2
const userquit = false;
const userWatchingMeme = false;

function PlayinValorantPromise() {
  return new Promise((res, rej) => {
    if (userquit) {
      rej({
        name: "User Quit",
        message: "Play ludo",
      });
    } else if (userWatchingMeme) {
      rej({
        name: "Seriously",
        message: "Thrower",
      });
    } else {
      res("GG");
    }
  });
}

PlayinValorantPromise
.then(
  ((message) => {
    console.log("Success: " + message);
  })
.catch((error) => {
    console.log(error.name + " " + error.message);
  })
);


// ASYNC AWAIT

// Functions running in parallel with other fns are called async fns
// to overcome the promise chaining

// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise


// async always return a promise
async function sayHello(){
    return "Hello";
}

sayHello().then(msg => console.log(msg));

// await is used inside the async to pause the async fn until it executed.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
    console.log("Before Waitin");
    await delay(3000);
    console.log("After Waiting");
}


greet();

// API Fetch

async function getUser() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        console.log(user);
    }
    catch(error){
        console.log("Error : ", error);
    }
}

getUser();