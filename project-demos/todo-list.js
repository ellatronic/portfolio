function toDoList() {
    var newField = document.getElementById('item');
    newField.addEventListener("keyup", addItem);
    
    //when unchecked, make todo item not crossed out
    //buttons, when clicked, filter done/not done items
    //make delete buttons for each item

    //for counting unique ids
    var count = 0;

    function addItem(event) {

    	//if enter is pressed
    	//get the 'list-items' ul
        if (event.keyCode === 13) {
          var listItems = document.getElementById("list-items");

        //create new li with unique id
        var newLi = document.createElement("li");

        //create a new checkbox
        var newCheckbox = document.createElement("input");
        newCheckbox.setAttribute("type", "checkbox");
        newCheckbox.id = "item-id" + count;
        count++;

        //create a new label with value of input text
        var newItem = document.createElement("label");
        newItem.innerHTML = newField.value;

        //add that new elements to todo list
        listItems.appendChild(newLi);
        newLi.appendChild(newCheckbox);
        newLi.appendChild(newItem);

        //clear out text box
          newField.value = "";
        }
    }

    /*var newField = document.getElementById("item");
    newField.addEventListener("keyup", addItem);
    //when box is checked, make todo item crossed out
    //when item checked, log id of item to console
    function checkItem(event) {
    	if (event.)
    }*/
}
toDoList();