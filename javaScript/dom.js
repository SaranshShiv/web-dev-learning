console.log("DOM practice")
// alert("Hello welcome to learning DOM in JavaScript");
//  let no =prompt("enter a no: ");
// //console.log(no);

// if(no==69){
//     alert("fuck you");
// }

console.log(document);
console.dir(document);
console.dir(document.body);
console.log(document.body);

let no=2;

if(no==1){
    document.body.style.backgroundColor ="blue";
}

let access= document.getElementById("header");
console.dir(access);

let heading=document.getElementsByClassName("heading"); 
console.dir(heading);
console.log(heading);  

let paras=document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

let firstEl= document.querySelector(".heading");
console.dir(firstEl);

let allEl = document.querySelectorAll(".heading");
console.dir(allEl);

let bot= document.getElementById("button");
console.dir(bot);

console.log(document.firstChild);
console.log(document.lastChild);

let elements = document.getElementsByClassName("heading")
console.log(elements);
console.log(elements[0]);

let div= document.querySelector("div");
console.dir(div);

console.log(div.innerText); 

console.log(div.innerHTML);

// div.innerText="Hello World";
console.log(div.innerText);