

const from=document.querySelector("#todofrom");
const todolist=document.querySelector("#Todolist");


let array=["Github","Linkdin","leetcode"];
localStorage.setItem("List",JSON.stringify(array))

// const Todolist=JSON.parse(localStorage.getItem("List"));
// console.log(Todolist);
   const Todolist=JSON.parse(localStorage.getItem("List"));

Todolist.map((value)=>{
    todolist.innerHTML+=`<li>${value}</li>` 
   })
// let array2=[]
from.addEventListener("submit",(event)=>{
    event.preventDefault()
let todoVal=event.target.children[0].value;
   todolist.innerHTML+=`<li>${todoVal}</li>` 

localStorage.setItem("val",todoVal)
event.target.reset();

})

// localStorage.setItem("v",JSON.stringify(array2))

























