// Get the form element
const form = document.querySelector(".adding");

// Get the recipe list element
const recipeList = document.getElementById("recipe-list");

// Add an event listener to the form's submit event
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input values
  const recipeName = document.getElementById("recipename").value;
  const ingredients = document.getElementById("ingredeints").value;
  const methods = document.getElementById("methods").value;

  // Create a new recipe object
  const recipe = {
    name: recipeName,
    ingredients: ingredients,
    methods: methods,
  };

  // Add the recipe to the recipe list
  addRecipeToList(recipe);

  // Clear the input fields
  document.getElementById("recipename").value = "";
  document.getElementById("ingredeints").value = "";
  document.getElementById("methods").value = "";
});

// Function to add a recipe to the list
function addRecipeToList(recipe) {
  // Create a new list item element
  const listItem = document.createElement("li");

  // Create a new heading element for the recipe name
  const recipeNameElement = document.createElement("h3");
  recipeNameElement.textContent = recipe.name;

  // Create a new paragraph element for the ingredients
  const ingredientsElement = document.createElement("p");
  ingredientsElement.textContent = `Ingredients: ${recipe.ingredients}`;

  // Create a new paragraph element for the methods
  const methodsElement = document.createElement("p");
  methodsElement.textContent = `Methods: ${recipe.methods}`;

  // Append the recipe name, ingredients, and methods to the list item
  listItem.appendChild(recipeNameElement);
  listItem.appendChild(ingredientsElement);
  listItem.appendChild(methodsElement);

  // Append the list item to the recipe list
  recipeList.appendChild(listItem);
}
