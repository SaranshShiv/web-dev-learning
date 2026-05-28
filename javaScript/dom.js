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

let h=document.querySelector("#heading2");
h.append(", students studying in btech cs branch")

let divbox= document.querySelectorAll(".box")
console.log(divbox);

divbox[1].style.backgroundColor="red";

let i=0;
divbox.forEach((el)=>{
     el.append("  Hell0 this is box "+(i+1))
     i++
})

let p1= document.querySelector("#p1")
console.log(p1.innerText);
console.dir(p1)

console.log(p1.getAttribute("id"))

//(id or class that is attribute, and the new name);
p1.setAttribute("id","paragraph") 
console.log(p1.getAttribute("id"))

console.log(divbox[0].getAttribute("style"))
console.log(divbox[0].style)

divbox[0].style.backgroundColor="skyblue";

document.body.style.backgroundColor="pink";

bot.onclick= ()=>{
    alert("haha nothing happens");
    paragraph.scrollIntoView({behavior:"smooth"});
}

//to create an new element
let newHeading = document.createElement("h2")
let newbot= document.createElement("button")

newHeading.innerHTML = "<i>This is created using JavaScript</i>"
newbot.innerText = "dont Click"

//to add and element; (append, prepend, before, after)
document.body.append(newHeading);
divbox[1].before(newbot)


//to remove an element
let para1= document.querySelector("#para1");
para1.remove()

//practice question 1;

let newbutton= document.createElement("button");
newbutton.innerText="click me";

newbutton.style.backgroundColor="red"
newbutton.style.color="white"

document.body.prepend(newbutton)

let paranew= document.querySelector(".contentpara");
paranew.classList.add("newclass")
