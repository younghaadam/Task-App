
    const inputBox = document.querySelector("#input-box");
    const listContainer = document.querySelector("#list-container");
    const addBtn = document.querySelector(".addBtn");

    // Function to add a new item to the list
    function addItem() {
      if (inputBox.value === "") {
        alert("Please write in the field.");
      } else {
        let li = document.createElement("li"); // create a new element <li>
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      }
      inputBox.value = "";
    }
     addBtn.addEventListener("click", addItem);

// Add keydown event to the inputBox
inputBox.addEventListener("keydown", (event) => {
  // Check if the Enter key (key code 13) is pressed
  if (event.keyCode === 13) {
    addItem();
  }
});

// Add event listener to the list container
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false);
