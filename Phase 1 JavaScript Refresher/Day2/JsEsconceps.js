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
