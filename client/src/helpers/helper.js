export const recipeInSavedRecipes = (recipes, recipe) => {
    return (recipes.find((savedRecipe) => {

          return savedRecipe.recipeId === recipe.recipeId
    }))
}

export const ContainerStyle = {
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}