const from = document.querySelector("#todofrom");
const todolist = document.querySelector("#Todolist");
const todoinput = document.querySelector("#inp");

var DataArray = ["HTML", "CSS", "JavaScript"];
if (!localStorage.getItem("List")) {
  localStorage.setItem("List", JSON.stringify(DataArray));
}
var DataArray = JSON.parse(localStorage.getItem("List"));

from.addEventListener("submit", (event) => {
  event.preventDefault();
  var array = JSON.parse(localStorage.getItem("List"));
  todoVal = event.target.children[0].value;
  array.push(todoVal);
  localStorage.setItem("List", JSON.stringify(array));

  todolist.innerHTML += `<p> ${todoVal}</p>`;
  event.target.reset();
});

DataArray.map((value) => {
  todolist.innerHTML += `<p> ${value}</p>`;
});
