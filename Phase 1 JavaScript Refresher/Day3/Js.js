// DOM Methods
// getElementById(), getElementByClassName(), getElementByTagName()

// let heading = document.getElementById("heading").innerHTML = "js Magic"


document.querySelector("button").onclick = function(){
    alert("Clicked");
}


document.querySelector("p").onmouseover = () => {
    document.getElementById("para").innerHTML = "GoodBye!!"
}


const bg = document.getElementsByTagName("body")[0];
const red = document.getElementById("Btn-Red");
const blue = document.getElementById("Btn-Blue");
const green = document.getElementById("Btn-Green");

red.addEventListener("click", ()=> {
    bg.style.backgroundColor = "red";
})

blue.addEventListener("click", ()=> {
    bg.style.backgroundColor = "blue";
})

green.addEventListener("click", ()=> {
    bg.style.backgroundColor = "green";
})