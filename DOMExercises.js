document.getElementById("container"); 
document.querySelector("#container"); //CSS Syntax//
document.querySelectorAll(".second"); //CSS Syntax//
document.querySelector("ol .third");

let containerSect = document.querySelector("#container");
containerSect.innerText = "Hello"; 

let divFooter = document.querySelector(".footer");
divFooter.classList.add("main");
//divFooter.classList.remove("main");//


let newLi = document.createElement("li");
newLi.innerText = "four";

let ulLi = document.querySelector("ul");
ulLi.append(ulLi);

let liLoop = document.querySelectorAll("ol li");

for(let i = 0; i < liLoop.length; i++){
    liLoop[i].style.backgroundColor = "green";
}

let divFooter2 = document.querySelector(".footer");
divFooter2.remove();
