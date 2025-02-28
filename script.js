function handleClick() {
  const list = document.querySelector("ul");
  const input = document.querySelector("input");

  const listItem = document.createElement("li");
  const btn = document.createElement("button");

  listItem.innerText = input.value;
  btn.innerText = "X";
  btn.addEventListener("click", () => {
    listItem.remove();
    saveList();
  });

  list.appendChild(listItem);
  listItem.appendChild(btn);

  input.value = "";
  saveList();
}

function saveList() {
  const listItems = document.querySelectorAll("ul li");
  const items = [];

  listItems.forEach((li) => {
    items.push(li.firstChild.textContent.trim());
  });
  localStorage.setItem("todoList", JSON.stringify(items));
}

function loadList() {
  const savedItems = JSON.parse(localStorage.getItem("todoList")) || [];
  const list = document.querySelector("ul");

  savedItems.forEach(itemText => {
    const listItem = document.createElement("li");
    const btn = document.createElement("button");

    listItem.appendChild(document.createTextNode(itemText));
    btn.innerText = "X";
    btn.addEventListener("click", () => {
      listItem.remove();
      saveList();
    });

    listItem.appendChild(btn);
    list.appendChild(listItem);
  });
}

document.querySelector("button").addEventListener("click", handleClick);

document.addEventListener("DOMContentLoaded", loadList);
