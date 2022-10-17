import {useState} from "react";
import ToDoItems from "./ToDoItems";

/**
 * Keeps track of todo items and allows user to add a to do item
 * @constructor
 */
const ToDoList = () => {
  // needed to declare type of useState for error: Argument of type 'string' is not assignable to parameter of type 'never'
  const [toDoList, setToDoList] = useState([])

  // Item Object {
  // id, - unique identifier
  // title, - string value of user input task
  // isComplete, - state of whether task is completed or not
  // mode, - which mode read-only or edit mode task is in
  //
  // }

  // This is my tie in between the item and the list
  // pass this down to the to do item in order to add to the existing list
  // still has access to todolist when calling from item component?
  const addToDoItem = (todo) => {
    // create new object with original to do items
    const updatedToDoList = [];
    for (let i = 0; i < toDoList.length; i++) {
      updatedToDoList.push(toDoList[i]);
    }

    updatedToDoList.push(todo);

    setToDoList(updatedToDoList)
    // return <ToDoItem />
  }

  const editToDoItem = (id) => {
    // make a copy of existing list with all items
    const updatedToDoList = [];
    for (let i = 0; i < toDoList.length; i++) {
      updatedToDoList.push(toDoList[i]);

      // need to update the item that is changing with new values
      // find item with matching id
      if (toDoList[i].id === id) {
        // update isEdit attribute to opposite of current mode
        updatedToDoList[i].isEdit = !updatedToDoList[i].isEdit;
      }
    }

    setToDoList(updatedToDoList)
  }

  const editToDoTitle = (id, value) => {
    // make a copy of existing list with all items
    const updatedToDoList = [];
    for (let i = 0; i < toDoList.length; i++) {
      updatedToDoList.push(toDoList[i]);

      // need to update the item that is changing with new values
      // find item with matching id
      if (toDoList[i].id === id) {
        // update
        updatedToDoList[i].title = value;
      }
    }

    setToDoList(updatedToDoList)
  }

  const deleteToDoItem = (id) => {
    const updatedToDoList = [];
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i].id !== id) {
        updatedToDoList.push(toDoList[i]);
      }
    }

    setToDoList(updatedToDoList)
  }

  const addItemButtonClick = () => {
    return addToDoItem({
      id: Math.random(),
      title: "",
      isComplete: false,
      isEdit: true
    })
  }


  return (
    <div className="todo_list">
      <ToDoItems
        toDoList={toDoList}
        onAdd={addToDoItem}
        onEdit={editToDoItem}
        onDelete={deleteToDoItem}
        onTitleChange={editToDoTitle}
      />
      <div className="center_button">
        <button
          onClick={addItemButtonClick}
          className="add_button"
        >
          +
        </button>
      </div>

    </div>
  )
}

export default ToDoList;