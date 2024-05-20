const recipeForm = document.getElementById('recipe-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

recipeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Recipe saved!');
  recipeForm.reset();
});

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = `<p>Searching for "${searchTerm}"...</p>`;
});

//  <section id="add-recipe">
{/* <h2>Add Recipe</h2>
<form id="recipe-form">
  <label for="recipe-name">Recipe Name:</label>
  <input type="text" id="recipe-name" name="recipe-name" required>

  <label for="ingredients">Ingredients:</label>
  <textarea id="ingredients" name="ingredients" required></textarea>

  <label for="instructions">Instructions:</label>
  <textarea id="instructions" name="instructions" required></textarea>

  <button type="submit">Save Recipe</button>
</form>
</section>

<section id="search">
<h2>Search Recipes</h2>
<input type="text" id="search-input" placeholder="Search recipes...">
<button id="search-button">Search</button>

<div id="search-results"></div>
</section>

<section id="about">
<h2>About Us</h2>
<p>We are a team of food enthusiasts dedicated to sharing delicious recipes.</p>
</section>
</main>

<footer>
<p>&copy; 2023 Recipe Website. All rights reserved.</p>
</footer>

<script src="script.js"></script> */}

