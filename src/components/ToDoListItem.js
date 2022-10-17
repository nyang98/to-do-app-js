const ToDoListItem = (props) => {
  // Item Object {
  // id - unique identifier:
  // title - string value of user input task: string
  // isComplete - state of whether task is completed or not: boolean
  // isEdit - which mode read-only or edit mode task is in: boolean
  //
  // }
  const {toDo, onEdit, onTitleChange, onDelete} = props;

  const handleEditButtonClick = () => {
    // when button clicked -> set isEdit of the item to true
    return onEdit(toDo.id)
  }

  const handleInputChange = (e) => {
    return onTitleChange(
      toDo.id,
      e.target.value
    )
  }

  const handleEnter = () => {
    return onEdit(toDo.id)
  }

  const handleDelete = () => {
    return onDelete(toDo.id)
  }

  if (toDo.isEdit) {
    return (
      <div className="todoList_item_padding">
        <input
          type="text"
          value={toDo.title}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleEnter()
            }
          }}/>
        <button
          onClick={handleEditButtonClick}
          className="todoList_item_button"
        >
          ✓
        </button>
      </div>
    )
  } else {
    return (
      <div className="todoList_item">
        {toDo.title}
        <button
          onClick={handleEditButtonClick}
          className="todoList_item_button"
        >
          ✎
        </button>
        <button
          onClick={handleDelete}
          className="todoList_item_button"
        >
          ␡
        </button>
      </div>
    )
  }

}

export default ToDoListItem;