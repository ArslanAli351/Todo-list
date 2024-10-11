const from = document.querySelector("#todofrom");
const todolist = document.querySelector("#Todolist");
const todoinput = document.querySelector("#inp");


const DataArray = ["HTML", "CSS", "JavaScript"];
localStorage.setItem("List", JSON.stringify(DataArray));
const Todolist = JSON.parse(localStorage.getItem("List"));
Todolist.map((value) => {
    todolist.innerHTML += `<li>${value}</li>`
})

let inpValue;
from.addEventListener("submit", (event) => {
    event.preventDefault()
    const todoVal = event.target.children[0].value;
    inpValue = todoVal
    localStorage.setItem("inpval", inpValue)
    const inpValuePrint = localStorage.getItem("inpval");
    todolist.innerHTML += `<li>${inpValuePrint}</li>`
    event.target.reset();
})























