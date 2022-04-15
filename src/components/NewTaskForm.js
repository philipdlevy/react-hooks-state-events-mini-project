import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  console.log("categories", categories)
  console.log("onTaskFormSubmit", onTaskFormSubmit)
  const [userInput, setUserInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("")

  const displayCategories = categories.map((category) => {
    return <option key={category}>{category}</option>
  })

function handleSubmit(e) {
  console.log(userInput, categoryInput)
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
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleValueInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChangeCategory}>
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
