import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  console.log("taskcat", categories)
  const [userInput, setUserInput] = useState()
  const [categoryInput, setCategoryInput] = useState()

  const displaycategories = categories.map((category) => {
    return <option key={category}>{category}</option>
  })

function handleSubmit(e) {
  e.preventDefault();
  const newItemData = {
    text: userInput,
    category: categoryInput
  }
  onTaskFormSubmit(newItemData)
}

function handleValueInput(event) {
  setUserInput(event.target.value)
}

function handleChangeCategory(e) {
  setCategoryInput(e.target.value)
}

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleValueInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChangeCategory}>
          {displaycategories}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={handleSubmit}/>
    </form>
  );
}

export default NewTaskForm;
