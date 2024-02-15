

var form = document.getElementById('add-todo');
var  toDoList = document.getElementById('todo-list');
var input = document.querySelector('input');

//call form / access form data /create input
form.onsubmit = function(e) {
    //don't forget to prevent the form submission
    e.preventDefault()
    console.log('submitted');//show submitted
    //access form data by targeting the input
    var toDoItem = input.value.trim();//get input and stores the input
    console.log(input.value);
    if (!toDoItem) return// checking if its there
    input.value = "" //clears the field
    
    // check to see if toDoItem is on the list already, if not continue
    
        
        var listItem = document.createElement('li');//create li El
        var button = document.createElement('button');//create button El
        listItem.appendChild(button)//this is the li list
        button.textContent = toDoItem;
           console.log(button.textContent,'readdy to log item')
        button.onClick = handleClick //check if someone clicks
        toDoList.appendChild(listItem)//Post Item add to page
        

        console.log(listItem.value, 'toDoItem');
        
        
    
}

function handleClick(e) {//when theres a click on list item
    if (listItem.textDecoration.includes('line-through')){ //checking if line through the Item
        //if line then delete item
    } else {
        //put delete list item
    }
}


