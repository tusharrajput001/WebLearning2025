// DOM Methods
// getElementById(), getElementByClassName(), getElementByTagName()

// let heading = document.getElementById("heading").innerHTML = "js Magic"

// document.querySelector("button").onclick = function(){
//     alert("Clicked");
// }

// document.querySelector("p").onmouseover = () => {
//     document.getElementById("para").innerHTML = "GoodBye!!"
// }

const bg = document.getElementsByTagName("body")[0];
// const red = document.getElementById("Btn-Red");
// const blue = document.getElementById("Btn-Blue");
// const green = document.getElementById("Btn-Green");

// red.addEventListener("click", ()=> {
//     bg.style.backgroundColor = "red";
// })

// blue.addEventListener("click", ()=> {
//     bg.style.backgroundColor = "blue";
// })

// green.addEventListener("click", ()=> {
//     bg.style.backgroundColor = "green";
// })

// let fname = document.getElementById("fullname");
// let password = document.getElementById("email");

// document.querySelector("#SaveID").onclick = () => {
//     let userData = {
//         username: fname.value,
//         email: email.value
//     };

//     localStorage.setItem("userInfo", JSON.stringify(userData));

//     //get item
//     const storedData = JSON.parse(localStorage.getItem("userInfo"));
//     console.log(storedData);
// }

document.getElementById("myForm").addEventListener("click", (e) => {
  e.preventDefault();
});
let submitBtn = document.querySelector("#submit");

submitBtn.onclick = () => {
  const fname = document.getElementById("Fname").value;
  const lname = document.getElementById("Lname").value;
  const email = document.getElementById("Email").value;
  const phone = document.getElementById("Phone").value;

  let payload = {
    firstname: fname,
    lastname: lname,
    email_id: email,
    phone_no: phone,
  };

  localStorage.setItem("formData", JSON.stringify(payload));

  const storedData = JSON.parse(localStorage.getItem("formData"));
  console.log(storedData);
};

document.querySelector("#SwitchBtn").onclick = () => {
  if (bg.style.backgroundColor === "black") {
    bg.style.backgroundColor = "white";
    document.getElementById("SwitchBtn").innerHTML = "Light Mode";
  } else {
    bg.style.backgroundColor = "black";
    document.getElementById("SwitchBtn").innerHTML = "Dark Mode";
  }
};
