import ToDoListItem from "./ToDoListItem";

const ToDoItems = (props) => {
  const {toDoList, onEdit, onDelete, onTitleChange} = props;
  // console.log("HERE")
  // console.log(toDoList)

  const toDoItems = [];
  for (let i = 0; i < toDoList.length; i++) {
    toDoItems.push(
      <ToDoListItem
        key={toDoList[i].id}
        toDo={toDoList[i]}
        onEdit={onEdit}
        onTitleChange={onTitleChange}
        onDelete={onDelete}
      />
    )
  }

  return toDoItems
}

export default ToDoItems;