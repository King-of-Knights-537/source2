const BtnAdd = document.querySelector(".btn-add");
const DivContainer = document.getElementById("project-container");

BtnAdd.addEventListener("click", AddNew);

function AddNew() {
  const newDiv = document.createElement("div");
  const newInput = document.createElement("input");
  console.log("add");
  newDiv.classList.add("each-project");
  DivContainer.appendChild(newDiv);
}