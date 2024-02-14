
var form = document.querySelector('form')


form.onsubmit = function(e) {
    //don't forget to prevent the form submission
    e.preventDefault()
    console.log('submitted')
    //access form data by targeting the input
    var listItem = document.querySelector('input')
    console.log(listItem.value)
    //reset the form fields after console.logging the item
    listItem.value = ''
    
}

//add list (li) to (ul)
const ul = document.createElement('ul')
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
console.log(li1,li2,li3,li4)

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)





