const formElementTODO = document.getElementById("TodoForm");
const ulElement = document.getElementById("listOfChores");


//Use JSON.parse to retrieve local storage//
//THIS IS THE RETRIEVAL PROCESS//

const savedChores = JSON.parse(localStorage.getItem("chores"));
for (let i = 0; i < savedChores.length; i++) {
  let newChore = document.createElement("li");
  newChore.innerText = savedChores[i].chore;
  newChore.isComplete = savedChores[i].isComplete ? true : false;
  
  if (newChore.isComplete) {
    newChore.style.textDecoration = "line-through";
  }
  todoList.appendChild(newChore);
}

//Push new chores into a function which creates the array
//-creates the array to save into local storage//

formElementTODO.addEventListener("submit", function(e) {
    e.preventDefault();
    let newChore = document.createElement("li");
    let choreValue = document.getElementById("chore").value;
    newChore.innerText = choreValue;
    newChore.isCompleted = false;
    formElementTODO.reset();
    ulElement.appendChild(newChore);
  
//Now save this new chore to the local Storage

savedChores.push({chore: newChore.innerText, isComplete: false});
localStorage.setItem("chores", JSON.stringify(savedChores));
});

//Finalize submission by adding in the click/completed data//

ulElement.addEventListener("click", function(e) {
    let checkedListItem = e.target;
  //!checkedListItem.iscompleted means that if the clicked item is true, that it is completed//
    if (!checkedListItem.isCompleted) {
      checkedListItem.style.textDecoration = "line-through";
      checkedListItem.isCompleted = true;
    } else {
      checkedListItem.style.textDecoration = "none";
      checkedListItem.isCompleted = false;
    }
});
