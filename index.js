
var ul = document.getElementById('ul')
var form = document.getElementById('add-todo');
var  toDolist = document.getElementById('todo-list');
var input = document.querySelector(input);


function resetInput() {
    toDoItem = "";
}

//call form / access form data /create input
form.onsubmit = function(e) {
    //don't forget to prevent the form submission
    e.preventDefault()
    console.log('submitted');//show submitted
    //access form data by targeting the input
    var toDoItem = document.querySelector('input');
    console.log(toDoItem.value);
    
    // check to see if toDoItem is on the list already, if not continue
    if (toDoItem !== "") {
        var toDoList = document.getElementById('#toDoList');
        var button = document.createElement('button');//create button El
        var myList = document.createElement('li');//create li El
        button.textContent = toDoItem;
        console.log(toDoItem,'readdy to log item')
        
        toDoItem.appendChild(myList)//this is the li list
        myList.appendChild(toDoItem)
        
        //myList.document.querySelector('#todo-list').textContent = toDoItem

        console.log(myList.value, 'toDoItem');
        
         //reset value
        toDoItem = " ";
        
    }
    //reset the form fields after console.logging the item
    toDoItem.value = "";
    console.log(toDoItem, "return to empty");
   
    //add items to the list 
    
}




