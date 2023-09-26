var enterButton = document.getElementById("enter");
var Input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return Input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(Input.value)); 
  ul.appendChild(li);
  Input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOut);

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));

  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);

