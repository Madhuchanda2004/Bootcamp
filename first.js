let btn=document.createElement("button");
btn.innerText="Change Mode";
const node=document.querySelector("#node");
node.prepend(btn);


btn.style.width="5vw";
btn.style.height="5vw";

let body=document.querySelector("body");
let currMode="Light";

btn.addEventListener ("click",()=>{
    if (currMode === "Light"){
        currMode="Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})