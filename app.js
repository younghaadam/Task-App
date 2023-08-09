
const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")

const addBtn = document.querySelector(".addBtn")

addBtn.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("write in the field")
    }
    else{
        let li = document.createElement('li') // create a new element <li>
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
})

// listContainer.addEventListener("click", (e) => {
//     if(e.target.tagName === "li") {
//         e.target.classList.toggle("checked")
//      }
//      else if (e.target.tagName === "span"){
//         e.target.parentElement.remove()
//      }
// }, false)

document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  }, false);
  
//    using classList 

//   document.getElementById("listContainer").addEventListener("click", (e) => {
//     // Check if the clicked element has the "task" class
//     if (e.target.classList.contains("task")) {
//       e.target.classList.toggle("checked");
//     }
//     // Check if the clicked element has the "remove" class
//     else if (e.target.classList.contains("remove")) {
//       e.target.parentElement.remove();
//     }
//   }, false);
  