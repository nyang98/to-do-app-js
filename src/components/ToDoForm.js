import {useState} from "react";

const ToDoForm = (props) => {
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    // console.log(i)
    // console.log(i.target.value)
    setInput(e.target.value)
  }

  /**
   * Handles the onSubmit for the form which includes the input text and checkbox text
   * @param e
   */
  const handleSubmit = (e) => {
    // https://reactjs.org/docs/handling-events.html
    e.preventDefault()
    console.log("SUBMIT ENTERED")
    props.onSubmit({
      id: Math.random(),
      title: input,
      isChecked: false,
      isEdit: false
    })

    // clear out the input box after submit
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a to do item"
        value={input}
        onChange={handleInputChange}
      />
      {/*<input*/}
      {/*  type="checkbox"*/}
      {/*  defaultChecked={isChecked}*/}
      {/*/>*/}
    </form>
  )
}

export default ToDoForm;