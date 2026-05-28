let bot1= document.querySelector("#bot1")
console.dir(bot1);

bot1.onclick=()=>{
    if(document.body.style.backgroundColor===""){
        document.body.style.backgroundColor="pink"
    }
    else if(document.body.style.backgroundColor==="pink"){
        document.body.style.backgroundColor="skyblue";
    }
    else{
        document.body.style.backgroundColor="pink";
    }
    console.log("Button is clicked")
}

let bot2=document.querySelectorAll(".button");
console.dir(bot2);

bot2[0].onmouseover=()=>{
    console.log("you hovered on button 2")
}

bot2[1].ondblclick=(event)=>{
    console.log("you double clicked on button 3")
    console.log(event);
}

let bot3=document.querySelector("#bot3")
let handler2=()=>{
    console.log("you clicked on button 4-handler 2");
}

bot3.addEventListener("click",()=>{
    console.log("you clicked on button 4-handler 1");
})

bot3.addEventListener("click",handler2)

bot3.addEventListener("click",()=>{
    console.log("you clicked on button 4-handler 3");
})

bot3.removeEventListener("click",handler2)