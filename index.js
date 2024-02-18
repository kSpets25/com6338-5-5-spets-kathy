

var form = document.getElementById('add-todo');
var  toDoList = document.getElementById('todo-list');
var input = document.querySelector('input');

//call form / access form data /create input
form.onsubmit = function(e) {
    //don't forget to prevent the form submission
    e.preventDefault()
    console.log('submitted');

    //access form data by targeting the input
    var toDoItem = input.value.trim();   //get input and stores the input
    if (!toDoItem) return                // checking if its there
    input.value = ""                     //clears the field
    
    // check to see if toDoItem is on the list already, if not continue 
    var listItem = document.createElement('li');     //create li El
    var button = document.createElement('button');   //create button El
    button.addEventListener("click", handleClick);
        
        
    listItem.appendChild(button)      //this is the li list
    button.textContent = toDoItem; 
    button.onClick = handleClick      //check if someone clicks
    toDoList.appendChild(listItem)    //Post Item add to page       
}
    //when there is clicks on list item
function handleClick(e) {
        
    if  (this.style.textDecoration == "line-through") {    //checking if line through the Item
        this.parentNode.removeChild(this);                 //delete todo item
        } else {
        this.style.textDecoration = "line-through"; 
        }

}


