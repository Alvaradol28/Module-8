/*const formElement = document.querySelector("form");
formElement.addEventListener("submit", function(event){
    console.log('Chore list updated')
}) */

document.addEventListener("DOMContentLoaded", function(){
let formElementTODO = document.getElementById("TodoForm");
let ulElement = document.getElementById("listOfChores");

    formElementTODO.addEventListener("submit", function(e){
        e.preventDefault(); //So your form doesn't refresh the webpage and clear//


//Now, create the "unfriend button" from the tutorial or a removal button// 

    let checkChoreOff = document.createElement("button");
    checkChoreOff.innerText = "&#x2611"; //replace with an "x" if needed//

//Next, obtain the value from the user's input from the HTML and add it to the list//

    let newChore = document.createElementbyId("li");
    newChore.innerText = document.getElementById("chore").value; //Obtain the value//

//Now, append the new chore as well as the checkChoreOff button//

    ulElement.appendChild(newChore);
    newChore.appendChild(checkChoreOff);

    formElementTODO.reset();
    });

//ADD A LINE-THROUGH STRIKE EVENT USING CSS OR INLINE HTML//

    ulElement.addEventListener("click", function(e){
        const strikeButton = e.target.tagName;
        if (strikeButton === "li") {
            e.target.style.textDecoration = "line-through";        
        } else if ( strikeButton === "button") {
            e.target.parentNode.remove();
        }
    });

});

//Don't forget to reset the form if needed//

