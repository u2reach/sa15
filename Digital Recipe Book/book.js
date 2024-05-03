function showIngredients(recipeName) {
    const ingredientsList = document.getElementById(`${recipeName}Ingredients`);
    if (ingredientsList.style.display === 'none') {
        ingredientsList.style.display = 'block';
    } else {
        ingredientsList.style.display = 'none';
    }
}
