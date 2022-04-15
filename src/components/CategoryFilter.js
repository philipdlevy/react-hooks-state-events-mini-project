import React from "react";

function CategoryFilter({ categories, onSelectedCategory, selectedCategory }) {
  console.log("selectedCategory", selectedCategory)
  console.log("categories", categories)
  console.log("onSelectedCategory", onSelectedCategory)

const categoryArray = categories.map((category) => {
  return <button 
  onClick={() => onSelectedCategory(category)} 
  key={category} 
  className={selectedCategory === category ? "selected" : ""}>
    {category}
  </button>
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categoryArray}
    </div>
  );
}

export default CategoryFilter;

