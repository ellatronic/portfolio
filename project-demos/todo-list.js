/* create a text input for adding new items to the TODO list
When you hit enter, a new TODO item should appear on your TODO list
The text input should be cleared
Each TODO item should have a checkbox and a corresponding label

Use CSS to make the text input bigger


/*
  Your Javascript here
*/
function toDoList() {
    var newField = document.getElementById('item');
    newField.addEventListener("keyup", addItem);

    function addItem(event) {

        if (event.keyCode === 13) {
          var list = document.getElementById('list');
        //create a new html element
        //<p></p>
          var newItem = document.createElement('p');
        //that element should contain the value of input textbox
        //<p>heello</p>
          newItem.innerText = newField.value;
        //add that new element to our list

          list.appendChild(newItem);
        //clear out text box
          newField.value = "";
        }
    }
}
toDoList();